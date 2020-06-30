package com.advertsing.webapplication.controller;

import com.advertsing.webapplication.entity.broadcastmanagement.Message;
import com.advertsing.webapplication.entity.campaignmanagement.Campaign;
import com.advertsing.webapplication.entity.customermanagement.Customer;
import com.advertsing.webapplication.entity.usermanagement.User;
import com.advertsing.webapplication.form.usermanagement.UserForm;
import com.advertsing.webapplication.repository.broadcastmanagement.MessageRepository;
import com.advertsing.webapplication.repository.customermanagement.CustomerRepository;
import com.advertsing.webapplication.repository.usermanagement.UserRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.security.Principal;
import java.time.format.DateTimeFormatter;
import java.util.*;

@Controller
public class MainController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    MessageRepository messageRepository;

    @ResponseBody
    @GetMapping("/createadmin")
    public String createAdmin(){
        User userAccount = new User();
        userAccount.setUsername("admin");
        userAccount.setPassword("admin");
        userAccount.setRole("ADMIN");
        userAccount.setActive(true);
        userRepository.save(userAccount);
        return "Success!";
    }

    @GetMapping("/")
    public String index(){
        return "redirect:/customers";
    }

    @GetMapping("/login")
    public String showLoginForm(ModelMap model){
        model.addAttribute("userForm",new User());
        return "pages/login";
    }

    @GetMapping("/login-error")
    public String loginError(Model model){
        model.addAttribute("error",true);
        model.addAttribute("errormsg","Invalid username or password");
        return "pages/login";
    }


    @ResponseBody
    @PostMapping("/putUser")
    public String submitEventForm(@RequestBody String json){
        ObjectMapper mapper = new ObjectMapper();
        UserForm userForm = new UserForm();
        try {
            userForm = mapper.readValue(json, UserForm.class);
        } catch (IOException e) {
            e.printStackTrace();
        }
        User user;
        Optional<User> temp = userRepository.findById(Long.parseLong(userForm.getId()));
        if(!temp.isPresent())
            user = new User();
        else
            user = temp.get();

        user.setUsername(userForm.getUsername());
        user.setPassword(userForm.getPassword());
        user.setRole(userForm.getRole());
        user.setAddress(userForm.getAddress());
        user.setCity(userForm.getCity());
        user.setJobTitle(userForm.getJobTitle());
        user.setName(userForm.getName());
        user.setProvince(userForm.getProvince());
        user.setWorkPhone(userForm.getWorkPhone());
        user.setZipCode(userForm.getZipCode());

        userRepository.save(user);
        return "created succeed!";
    }

    @ResponseBody
    @GetMapping("/getUsers")
    public String users(){
        ObjectMapper mapper = new ObjectMapper();
        String json = "No user found!";
        try {
            json = mapper.writeValueAsString(userRepository.findAll());
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return json;
    }

    @ResponseBody
    @GetMapping("/dashboard/getData")
    public String dashboardGetData(@RequestParam Long customerId, @RequestParam String date){

        Customer customer = customerRepository.findByIdAndDeletedFalse(customerId).get();
        Map<String, List<Integer>> campaign_message = new HashMap<>();

        for(Campaign campaign : customer.getCampaignList()){
                List<Message> messageList = messageRepository.findMessageByDate(campaign.getId(), date, 1);
                List<Integer> day_message = new ArrayList<>();

                for(int i = 1; i <= 31; i++)
                    day_message.add(0);

                for(Message message : messageList){
                    String string = message.getSendDate();
                    String[] parts = string.split("-");
                    if(message.getSendDate().contains(date)) {
                        int messageSent = 0;
                        messageSent = day_message.get(Integer.parseInt(parts[0])-1) + message.getSent();
                        day_message.set(Integer.parseInt(parts[0])-1, messageSent);
                    }
                }
            campaign_message.put(campaign.getCampaignName(), day_message);
        }

        ObjectMapper mapper = new ObjectMapper();
        String json = "No user found!";

        try {
            json = mapper.writeValueAsString(campaign_message);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }

        return json;
    }

    @GetMapping("/dashboard")
    public String dashboard(Model model, Principal principal){
        User user = userRepository.findByUsernameAndDeletedFalseAndActiveTrue(principal.getName());
        Customer customer = customerRepository.findByIdAndDeletedFalse(user.getCustomerList().get(0).getId()).get();
        List<Campaign> campaignList = customer.getCampaignList();
        List<Message> messageList = new ArrayList<>();
        List<Message> messageRecentList = new ArrayList<>();

        Pageable paging = PageRequest.of(0, 2);

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");
        String currentDate = java.time.LocalDate.now().format(formatter);
        for(Campaign campaign : campaignList){
            messageList.addAll(messageRepository.findMessageByDate(campaign.getId(),currentDate, 2));
            messageRecentList.addAll(messageRepository.findMessageByRecentDate(campaign.getId(),currentDate, 1, paging));

//            messageList = messageRepository.findMessageByDate(, "2020-05");
        }

        model.addAttribute("customerId", customer.getId());
        model.addAttribute("messageList", messageList);
        model.addAttribute("messageRecentList", messageRecentList);
        return "pages/dashboard";
    }
}
