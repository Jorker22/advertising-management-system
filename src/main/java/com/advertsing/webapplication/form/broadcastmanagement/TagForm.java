package com.advertsing.webapplication.form.broadcastmanagement;


import com.advertsing.webapplication.entity.broadcastmanagement.Tag;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class TagForm {

    private List<Tag> tags;

    public List<Tag> getTags() {
        return tags;
    }

    public void setTags(List<Tag> tags) {
        this.tags = tags;
    }
}
