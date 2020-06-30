package com.advertsing.webapplication.controller.customermanagement;

import com.advertsing.webapplication.constant.ErrorConstant;
import com.advertsing.webapplication.entity.campaignmanagement.Campaign;
import com.advertsing.webapplication.entity.customermanagement.Customer;
import com.advertsing.webapplication.entity.usermanagement.User;
import com.advertsing.webapplication.form.customermanagement.CustomerForm;
import com.advertsing.webapplication.repository.campaignmanagement.CampaignRepository;
import com.advertsing.webapplication.repository.customermanagement.CustomerRepository;
import com.advertsing.webapplication.repository.usermanagement.UserRepository;
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
import java.security.Principal;
import java.util.Optional;

@RequestMapping("/customers")
@Controller
public class CustomerController {

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    CampaignRepository campaignRepository;

    @Autowired
    UserRepository userRepository;

    @GetMapping("")
    public String showCustomerList(Model model, Principal principal, @RequestParam(required = false, defaultValue = "none") String userId){
        User user = userRepository.findByUsernameAndDeletedFalseAndActiveTrue(principal.getName());
        Pageable paging = PageRequest.of(0, 10, Sort.by("registrationDate").ascending());
        Page<Customer> customerList;
        if (user.getRole().contains("USER"))
            customerList = customerRepository.findAllByIssuerIdAndDeletedFalse(user.getId(), paging);
        else if (user.getRole().contains("MANAGER")) {
            if (userId.equals("none"))
                customerList = customerRepository.findAllByDeletedFalse(paging);
            else {
                customerList = customerRepository.findAllByIssuerIdAndDeletedFalse(Long.parseLong(userId), paging);
                model.addAttribute("userId", userId);
            }
        }
        else
            customerList = customerRepository.findAllByDeletedFalse(paging);
        model.addAttribute("customerList", customerList);
        model.addAttribute("pages", customerList.getTotalPages());
        return "pages/customermanagement/customers";
    }

    @GetMapping("/search")
    public String showSearchCustomerList(Model model, @RequestParam(required = false, defaultValue =  "1") Integer page, @RequestParam(required = false, defaultValue = "1") Integer entities, @RequestParam(required = false, defaultValue = " ") String keyword, @RequestParam(required = false, defaultValue = "true") boolean ascending, @RequestParam(required = false, defaultValue = "registrationDate") String sorting, Principal principal, @RequestParam(required = false, defaultValue = "none") String userId){
        User user = userRepository.findByUsernameAndDeletedFalseAndActiveTrue(principal.getName());
        Pageable paging;
        Page<Customer> customerList;
        if(ascending)
            paging = PageRequest.of(page-1, entities, Sort.by(sorting).ascending());
        else
            paging = PageRequest.of(page-1, entities, Sort.by(sorting).descending());

        if (user.getRole().contains("USER")) {
            if(keyword.equals(" "))
                customerList = customerRepository.findAllByIssuerIdAndDeletedFalse(user.getId(), paging);
            else
                customerList = customerRepository.findAllCustomerByProperties(user.getId(), keyword, keyword, keyword, keyword, paging);
        }
        else if (user.getRole().contains("MANAGER")) {
            if (keyword.equals(" ")) {
                if(!userId.equals("none") && !userId.equals("null"))
                    customerList = customerRepository.findAllByIssuerIdAndDeletedFalse( Long.parseLong(userId), paging);
                else
                    customerList = customerRepository.findAllByDeletedFalse(paging);
            }

            else {
                if(!userId.equals("none"))
                    customerList = customerRepository.findAllCustomerByProperties(Long.parseLong(userId), keyword, keyword, keyword, keyword, paging);
                else
                    customerList = customerRepository.findByCustomerNameOrCustomerTypeOrCustomerAddressOrRegistrationDateAndDeletedFalse(keyword, keyword, keyword, keyword, paging);
            }
        }
        else {
            if (keyword.equals(" "))
                customerList = customerRepository.findAllByDeletedFalse(paging);
            else
                customerList = customerRepository.findAllCustomerByProperties(Long.parseLong(userId), keyword, keyword, keyword, keyword, paging);
        }
        model.addAttribute("customerList", customerList);
        model.addAttribute("pages", customerList.getTotalPages());
        return "pages/customermanagement/table";
    }

    @GetMapping("/user={userId}")
    public String showCustomerListOfUser(Model model, @PathVariable Long userID){
        model.addAttribute("customerList", customerRepository.findAllByIssuerIdAndDeletedFalse(userID));
        return "pages/customermanagement/customers";
    }

    @GetMapping("/create")
    public String getCustomerForm(Model model){
        model.addAttribute("customerForm", new CustomerForm());
        return "pages/customermanagement/customerForm";
    }

    @GetMapping("/{id}")
    public String getCustomerForm(@PathVariable Long id, Model model, Principal principal){
        User user = userRepository.findByUsernameAndDeletedFalseAndActiveTrue(principal.getName());
        if(id != 0)
            if (!checkCustomerId(id, user))
                return "pages/error";
        CustomerForm customerForm;
        if(!model.containsAttribute("customerForm")){
            Optional<Customer> temp = customerRepository.findByIdAndDeletedFalse(id);
            if(temp.isPresent()) {
                customerForm = new CustomerForm(temp.get());
            }
            else {
                customerForm = new CustomerForm();
            }
            model.addAttribute("customerForm", customerForm);

        }
        return "pages/customermanagement/customerForm";
    }

    @PostMapping("/{id}")
    public String submitEventForm(@Valid CustomerForm customerForm, BindingResult bindingResult, RedirectAttributes redirectAttributes, @PathVariable Long id, Principal principal){
        User user = userRepository.findByUsernameAndDeletedFalseAndActiveTrue(principal.getName());
        Customer customer;
        if(customerForm.getId().equals("000"))
            if (!customerRepository.findByCustomerNameAndDeletedFalse(customerForm.getCustomerName()).isEmpty())
                bindingResult.rejectValue("customerName", null, ErrorConstant.USERNAME_ALREADY_EXIST);
        if(bindingResult.hasErrors()) {
            redirectAttributes.addFlashAttribute("org.springframework.validation.BindingResult.customerForm", bindingResult);
            redirectAttributes.addFlashAttribute("customerForm",customerForm);
            return "redirect:/customers/" + id;
        }
        Optional<Customer> temp = customerRepository.findByIdAndDeletedFalse(id);
        if(!temp.isPresent()) {
            customer = new Customer();
            customer.setDeleted(false);
        }
        else
            customer = temp.get();

        customer.setCustomerName(customerForm.getCustomerName());
        customer.setCustomerType(customerForm.getCustomerType());
        customer.setCustomerAddress(customerForm.getCustomerAddress());
        customer.setQtyCampaigns(customerForm.getQtyCampaigns());
        customer.setRegistrationDate(customerForm.getRegistrationDate());
        customer.setWage(Integer.parseInt(customerForm.getWage()));
        customer.setComment(customerForm.getComment());
        customer.setIssuer(user);
        Customer savedCustomer = customerRepository.save(customer);
        if(!temp.isPresent()) {
            user.getCustomerList().add(savedCustomer);
            user.addQtyCustomer();
        }
        userRepository.save(user);

        return "redirect:/customers";
    }

    @GetMapping("/delete/{id}")
    public String deleteCustomer(@PathVariable Long id, Principal principal){
        User user = userRepository.findByUsernameAndDeletedFalseAndActiveTrue(principal.getName());
        if (!checkCustomerId(id, user))
            return "pages/error";
        Customer customer = customerRepository.findByIdAndDeletedFalse(id).get();
        for(Campaign campaign : customer.getCampaignList()){
            campaign.setDeleted(true);
            campaignRepository.save(campaign);
        }
        customer.setDeleted(true);
        customerRepository.save(customer);
        user.subQtyCustomer();
        userRepository.save(user);
        return "redirect:/customers";
    }

    public boolean checkCustomerId(Long customerId, User user) {
        switch (user.getRole()) {
            case "GUEST":
                if (user.getCustomerList().get(0).getId().equals(customerId))
                    return true;
                else
                    return false;
            case "USER":
                if (customerRepository.findByIdAndDeletedFalse(customerId).get().getIssuer().getId().equals(user.getId()))
                    return true;
                else
                    return false;
            case "MANAGER":
                return true;
            default:
                return false;
        }
    }
}
