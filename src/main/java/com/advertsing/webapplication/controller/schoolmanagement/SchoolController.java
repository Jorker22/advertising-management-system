package com.advertsing.webapplication.controller.schoolmanagement;

import com.advertsing.webapplication.entity.schoolmanagement.School;
import com.advertsing.webapplication.repository.schoolmanagement.SchoolRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/schools")
public class SchoolController {

    @Autowired
    SchoolRepository schoolRepository;

    @GetMapping("")
    public String getSchoolList(Model model){
        model.addAttribute("pages", 0);
        model.addAttribute("schoolList", schoolRepository.findAll());
        return "pages/schoolmanagement/schools";
    }

    @GetMapping("/search")
    public String setActive(Model model, @RequestParam Long schoolId,  @RequestParam boolean status){
        School school = schoolRepository.findByIdAndDeletedFalse(schoolId);
        school.setActive(status);
        schoolRepository.save(school);
        return "redirect:/schools";
    }
}
