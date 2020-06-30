package com.advertsing.webapplication.controller.campaignmanagement;

import com.advertsing.webapplication.entity.campaignmanagement.Campaign;
import com.advertsing.webapplication.entity.customermanagement.Customer;
import com.advertsing.webapplication.entity.usermanagement.User;
import com.advertsing.webapplication.form.campaignmanagement.CampaignForm;
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

@RequestMapping("/customers/{customerId}/campaigns")
@Controller
public class CampaignController {

    @Autowired
    CampaignRepository campaignRepository;

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    UserRepository userRepository;

    @GetMapping("")
    public String showCampaignList( @PathVariable Long customerId, Model model, Principal principal){
        User user = userRepository.findByUsernameAndDeletedFalseAndActiveTrue(principal.getName());
        if(!user.getRole().equals("MANAGER"))
            if (!checkCustomerId(customerId, user))
                return "pages/error";
        Pageable paging = PageRequest.of(0, 10, Sort.by("startDate").ascending());
        Page<Campaign> campaignList;
        if(user.getRole().contains("GUEST"))
            campaignList = campaignRepository.findAllByCustomerIdAndDeletedFalse(user.getCustomerList().get(0).getId(), paging);
        else
            campaignList = campaignRepository.findAllByCustomerIdAndDeletedFalse(customerId, paging);
        model.addAttribute("campaignList", campaignList);
        model.addAttribute("customerId", customerId);
        model.addAttribute("pages", campaignList.getTotalPages());
        return "pages/campaignmanagement/campaigns";
    }

    @GetMapping("/search")
    public String showSearchCampaignList( @PathVariable Long customerId, Model model, Principal principal, @RequestParam(required = false, defaultValue =  "1") Integer page, @RequestParam(required = false, defaultValue = "1") Integer entities, @RequestParam(required = false, defaultValue = " ") String keyword, @RequestParam(required = false, defaultValue = "true") boolean ascending, @RequestParam(required = false, defaultValue = "startDate") String sorting){
        User user = userRepository.findByUsernameAndDeletedFalseAndActiveTrue(principal.getName());
        if(!user.getRole().equals("MANAGER"))
            if (!checkCustomerId(customerId, user))
                return "pages/error";
        Pageable paging;
        Page<Campaign> campaignList;
        if(ascending)
            paging = PageRequest.of(page-1, entities, Sort.by(sorting).ascending());
        else
            paging = PageRequest.of(page-1, entities, Sort.by(sorting).descending());

        if(user.getRole().contains("GUEST")) {
            if(keyword.equals(" "))
                campaignList = campaignRepository.findAllByCustomerIdAndDeletedFalse(user.getCustomerList().get(0).getId(), paging);
            else
                campaignList = campaignRepository.findAllCustomerByProperties(user.getCustomerList().get(0).getId(), keyword, keyword, keyword, keyword, paging);
        }
        else {
            if (keyword.equals(" "))
                campaignList = campaignRepository.findAllByCustomerIdAndDeletedFalse(customerId, paging);
            else
                campaignList = campaignRepository.findAllCustomerByProperties(customerId, keyword, keyword, keyword, keyword, paging);
//                campaignList = campaignRepository.findAllByCustomerIdAndCampaignNameOrCampaignTypeOrStartDateOrEndDateAndDeletedFalse(customerId, keyword, keyword, keyword, keyword, paging);
        }
        model.addAttribute("campaignList", campaignList);
        model.addAttribute("customerId", customerId);
        model.addAttribute("pages", campaignList.getTotalPages());
        return "pages/campaignmanagement/table";
    }

    @GetMapping("/create")
    public String getCampiagnForm(Model model, @PathVariable Long customerId){
        model.addAttribute("campaignForm", new CampaignForm());
        model.addAttribute("customerId", customerId);
        return "pages/campaignmanagement/campaignForm";
    }

    @GetMapping("/{id}")
    public String getCampiagnForm(@PathVariable String id, Model model, @PathVariable Long customerId, Principal principal){
        User user = userRepository.findByUsernameAndDeletedFalseAndActiveTrue(principal.getName());
        if (!checkCustomerId(customerId, user))
            return "pages/error";
        CampaignForm campaignForm;
        if(!model.containsAttribute("campaignForm")){
            Optional<Campaign> temp = campaignRepository.findByIdAndDeletedFalse(Long.parseLong(id));
            if(temp.isPresent()) {
                campaignForm = new CampaignForm(temp.get());
            }
            else {
                campaignForm = new CampaignForm();
            }
            model.addAttribute("campaignForm", campaignForm);
        }
        model.addAttribute("customerId", customerId);
        return "pages/campaignmanagement/campaignForm";
    }

    @PostMapping("/{id}")
    public String submitCampiagnForm(@PathVariable String id, @PathVariable Long customerId, Model model, @Valid CampaignForm campaignForm, BindingResult bindingResult, RedirectAttributes redirectAttributes){
        Campaign campaign;
        if(bindingResult.hasErrors()) {
            redirectAttributes.addFlashAttribute("org.springframework.validation.BindingResult.campaignForm", bindingResult);
            redirectAttributes.addFlashAttribute("campaignForm",campaignForm);
            return "redirect:/customers/"+ customerId +"/campaigns/" + id;
        }
        Optional<Campaign> temp = campaignRepository.findByIdAndDeletedFalse(Long.parseLong(campaignForm.getId()));
        if(!temp.isPresent()) {
            campaign = new Campaign();
            campaign.setDeleted(false);
        }
        else
            campaign = temp.get();

        campaign.setCampaignName(campaignForm.getCampaignName());
        campaign.setCampaignType(campaignForm.getCampaignType());
        campaign.setStartDate(campaignForm.getStartDate());
        campaign.setEndDate(campaignForm.getEndDate());
        campaign.setQtyMessages(campaignForm.getQtyMessages());
        campaign.setComment(campaignForm.getComment());
        Customer customer = customerRepository.findByIdAndDeletedFalse(customerId).get();
        campaign.setCustomer(customer);
        Campaign savedCampaign = campaignRepository.save(campaign);
        if(!temp.isPresent()) {
            customer.getCampaignList().add(savedCampaign);
            customer.addQtyCampaign();
        }
        customerRepository.save(customer);
        model.addAttribute("customerId", customerId);

        return "redirect:/customers/" + customerId + "/campaigns";
    }

    @GetMapping("/delete/{id}")
    public String deleteCampaign(@PathVariable String id, @PathVariable Long customerId, Principal principal, Model model){
        User user = userRepository.findByUsernameAndDeletedFalseAndActiveTrue(principal.getName());
        if (!checkCustomerId(customerId, user))
            return "pages/error";
        Campaign campaign = campaignRepository.findByIdAndDeletedFalse(Long.parseLong(id)).get();
        campaign.setDeleted(true);
        campaignRepository.save(campaign);
        Customer customer = customerRepository.findByIdAndDeletedFalse(customerId).get();
        customer.subQtyCampaign();
        customerRepository.save(customer);
        model.addAttribute("customerId", customerId);
        return "redirect:/customers/" + customerId + "/campaigns";
    }

    public boolean checkCustomerId(Long customerId, User user) {
        switch (user.getRole()) {
            case "GUEST":
                if (user.getCustomerList().get(0).getId().equals(user.getCustomerList().get(0).getId()))

//                if (user.getCustomerList().get(0).getId().equals(customerId))
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
