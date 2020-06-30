package com.advertsing.webapplication.entity.schoolmanagement;

import com.advertsing.webapplication.entity.BaseEntiy;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;

@Entity

@Getter
@Setter
public class Student extends BaseEntiy {
    private String  studentNo;
    private boolean acceptance;
    private String schoolName;
    private String lineAccount;

    public String getStudentNo() {
        return studentNo;
    }

    public void setStudentNo(String studentNo) {
        this.studentNo = studentNo;
    }

    public boolean isAcceptance() {
        return acceptance;
    }

    public void setAcceptance(boolean acceptance) {
        this.acceptance = acceptance;
    }

    public String getSchoolName() {
        return schoolName;
    }

    public void setSchoolName(String schoolName) {
        this.schoolName = schoolName;
    }

    public String getLineAccount() {
        return lineAccount;
    }

    public void setLineAccount(String lineAccount) {
        this.lineAccount = lineAccount;
    }
}
