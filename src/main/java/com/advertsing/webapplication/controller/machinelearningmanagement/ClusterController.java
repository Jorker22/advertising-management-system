//package com.advertsing.webapplication.controller.machinelearningmanagement;
//
//import com.advertsing.webapplication.entity.machinelearningmanagement.Cluster;
//
//import com.advertsing.webapplication.entity.machinelearningmanagement.ClusterUploadFile;
//import com.advertsing.webapplication.form.broadcastmanagement.MessageForm;
//import com.advertsing.webapplication.form.machinelearningmanagement.ClusterForm;
//import com.advertsing.webapplication.services.ClusterService;
//import com.advertsing.webapplication.storage.StorageService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.validation.BindingResult;
//import org.springframework.validation.Errors;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.multipart.MultipartFile;
//import org.springframework.web.servlet.mvc.method.annotation.MvcUriComponentsBuilder;
//import org.springframework.web.servlet.mvc.support.RedirectAttributes;
//
//import javax.validation.Valid;
//import java.nio.file.Path;
//import java.nio.file.Paths;
//import java.util.ArrayList;
//import java.util.List;
//import java.util.stream.Collectors;
//
//@Controller
//public class ClusterController {
//    private final StorageService storageService;
//
//    @Autowired
//    private ClusterService clusterService;
//
//    @Autowired
//    public ClusterController(StorageService storageService) {
//        this.storageService = storageService;
//    }
//
//
//    @ResponseBody
//    @RequestMapping(value ="/kMeans", method={RequestMethod.GET})
//    public String handleKmeans(Cluster cluster) throws Exception{
//        return clusterService.handleKmeans(cluster);
//    }
//
//    @ResponseBody
//    @RequestMapping(value="/kMeansUpload", method = {RequestMethod.GET})
//    public String handleKmeansUploadFile(ClusterUploadFile cluster, Model model) throws Exception{
//        model.addAttribute("data",  clusterService.plotKMWithFeatureReturn());
//        return clusterService.handleKmeansForUploadFile(cluster);
//    }
//
//
//    @PostMapping("/kMeansSubmit")
//    public String handlekMeanSubmit(@Valid ClusterForm clusterForm, Model model, RedirectAttributes redirectAttributes)  throws Exception {
//        ClusterUploadFile cluster = new ClusterUploadFile();
//        cluster.setClusters(clusterForm.getClusters());
//        cluster.setIterations(clusterForm.getIterations());
//        cluster.setDistances(clusterForm.getDistances());
//        cluster.setFeatureSelection(clusterForm.getFeatureSelection());
//        cluster.setTestType(clusterForm.getTestType());
//        cluster.setFileName(clusterForm.getFileName());
////
//////        return clusterService.handleKmeansForUploadFile(cluster);
////        clusterService.handleKmeansForUploadFile(cluster);
//
//        String location = "src/main/resources/arffs/Iris_KMeans.csv";
//
//        if(null != storageService.load(location) ){
//            storageService.deleteByName();
//        }
//
//        ArrayList<String> listHeader = clusterService.plotKMWithHeaderReturn(cluster);
//
//
////        model.addAttribute("listHeader", listHeader);
//        redirectAttributes.addFlashAttribute("listHeader",listHeader);
////        clusterService.handleKmeansForUploadFile(cluster);
////        redirectAttributes.addFlashAttribute("files", storageService.loadAll().map(
////                path -> MvcUriComponentsBuilder.fromMethodName(FileUploadController.class,
////                        "serveFile", path.getFileName().toString()))
////                .collect(Collectors.toList()));
//
//
//        List<String> filesNameList = storageService.loadAll().map(
//                path -> path.getFileName().toString())
//                .collect(Collectors.toList());
//        redirectAttributes.addFlashAttribute("fileNameModel",filesNameList);
//
//        redirectAttributes.addFlashAttribute("numClusters", cluster.getClusters());
//
//
//        return "redirect:/datamining";
//    }
//
//    @ResponseBody
//    @RequestMapping(value = "/em", method = {RequestMethod.GET})
//    public String handleEM(Cluster emModel) throws Exception{
//        return clusterService.handleEM(emModel);
//    }
//
//    @ResponseBody
//    @RequestMapping(value = "/em/plot", method = {RequestMethod.GET})
//    public void handleEMPlot() throws Exception{
//        clusterService.plotEMWithFeature();
//    }
//
//    @ResponseBody
//    @RequestMapping(value = "/kMeans/plot", method = {RequestMethod.GET})
//    public void handleKMPlot() throws Exception{
//        clusterService.plotKMWithFeature();
//    }
//}
