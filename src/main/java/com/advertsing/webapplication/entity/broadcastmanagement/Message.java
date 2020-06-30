package com.advertsing.webapplication.entity.broadcastmanagement;


import com.advertsing.webapplication.entity.BaseEntiy;
import com.advertsing.webapplication.entity.campaignmanagement.Campaign;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;

@Getter
@Setter
@Entity
public class Message extends BaseEntiy {


    private  String messageName;
    //Draft = 0, Sent = 1, Scheduled = 2
    private  Integer messageStatus;
    private  String sendDate;
    private  String messageType;
    private  String messageJson;
    private int sent;

    @ManyToOne
    private Campaign campaign;


    public Message() {
        sent = 0;
    }

    public int getSent() {
        return sent;
    }

    public void setSent(int sent) {
        this.sent = sent;
    }

    public String getMessageName() {
        return messageName;
    }

    public Campaign getCampaign() {
        return campaign;
    }

    public void setCampaign(Campaign campaign) {
        this.campaign = campaign;
    }

    public void setMessageName(String messageName) {
        this.messageName = messageName;
    }

    public Integer getMessageStatus() {
        return messageStatus;
    }

    public void setMessageStatus(Integer messageStatus) {
        this.messageStatus = messageStatus;
    }

    public String getSendDate() {
        return sendDate;
    }

    public void setSendDate(String sendDate) {
        this.sendDate = sendDate;
    }

    public String getMessageType() {
        return messageType;
    }

    public void setMessageType(String messageType) {
        this.messageType = messageType;
    }

    public String getMessageJson() {
        return messageJson;
    }

    public void setMessageJson(String messageJson) {
        this.messageJson = messageJson;
    }

    public String getFullDate(){
        String string = getSendDate();
        String[] parts = string.split("-");
        return parts[2] + "-" + parts[1] + "-" + parts[0];
    }

}
