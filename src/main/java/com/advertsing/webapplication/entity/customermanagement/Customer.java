package com.advertsing.webapplication.entity.customermanagement;

import com.advertsing.webapplication.entity.BaseEntiy;
import com.advertsing.webapplication.entity.campaignmanagement.Campaign;
import com.advertsing.webapplication.entity.usermanagement.User;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@Entity
public class Customer extends BaseEntiy {
    private String customerName;
    private String customerType;
    private String customerAddress;
    private String registrationDate;
    private int wage;
    private int qtyCampaigns;
    private String comment;

    @ManyToOne(cascade = CascadeType.MERGE)
    private User issuer;

    @OneToMany(cascade = CascadeType.MERGE)
    private List<Campaign> campaignList;

    public String getCustomerName() {
        return customerName;
    }

    public User getIssuer() {
        return issuer;
    }

    public void setIssuer(User issuer) {
        this.issuer = issuer;
    }

    public List<Campaign> getCampaignList() {
        return campaignList;
    }

    public void setCampaignList(List<Campaign> campaignList) {
        this.campaignList = campaignList;
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

    public int getWage() {
        return wage;
    }

    public void setWage(int wage) {
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

    public int addQtyCampaign(){
        this.qtyCampaigns++;
        return this.qtyCampaigns;
    }

    public int subQtyCampaign(){
        this.qtyCampaigns--;
        return this.qtyCampaigns;
    }
}
