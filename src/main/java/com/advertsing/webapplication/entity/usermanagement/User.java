package com.advertsing.webapplication.entity.usermanagement;

import com.advertsing.webapplication.entity.BaseEntiy;
import com.advertsing.webapplication.entity.campaignmanagement.Campaign;
import com.advertsing.webapplication.entity.customermanagement.Customer;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Getter
@Setter
@Entity
//@Table(name = "User")
public class User extends BaseEntiy implements UserDetails {

    private String username;

    private String password;

    private String name;

    private String jobTitle;

    private String workPhone;

    private String address;

    private String city;

    private String province;

    private String zipCode;

    private String role;

    private int qtyCustomer;

    @ManyToMany(cascade = CascadeType.MERGE)
    private List<Customer> customerList;

    public List<Customer> getCustomerList() {
        return customerList;
    }

    public void setCustomerList(List<Customer> customerList) {
        this.customerList = customerList;
    }

//    private Set<Role> roles;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
        String[] authStrings = role.split(",");
        for(String authString : authStrings) {
            authorities.add(new SimpleGrantedAuthority(authString));
        }
        return authorities;
    }

    public int getQtyCustomer() {
        return qtyCustomer;
    }

    public void setQtyCustomer(int qtyCustomer) {
        this.qtyCustomer = qtyCustomer;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public void setPassword(String password) {
        this.password = new BCryptPasswordEncoder().encode(password);;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return false;
    }

    @Override
    public boolean isAccountNonLocked() {
        return false;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return false;
    }

    @Override
    public boolean isEnabled() {
        return false;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public String getWorkPhone() {
        return workPhone;
    }

    public void setWorkPhone(String workPhone) {
        this.workPhone = workPhone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getZipCode() {
        return zipCode;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }

    public String getRole() {
        return role;
    }

    public int addQtyCustomer(){
        this.qtyCustomer++;
        return this.qtyCustomer;
    }

    public int subQtyCustomer(){
        this.qtyCustomer--;
        return this.qtyCustomer;
    }
}
