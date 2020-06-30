package com.advertsing.webapplication.entity.campaignmanagement;

import com.advertsing.webapplication.entity.BaseEntiy;
import com.advertsing.webapplication.entity.customermanagement.Customer;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.util.Date;

@Getter
@Setter
@Entity
public class Campaign extends BaseEntiy {
    private String campaignName;
    private String campaignType;
    private String startDate;
    private String endDate;
    private String comment;
    private int qtyMessages;

    @ManyToOne
    private Customer customer;

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public String getCampaignName() {
        return campaignName;
    }

    public void setCampaignName(String campaignName) {
        this.campaignName = campaignName;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public String getCampaignType() {
        return campaignType;
    }

    public void setCampaignType(String campaignType) {
        this.campaignType = campaignType;
    }

    public int getQtyMessages() {
        return qtyMessages;
    }

    public void setQtyMessages(int qtyMessages) {
        this.qtyMessages = qtyMessages;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public int addQtyMesaage(){
        this.qtyMessages++;
        return this.qtyMessages;
    }

    public int subQtyMesaage(){
        this.qtyMessages--;
        return this.qtyMessages;
    }
}
