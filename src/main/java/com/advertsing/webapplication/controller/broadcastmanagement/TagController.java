package com.advertsing.webapplication.controller.broadcastmanagement;

import com.advertsing.webapplication.entity.broadcastmanagement.Message;
import com.advertsing.webapplication.entity.broadcastmanagement.Tag;
import com.advertsing.webapplication.entity.schoolmanagement.Student;
import com.advertsing.webapplication.entity.schoolmanagement.StudentInfo;
import com.advertsing.webapplication.form.broadcastmanagement.MessageForm;
import com.advertsing.webapplication.form.broadcastmanagement.TagForm;
import com.advertsing.webapplication.repository.broadcastmanagement.TagRepository;
import com.advertsing.webapplication.repository.schoolmanagement.StudentInfoRepository;
import com.advertsing.webapplication.repository.schoolmanagement.StudentRepository;
import com.advertsing.webapplication.storage.StorageService;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.Valid;
import java.io.*;
import java.util.*;


@Controller
public class TagController {

    @Autowired
    TagRepository tagRepository;

    @Autowired
    StudentInfoRepository studentInfoRepository;

    @Autowired
    StudentRepository studentRepository;
    private final StorageService storageService;

    @Autowired
    public TagController(StorageService storageService) {
        this.storageService = storageService;
    }


    @PostMapping("/tag/save")
    public String tagSave(@Valid TagForm tagForm) throws IOException {


        tagRepository.saveAll(tagForm.getTags());
//        List<Student> studentList = studentRepository.findByIdAndDeletedFalse();


        List<List<String>> records = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(new FileReader("/Users/twentytwola/advertising-management-system/src/main/resources/arffs/Iris_KMeans.csv"))) {
            String line;
            while ((line = br.readLine()) != null) {
                String[] values = line.split(",");
                records.add(Arrays.asList(values));
            }
        }
        ArrayList<Student> students = new ArrayList<>();
        ArrayList<StudentInfo> studentInfoList= new ArrayList<>();
//
//        for (int i = 0;i < records.size();i++) {
//           for(int j=0; j < records.get(j).size();j++){
//               if(i > 0 ) {
//                   if(j == 0){
//                       double studentId = Double.valueOf(records.get(i).get(j));
//                       int  studentIdInt = (int)studentId;
//                       Student student = studentRepository.findByStudentNoAndDeletedFalse(String.valueOf(studentIdInt));
//
//                       ArrayList<Tag> tagArrayList = new ArrayList<>();
//
//                       StudentInfo studentInfo = new StudentInfo();
//                       studentInfo.setStudent(student);
//                       tagArrayList.add(tagForm.getTags().get(Integer.parseInt(records.get(i).get(records.get(j).size() - 1))));
//                       studentInfo.setTagList(tagArrayList);
//
//                       studentInfoList.add(studentInfo);
//
//                       if(null != student){
//                           students.add(student);
//                       }
//                   }
//               }
//
//           }
//        }
//
//        for(int k =0; k < students.size(); k++){
//            for(int j = 1; j < students.size();k++){
//                if(students.get(k).getStudentNo() == students.get(j).getStudentNo()){
//                    students.remove(j);
//                }
//            }
//        }
//
//        studentInfoRepository.saveAll(studentInfoList);

        String location = "src/main/resources/arffs/Iris_KMeans.csv";

        if(null != storageService.load(location) ){
            storageService.deleteByName();
        }
        return "redirect:/datamining";
    }
}
