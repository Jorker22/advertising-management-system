package com.advertsing.webapplication.config.authentication;

import com.advertsing.webapplication.repository.usermanagement.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.web.DefaultRedirectStrategy;
import org.springframework.security.web.RedirectStrategy;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Collection;

@Component
 public class UserAuthenticationSuccessHandler implements AuthenticationSuccessHandler {

        private RedirectStrategy redirectStrategy = new DefaultRedirectStrategy();

        @Autowired
        UserRepository userRepository;

        @Override
        public void onAuthenticationSuccess(HttpServletRequest arg0, HttpServletResponse arg1,
                                            Authentication authentication) throws IOException, ServletException {

            boolean hasUserRole = false;
            boolean hasAdminRole = false;
            boolean hasManangerRole = false;
            boolean hasGuestRole = false;
            Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
            for (GrantedAuthority grantedAuthority : authorities) {
                if (grantedAuthority.getAuthority().equals("USER")) {
                    hasUserRole = true;
                    break;
                } else if (grantedAuthority.getAuthority().equals("ADMIN")) {
                    hasAdminRole = true;
                    break;
                }
                else if (grantedAuthority.getAuthority().equals("MANAGER")) {
                    hasManangerRole = true;
                    break;
                }
                else if (grantedAuthority.getAuthority().equals("GUEST")) {
                    hasGuestRole = true;
                    break;
                }
            }

            if (hasUserRole) {
                redirectStrategy.sendRedirect(arg0, arg1, "/customers");
            } else if (hasAdminRole) {
                redirectStrategy.sendRedirect(arg0, arg1, "/users");
            } else if (hasManangerRole) {
                redirectStrategy.sendRedirect(arg0, arg1, "/users");
            } else if (hasGuestRole) {
                redirectStrategy.sendRedirect(arg0, arg1, "/customers/" + userRepository.findByUsernameAndDeletedFalseAndActiveTrue(authentication.getName()).getId() + "/campaigns");
            } else {
                throw new IllegalStateException();
            }
        }
}
