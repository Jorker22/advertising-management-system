package com.advertsing.webapplication.util;

import com.advertsing.webapplication.entity.usermanagement.User;
import com.advertsing.webapplication.repository.customermanagement.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class Validate {
    @Autowired
    CustomerRepository customerRepository;
    
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
            default:
                return false;
        }
    }
}
