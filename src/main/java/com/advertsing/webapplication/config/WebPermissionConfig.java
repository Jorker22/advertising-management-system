package com.advertsing.webapplication.config;

import com.advertsing.webapplication.config.authentication.JpaAuthenticationProvider;
import com.advertsing.webapplication.config.authentication.UserAuthenticationSuccessHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
public class WebPermissionConfig extends WebSecurityConfigurerAdapter {
    @Autowired
    JpaAuthenticationProvider jpaAuthenticationProvider;

    @Autowired
    UserAuthenticationSuccessHandler userAuthenticationSuccessHandler;

    @Override
    public void configure (WebSecurity http) throws Exception {
        http.ignoring().antMatchers("/images/**","/styles/**","/js/**","/font/**","/plugins/**");

    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .authorizeRequests()
                .antMatchers("/users/**").hasAnyAuthority("ADMIN", "MANAGER")
                .antMatchers("/customers/**/campaigns/**").hasAnyAuthority("GUEST", "USER", "MANAGER")
                .antMatchers("/customers/**").hasAnyAuthority("MANAGER", "USER")
                .antMatchers("/index","/register","/edit/**","/images/**","/styles/**","/js/**","/font/**", "/plugins/**", "/createadmin", "/getUsers", "/putUser", "/dashboard", "/dashboard/*","/callback").permitAll()


//                .antMatchers("/competitor/**").hasAnyAuthority("ADMIN")
                .anyRequest().authenticated()
                .and()
                .formLogin()
                .loginPage("/login").successHandler(userAuthenticationSuccessHandler)
                .failureUrl("/login-error")
                .permitAll()
                .and()
                .logout()
                .permitAll()
                .and()
                .csrf().disable() ;
    }

    @Override
    public void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.authenticationProvider(jpaAuthenticationProvider);
    }

}
