package com.advertsing.webapplication.config.authentication;

import com.advertsing.webapplication.entity.usermanagement.User;
import com.advertsing.webapplication.repository.usermanagement.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class JpaAuthenticationProvider implements AuthenticationProvider {

    @Autowired
    private UserRepository userRepository;

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        UsernamePasswordAuthenticationToken token = (UsernamePasswordAuthenticationToken) authentication;
        String username = String.valueOf(token.getPrincipal());
        String password = String.valueOf(token.getCredentials());

        User userAccount = userRepository.findByUsernameAndDeletedFalseAndActiveTrue(username);
        try{
            if(!(userAccount != null) || (!BCrypt.checkpw(password, userAccount.getPassword())))
                throw new BadCredentialsException("Invalid username or password");

        } catch (IllegalArgumentException ex) {
            throw new IllegalArgumentException("The password in database is not encoded properly.");
        }

        return new UsernamePasswordAuthenticationToken(userAccount, userAccount.getPassword(), userAccount.getAuthorities());
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return UsernamePasswordAuthenticationToken.class.equals(authentication);
    }
}
