package com.advertsing.webapplication.form.usermanagement;

import com.advertsing.webapplication.constant.ErrorConstant;
import com.advertsing.webapplication.entity.usermanagement.User;
import com.advertsing.webapplication.repository.usermanagement.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import java.util.Optional;

public class UserFormValidation implements Validator {
    @Override
    public boolean supports(Class<?> clazz) {
        return UserForm.class.equals(clazz);
    }

    @Override
    public void validate(Object target, Errors errors) {
        try {
            UserForm form = (UserForm) target;
            String password = form.getPassword();
            String confirmPassword = form.getConfirmPassword();
            if (password.length() < 4 || password.length() > 64)
                errors.rejectValue("password", null, ErrorConstant.PASSWORD_REJECT_LENGHT);
            else if (!password.equals(confirmPassword))
                errors.rejectValue("password", null, ErrorConstant.PASSWORD_REJECT_NOT_MATCH);
        }catch (NullPointerException e) {
        }

    }
}
