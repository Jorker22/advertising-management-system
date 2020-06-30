//package com.advertsing.webapplication.controller.databasefilemanagement;
//
//
//import com.advertsing.webapplication.entity.databasefilesmanagement.DBFile;
//import com.advertsing.webapplication.services.DBFileStorageService;
//import com.advertsing.webapplication.storage.StorageService;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.core.io.ByteArrayResource;
//import org.springframework.core.io.Resource;
//import org.springframework.http.HttpHeaders;
//import org.springframework.http.MediaType;
//import org.springframework.http.ResponseEntity;
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.multipart.MultipartFile;
//import org.springframework.web.servlet.mvc.support.RedirectAttributes;
//import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
//
//import java.util.List;
//
//@Controller
//public class FileController {
//
//    private static final Logger logger = LoggerFactory.getLogger(com.advertsing.webapplication.controller.databasefilemanagement.FileController.class);
//
//    private final StorageService storageService;
//
//    @Autowired
//    private DBFileStorageService dbFileStorageService;
//
//    @Autowired
//    public FileController(StorageService storageService) {
//        this.storageService = storageService;
//    }
//
//    @PostMapping("/uploadFile")
//    public String uploadFile(@RequestParam("file") MultipartFile file, RedirectAttributes redirectAttributes) {
//
//
//
//
//        List<DBFile> dbFileListByName = dbFileStorageService.getFileByName(file.getOriginalFilename());
//        if(dbFileListByName.size() > 1){
//            redirectAttributes.addFlashAttribute("errorMessage","duplicated File upload!");
//        }else{
//            storageService.store(file);
//            DBFile dbFile = dbFileStorageService.storeFile(file);
//        }
//
////        String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
////                .path("/downloadFile/")
////                .path(dbFile.getId())
////                .toUriString();
//
////        return new UploadFileResponse(dbFile.getFileName(), fileDownloadUri,
////                file.getContentType(), file.getSize());
//        List<DBFile> dbFileList = dbFileStorageService.getAll();
//        redirectAttributes.addFlashAttribute("dbFileList",dbFileList);
//
//        storageService.deleteByName();
//        return "redirect:/datamining";
//    }
//
////    @PostMapping("/uploadFile")
////    public UploadFileResponse uploadFile(@RequestParam("file") MultipartFile file) {
////        DBFile dbFile = dbFileStorageService.storeFile(file);
////
////        String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
////                .path("/downloadFile/")
////                .path(dbFile.getId())
////                .toUriString();
////
////        return new UploadFileResponse(dbFile.getFileName(), fileDownloadUri,
////                file.getContentType(), file.getSize());
////    }
//
////    @PostMapping("/uploadMultipleFiles")
////    public List<UploadFileResponse> uploadMultipleFiles(@RequestParam("files") MultipartFile[] files) {
////        return Arrays.asList(files)
////                .stream()
////                .map(file -> uploadFile(file))
////                .collect(Collectors.toList());
////    }
//
//    @GetMapping("/downloadFile/{fileId}")
//    public ResponseEntity<Resource> downloadFile(@PathVariable String fileId) {
//        // Load file from database
//        DBFile dbFile = dbFileStorageService.getFile(fileId);
//
//        return ResponseEntity.ok()
//                .contentType(MediaType.parseMediaType(dbFile.getFileType()))
//                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + dbFile.getFileName() + "\"")
//                .body(new ByteArrayResource(dbFile.getData()));
//    }
//
//}
