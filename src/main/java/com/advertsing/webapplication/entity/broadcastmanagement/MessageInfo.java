package com.advertsing.webapplication.entity.broadcastmanagement;

import com.advertsing.webapplication.entity.BaseEntiy;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Getter
@Setter
@Entity
public class MessageInfo extends BaseEntiy {

    @OneToOne
    private Message message;

    @OneToOne
    private Tag tag;

    public Message getMessage() {
        return message;
    }

    public void setMessage(Message message) {
        this.message = message;
    }

    public Tag getTag() {
        return tag;
    }

    public void setTag(Tag tag) {
        this.tag = tag;
    }
}
