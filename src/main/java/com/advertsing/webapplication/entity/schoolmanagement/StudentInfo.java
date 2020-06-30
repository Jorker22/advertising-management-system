package com.advertsing.webapplication.entity.schoolmanagement;


import com.advertsing.webapplication.entity.BaseEntiy;
import com.advertsing.webapplication.entity.broadcastmanagement.Tag;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;


@Getter
@Setter
@Entity
public class StudentInfo extends BaseEntiy {

    @OneToOne
    private Student student;

//    @OneToMany(cascade = {CascadeType.ALL})
    @OneToMany
    private List<Tag> tagList;

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    public List<Tag> getTagList() {
        return tagList;
    }

    public void setTagList(List<Tag> tagList) {
        this.tagList = tagList;
    }
}
