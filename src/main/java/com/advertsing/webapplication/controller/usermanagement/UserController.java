package com.advertsing.webapplication.controller.usermanagement;

import com.advertsing.webapplication.constant.ErrorConstant;
import com.advertsing.webapplication.entity.customermanagement.Customer;
import com.advertsing.webapplication.entity.usermanagement.User;
import com.advertsing.webapplication.form.customermanagement.CustomerForm;
import com.advertsing.webapplication.form.usermanagement.UserForm;
import com.advertsing.webapplication.form.usermanagement.UserFormValidation;
import com.advertsing.webapplication.repository.customermanagement.CustomerRepository;
import com.advertsing.webapplication.repository.usermanagement.UserRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.hibernate.mapping.Array;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Controller
@RequestMapping("/users")
public class UserController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    CustomerRepository customerRepository;

    @GetMapping("")
    public String showUserList(Model model){
        Pageable paging;
        paging = PageRequest.of(0, 10, Sort.by("name").ascending());
        Page<User> userList = userRepository.findAllByDeletedFalse(paging);
        model.addAttribute("userList", userList);
        model.addAttribute("pages", userList.getTotalPages());
        return "pages/usermanagement/users";
    }

    @GetMapping("/search")
    public String showSearchUserList(Model model, @RequestParam(required = false, defaultValue =  "1") Integer page, @RequestParam(required = false, defaultValue = "10") Integer entities, @RequestParam(required = false, defaultValue = " ") String keyword, @RequestParam(required = false, defaultValue = "true") boolean ascending, @RequestParam(required = false, defaultValue = "username") String sorting){
        Pageable paging;
        if(ascending)
            paging = PageRequest.of(page-1, entities, Sort.by(sorting).ascending());
        else
            paging = PageRequest.of(page-1, entities, Sort.by(sorting).descending());
        Page<User> userList;
        if(keyword.equals(" "))
            userList = userRepository.findAllByDeletedFalse(paging);
        else {
            userList = userRepository.findByUsernameOrNameOrJobTitleOrWorkPhoneOrAddressOrCityOrProvinceOrZipCodeOrRoleAndDeletedFalse(keyword, keyword, keyword, keyword, keyword, keyword, keyword, keyword, keyword, paging);
        }
        model.addAttribute("userList", userList);
        model.addAttribute("pages", userList.getTotalPages());
        return "pages/usermanagement/table";
    }

    @GetMapping("/create")
    public String getUserForm(Model model){
        model.addAttribute("userForm", new UserForm());
        model.addAttribute("customerList", customerRepository.findAllByDeletedFalse());
        return "pages/usermanagement/userForm";
    }

    @GetMapping("/{id}")
    public String getUserForm(@PathVariable String id, Model model){
        UserForm userForm;
        if(!model.containsAttribute("userForm")){
            Optional<User> temp = userRepository.findById(Long.parseLong(id));
            if(temp.isPresent()) {
                userForm = new UserForm(temp.get());
            }
            else {
                userForm = new UserForm();
            }
            model.addAttribute("userForm", userForm);
        }
        model.addAttribute("customerList", customerRepository.findAllByDeletedFalse());
        return "pages/usermanagement/userForm";
    }

    @PostMapping("/{id}")
    public String submitEventForm(@PathVariable String id, Model model, @Valid UserForm userForm, BindingResult bindingResult, RedirectAttributes redirectAttributes, @RequestParam Map<String, String> param){
        User user;
        if(userForm.getId().equals("000")) {
            UserFormValidation validation = new UserFormValidation();
            validation.validate(userForm, bindingResult);
            if (!userRepository.findByUsernameAndDeletedFalse(userForm.getUsername()).isEmpty())
                bindingResult.rejectValue("username", null, ErrorConstant.USERNAME_ALREADY_EXIST);
        }
        if(bindingResult.hasErrors()) {
            redirectAttributes.addFlashAttribute("org.springframework.validation.BindingResult.userForm", bindingResult);
            redirectAttributes.addFlashAttribute("userForm",userForm);
            return "redirect:/users/" + id;
        }
        Optional<User> temp = userRepository.findById(Long.parseLong(userForm.getId()));
        if(!temp.isPresent()) {
            user = new User();
            user.setDeleted(false);
            user.setPassword(userForm.getPassword());
        }
        else
            user = temp.get();

        user.setUsername(userForm.getUsername());
        user.setRole(userForm.getRole());
        user.setAddress(userForm.getAddress());
        user.setCity(userForm.getCity());
        user.setJobTitle(userForm.getJobTitle());
        user.setName(userForm.getName());
        user.setProvince(userForm.getProvince());
        user.setWorkPhone(userForm.getWorkPhone());
        user.setZipCode(userForm.getZipCode());
        user.setActive(userForm.isActive());
        if(!userForm.getCompany().equals("none"))
            if(userForm.getRole().equals("GUEST")) {
                List<Customer> customer = new ArrayList<>();
                customer.add(customerRepository.findById(Long.valueOf(userForm.getCompany())).get());
                user.setCustomerList(customer);
            }
        userRepository.save(user);
        return "redirect:/users";
    }

    @GetMapping("/delete/{id}")
    public String deleteUser(@PathVariable Long id){
        User user = userRepository.findById(id).get();
        user.setDeleted(true);
        if(user.getRole().contains("GUEST"))
            user.getCustomerList().remove(0);
        userRepository.save(user);
//        userRepository.deleteById(Long.parseLong(id));
        return "redirect:/users";
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
}
