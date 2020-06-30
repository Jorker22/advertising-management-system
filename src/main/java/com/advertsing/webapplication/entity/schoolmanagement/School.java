package com.advertsing.webapplication.entity.schoolmanagement;

import com.advertsing.webapplication.entity.BaseEntiy;

import javax.persistence.Entity;

@Entity
public class School extends BaseEntiy {
    private String schoolName;

    public School() {
        setDeleted(false);
        setActive(true);
    }

    public String getSchoolName() {
        return schoolName;
    }

    public void setSchoolName(String schoolName) {
        this.schoolName = schoolName;
    }
}
