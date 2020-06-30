//package com.advertsing.webapplication.controller.databasefilemanagement;
//
//
//import com.advertsing.webapplication.entity.databasefilesmanagement.DBFile;
//import com.advertsing.webapplication.form.broadcastmanagement.TagForm;
//import com.advertsing.webapplication.form.machinelearningmanagement.ClusterForm;
//import com.advertsing.webapplication.form.usermanagement.UserForm;
//import com.advertsing.webapplication.repository.customermanagement.CustomerRepository;
//import com.advertsing.webapplication.services.DBFileStorageService;
//import com.advertsing.webapplication.storage.StorageService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.GetMapping;
//
//import java.util.List;
//import java.util.stream.Collectors;
//
//@Controller
//public class MainFilesController {
//
//    private final StorageService storageService;
//    @Autowired
//    private DBFileStorageService dbFileStorageService;
//
//    @Autowired
//    CustomerRepository customerRepository;
//
//    @Autowired
//    public MainFilesController(StorageService storageService) {
//        this.storageService = storageService;
//    }
//
//    @GetMapping("/uploadfiledb")
//    public String uploadView(Model model){
//
//        List<DBFile> dbFileList = dbFileStorageService.getAll();
//        model.addAttribute("dbFileList", dbFileList);
//        return "pages/databasefilesmanagement/upload";
//    }
//
//    @GetMapping("/datamining")
//    public String datamining(Model model){
//
//        List<DBFile> dbFileList = dbFileStorageService.getAll();
//        model.addAttribute("dbFileList", dbFileList);
//
//        model.addAttribute("userForm", new UserForm());
//        model.addAttribute("customerList", customerRepository.findAll());
//
//        model.addAttribute("ClusterForm", new ClusterForm());
//
//        model.addAttribute("TagForm", new TagForm());
//
//        List<String> filesNameList = storageService.loadAll().map(
//                path -> path.getFileName().toString())
//                .collect(Collectors.toList());
//        model.addAttribute("fileNameModel",filesNameList);
//
//        return "pages/databasefilesmanagement/datamining";
//    }
//
//}
