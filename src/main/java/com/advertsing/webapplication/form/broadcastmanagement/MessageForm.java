package com.advertsing.webapplication.form.broadcastmanagement;

import com.advertsing.webapplication.entity.broadcastmanagement.Message;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
public class MessageForm {

    private String id;
    @NotBlank
    private String message_name;


    private  Integer message_status;


    private String send_date;

    @NotBlank
    private  String message_type;

    @NotBlank
    private  String messageJson;

    private Long tagId;

    public MessageForm() {
        id = "0";
    }

    public MessageForm(Message message) {
        this.id = message.getId().toString();
        this.message_name = message.getMessageName();
        this.message_status = message.getMessageStatus();
        this.send_date = message.getSendDate();
        this.message_type = message.getMessageType();
        this.messageJson = message.getMessageJson();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getMessage_name() {
        return message_name;
    }

    public void setMessage_name(String message_name) {
        this.message_name = message_name;
    }

    public Integer getMessage_status() {
        return message_status;
    }

    public void setMessage_status(Integer message_status) {
        this.message_status = message_status;
    }

    public String getSend_date() {
        return send_date;
    }

    public void setSend_date(String send_date) {
        this.send_date = send_date;
    }

    public String getMessage_type() {
        return message_type;
    }

    public void setMessage_type(String message_type) {
        this.message_type = message_type;
    }

    public String getMessageJson() {
        return messageJson;
    }

    public void setMessageJson(String messageJson) {
        this.messageJson = messageJson;
    }

    public Long getTagId() {
        return tagId;
    }

    public void setTagId(Long tagId) {
        this.tagId = tagId;
    }
}
