package com.advertsing.webapplication.form.customermanagement;

import com.advertsing.webapplication.constant.ErrorConstant;
import com.advertsing.webapplication.entity.customermanagement.Customer;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Getter
@Setter
public class CustomerForm {
    private String id;
    @NotBlank
    @Size(min = 4, max = 64)
    private String customerName;
    @NotBlank
    @Size(min = 4, max = 64)
    private String customerType;
    @NotBlank
    @Size(min = 4, max = 64)
    private String customerAddress;
    @NotBlank
    private String registrationDate;
    @NotBlank
    @Pattern(regexp = "^(0|[0-9][0-9]*)$", message = ErrorConstant.INPUT_REJECT_NUMBER)
    private String wage;
    private int qtyCampaigns;
    private String comment;

    public CustomerForm() {
        this.id = "000";
        this.qtyCampaigns = 0;
    }

    public CustomerForm(Customer customer) {
        this.id = customer.getId().toString();
        this.customerName = customer.getCustomerName();
        this.customerType = customer.getCustomerType();
        this.customerAddress = customer.getCustomerAddress();
        this.registrationDate = customer.getRegistrationDate();
        this.wage = Integer.toString(customer.getWage());
        this.qtyCampaigns = customer.getQtyCampaigns();
        this.comment = customer.getComment();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getCustomerType() {
        return customerType;
    }

    public void setCustomerType(String customerType) {
        this.customerType = customerType;
    }

    public String getCustomerAddress() {
        return customerAddress;
    }

    public void setCustomerAddress(String customerAddress) {
        this.customerAddress = customerAddress;
    }

    public String getRegistrationDate() {
        return registrationDate;
    }

    public void setRegistrationDate(String registrationDate) {
        this.registrationDate = registrationDate;
    }

    public String getWage() {
        return wage;
    }

    public void setWage(String wage) {
        this.wage = wage;
    }

    public int getQtyCampaigns() {
        return qtyCampaigns;
    }

    public void setQtyCampaigns(int qtyCampaigns) {
        this.qtyCampaigns = qtyCampaigns;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}
