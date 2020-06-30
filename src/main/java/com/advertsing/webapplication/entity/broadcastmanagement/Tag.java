package com.advertsing.webapplication.entity.broadcastmanagement;

import com.advertsing.webapplication.entity.BaseEntiy;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;

@Getter
@Setter
@Entity
public class Tag extends BaseEntiy {

    private String tagName;
    private String tagDetail;

    public String getTagName() {
        return tagName;
    }

    public void setTagName(String tagName) {
        this.tagName = tagName;
    }

    public String getTagDetail() {
        return tagDetail;
    }

    public void setTagDetail(String tagDetail) {
        this.tagDetail = tagDetail;
    }
}
