//package com.advertsing.webapplication.controller.machinelearningmanagement;
//
//import java.io.BufferedReader;
//import java.io.FileReader;
//import java.io.IOException;
//import java.util.ArrayList;
//import java.util.Arrays;
//import java.util.List;
//import java.util.Map;
//import java.util.stream.Collectors;
//
//
//import com.advertsing.webapplication.form.broadcastmanagement.MessageForm;
//import com.advertsing.webapplication.form.machinelearningmanagement.ClusterForm;
//import com.advertsing.webapplication.services.ClusterService;
//import com.advertsing.webapplication.storage.StorageFileNotFoundException;
//import com.advertsing.webapplication.storage.StorageService;
//import com.fasterxml.jackson.databind.ObjectMapper;
//import com.opencsv.CSVReader;
//import org.springframework.beans.factory.annotation.Autowired;
//
//import org.springframework.core.io.Resource;
//import org.springframework.http.HttpHeaders;
//import org.springframework.http.ResponseEntity;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.ExceptionHandler;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.ResponseBody;
//import org.springframework.web.multipart.MultipartFile;
//import org.springframework.web.servlet.ModelAndView;
//import org.springframework.web.servlet.mvc.method.annotation.MvcUriComponentsBuilder;
//import org.springframework.web.servlet.mvc.support.RedirectAttributes;
//
//@Controller
//public class FileUploadController {
//
//    private final StorageService storageService;
//
//    @Autowired
//    private ClusterService clusterService;
//
//    @Autowired
//    public FileUploadController(StorageService storageService) {
//        this.storageService = storageService;
//    }
//
//    @GetMapping("/upload")
//    public String listUploadedFiles(Model model) throws Exception {
//
//        model.addAttribute("files", storageService.loadAll().map(
//                path -> MvcUriComponentsBuilder.fromMethodName(FileUploadController.class,
//                        "serveFile", path.getFileName().toString()).build().toUri().toString())
//                .collect(Collectors.toList()));
//
//        model.addAttribute("ClusterForm", new ClusterForm());
//        return "pages/uploadForm";
//    }
//
//    @GetMapping("/files/{filename:.+}")
//    @ResponseBody
//    public ResponseEntity<Resource> serveFile(@PathVariable String filename) {
//
//        Resource file = (Resource) storageService.loadAsResource(filename);
//        return ResponseEntity.ok().header(HttpHeaders.CONTENT_DISPOSITION,
//                "attachment; filename=\"" + file.getFilename() + "\"").body(file);
//    }
//
//    @PostMapping("/upload")
//    public String handleFileUpload(@RequestParam("file") MultipartFile file,
//                                   RedirectAttributes redirectAttributes,Model model) throws Exception {
//
//        storageService.store(file);
//        redirectAttributes.addFlashAttribute("message",
//                "You successfully uploaded " + file.getOriginalFilename() + "!");
////        redirectAttributes.addFlashAttribute("fileNameModel",file.getOriginalFilename());
//
//        List<String> filesNameList = storageService.loadAll().map(
//                path -> path.getFileName().toString())
//                .collect(Collectors.toList());
//        redirectAttributes.addFlashAttribute("fileNameModel",filesNameList);
//        return "redirect:/upload";
//    }
//
//    @ExceptionHandler(StorageFileNotFoundException.class)
//    public ResponseEntity<?> handleStorageFileNotFound(StorageFileNotFoundException exc) {
//        return ResponseEntity.notFound().build();
//    }
//
//}