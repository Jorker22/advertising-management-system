package com.advertsing.webapplication.controller.schoolmanagement;

import com.advertsing.webapplication.entity.schoolmanagement.Student;
import com.advertsing.webapplication.repository.schoolmanagement.StudentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

import java.security.Principal;

@Controller
public class StudentController {

    @Autowired
    StudentRepository studentRepository;

    @ResponseBody
    @GetMapping("/createStudent")
    public String createStudent(){
        Long student_id = Long.valueOf(7953);
        Student student = new Student();

        student.setStudentNo("8163");
        student.setAcceptance(true);
        student.setLineAccount("Uf5beddfe623d7184c353ebc8a55c3ad2");
        student.setSchoolName("test");
        studentRepository.save(student);

        return "Success";
    }

}
