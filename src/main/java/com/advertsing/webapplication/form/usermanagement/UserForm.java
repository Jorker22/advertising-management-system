package com.advertsing.webapplication.form.usermanagement;

import com.advertsing.webapplication.constant.ErrorConstant;
import com.advertsing.webapplication.entity.customermanagement.Customer;
import com.advertsing.webapplication.entity.usermanagement.User;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

public class UserForm {
    private String id;
    @NotBlank
    @Size(min = 4, max = 64)
    @Pattern(regexp = "^[\\p{Alnum}]{1,32}$", message = ErrorConstant.INPUT_REJECT_ALPHABET_OR_NUMBER)
    @NotBlank
    private String username;
    private String password;
    private String confirmPassword;
    @NotBlank
    @Size(min = 4, max = 64)
    private String name;
    @NotBlank
    @Size(min = 4, max = 64)
    private String jobTitle;
    @NotBlank
    @Pattern(regexp = "^(0|[0-9][0-9]*)$", message = ErrorConstant.INPUT_REJECT_NUMBER)
    private String workPhone;
    private String address;
    private String city;
    private String company;
    private String companyId;
    private String province;
    @NotBlank
    @Pattern(regexp = "^(0|[0-9][0-9]*)$", message = ErrorConstant.INPUT_REJECT_NUMBER)
    private String zipCode;
    private String role;
    private boolean active;

    public UserForm() {
        this.id = "000";
    }

    public UserForm(User user) {
        this.id = user.getId().toString();
        this.username = user.getUsername();
        this.password = user.getPassword();
        this.name = user.getName();
        this.jobTitle = user.getJobTitle();
        this.workPhone = user.getWorkPhone();
        this.address = user.getAddress();
        this.city = user.getCity();
        this.province = user.getProvince();
        this.zipCode = user.getZipCode();
        this.role = user.getRole();
        this.active = user.isActive();
        if(role.contains("GUEST")) {
            this.company = user.getCustomerList().get(0).getCustomerName();
            this.companyId = user.getCustomerList().get(0).getId().toString();
        }
        else
            this.company ="none";
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public String getCompanyId() {
        return companyId;
    }

    public void setCompanyId(String companyId) {
        this.companyId = companyId;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getConfirmPassword() {
        return confirmPassword;
    }

    public void setConfirmPassword(String confirmPassword) {
        this.confirmPassword = confirmPassword;
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

    public void setRole(String role) {
        this.role = role;
    }
}
