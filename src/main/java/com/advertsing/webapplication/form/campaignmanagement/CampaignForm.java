package com.advertsing.webapplication.form.campaignmanagement;

import com.advertsing.webapplication.constant.ErrorConstant;
import com.advertsing.webapplication.entity.campaignmanagement.Campaign;
import com.advertsing.webapplication.entity.customermanagement.Customer;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.util.Date;

@Getter
@Setter
public class CampaignForm {
    private String id;
    @NotBlank
    @Size(min = 4, max = 64)
    private String campaignName;
    @NotBlank
    @Size(min = 4, max = 64)
    private String campaignType;
    @NotBlank
    private String startDate;
    @NotBlank
    private String endDate;
    private int qtyMessages;
    private String comment;

    public void setComment(String comment) {
        this.comment = comment;
    }

    public CampaignForm(Campaign campaign) {
        this.id = campaign.getId().toString();
        this.campaignName = campaign.getCampaignName();
        this.campaignType = campaign.getCampaignType();
        this.startDate = campaign.getStartDate();
        this.endDate = campaign.getEndDate();
        this.qtyMessages = campaign.getQtyMessages();
        this.comment = campaign.getComment();

    }

    public CampaignForm() {
        this.id = "000";
        this.qtyMessages = 0;
    }

    public String getComment() {
        return comment;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCampaignName() {
        return campaignName;
    }

    public void setCampaignName(String campaignName) {
        this.campaignName = campaignName;
    }

    public String getCampaignType() {
        return campaignType;
    }

    public void setCampaignType(String campaignType) {
        this.campaignType = campaignType;
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

    public int getQtyMessages() {
        return qtyMessages;
    }

    public void setQtyMessages(int qtyMessages) {
        this.qtyMessages = qtyMessages;
    }
}
