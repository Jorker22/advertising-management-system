package com.advertsing.webapplication.services;

import com.advertsing.webapplication.entity.databasefilesmanagement.DBFile;
import com.advertsing.webapplication.entity.machinelearningmanagement.Cluster;
import com.advertsing.webapplication.entity.machinelearningmanagement.ClusterUploadFile;
import com.advertsing.webapplication.entity.machinelearningmanagement.ML;
import com.advertsing.webapplication.entity.machinelearningmanagement.Options;
import com.advertsing.webapplication.storage.StorageService;
import com.opencsv.CSVWriter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.stereotype.Service;

import org.springframework.web.multipart.MultipartFile;
import weka.clusterers.ClusterEvaluation;
import weka.clusterers.EM;
import weka.clusterers.MakeDensityBasedClusterer;
import weka.clusterers.SimpleKMeans;
import weka.core.DistanceFunction;
import weka.core.EuclideanDistance;
import weka.core.Instances;
import weka.core.ManhattanDistance;
import weka.filters.Filter;
import weka.filters.unsupervised.attribute.Remove;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;
import java.util.*;

@Service
public class ClusterService {

    private final StorageService storageService;

    @Autowired
    private FileFactory fileFactory;

    @Autowired
    public LoadData loadData;

    @Autowired
    FeatureReductionService featureReductionService;

    @Autowired
    private DBFileStorageService dbFileStorageService;

    @Autowired
    public ClusterService(StorageService storageService) {
        this.storageService = storageService;
    }



    public String handleKmeans(Cluster cluster) throws Exception{
        FileFactory.TrainTest trainTest = fileFactory.getInstancesFromFile(cluster.getFileName(), new Options(false, true));
        Instances data = trainTest.train;
        if (cluster.getFeatureSelection() != null){
            data = applyFeatureSelection(trainTest, cluster);
        }
        MakeDensityBasedClusterer simpleKMeans = makeDensityBasedClustererWrapper(trainKmeans(cluster, data), data);

        ClusterEvaluation clusterEvaluation = new ClusterEvaluation();
        clusterEvaluation.setClusterer(simpleKMeans);
        Instances instancesToEvaluate = trainTest.test;
        if (cluster.getFeatureSelection() != null){
            instancesToEvaluate = featureReductionService.reAddClassificationNominal(data, trainTest.test);
        }
        clusterEvaluation.evaluateClusterer(instancesToEvaluate);
        clusterEvaluation.clusterResultsToString();
        return clusterEvaluation.clusterResultsToString() + "\n \n \n Log Likelihood : " + clusterEvaluation.getLogLikelihood();
    }

    public String handleKmeansForUploadFile(ClusterUploadFile cluster) throws Exception{
        TrainTest trainTest = new TrainTest(handleDataForUpload(cluster.getFileName()),handleDataForUpload(cluster.getFileName()));
        Instances data = trainTest.train;
        if (cluster.getFeatureSelection() != null){
            data = applyFeatureSelectionUploadFile(trainTest, cluster);
        }
        SimpleKMeans kMeansModel = trainKmeansUploadFile(cluster, data);
        MakeDensityBasedClusterer simpleKMeans = makeDensityBasedClustererWrapper(trainKmeansUploadFile(cluster, data), data);

        ClusterEvaluation clusterEvaluation = new ClusterEvaluation();
        clusterEvaluation.setClusterer(simpleKMeans);
        Instances instancesToEvaluate = trainTest.test;

        if (cluster.getFeatureSelection() != null){
            instancesToEvaluate = featureReductionService.reAddClassificationNominal(data, trainTest.test);
        }

        int[] assignments =  kMeansModel.getAssignments();
        int i=0;
        for(int clusterNum : assignments) {
            System.out.printf("Instance %d -> Cluster %d \n", i, clusterNum);
            i++;
        }

        clusterEvaluation.evaluateClusterer(instancesToEvaluate);
        clusterEvaluation.clusterResultsToString();

        return clusterEvaluation.clusterResultsToString() + "\n \n \n Log Likelihood : " + clusterEvaluation.getLogLikelihood();
    }

    private Instances handleDataForUpload(String fileName) throws  Exception {
        try {
            return loadData.getDataFromArff(fileName);
        } catch (Exception e){
            return loadData.getDataFromCsvFile(fileName + ".csv");
        }
    }


    public SimpleKMeans trainKmeans(Cluster cluster, Instances data) throws Exception{
        SimpleKMeans simpleKMeans = new SimpleKMeans();
        simpleKMeans.setPreserveInstancesOrder(true);
        simpleKMeans.setNumClusters(cluster.getClusters());
        if (cluster.getDistances() == Cluster.Distances.Euclidean){
            simpleKMeans.setDistanceFunction(new EuclideanDistance());
        } else {
            simpleKMeans.setDistanceFunction(new ManhattanDistance());
        }
        simpleKMeans.setMaxIterations(cluster.getIterations());
        simpleKMeans.buildClusterer(data);
        return simpleKMeans;
    }

    public SimpleKMeans trainKmeansUploadFile(ClusterUploadFile cluster, Instances data) throws Exception{
        SimpleKMeans simpleKMeans = new SimpleKMeans();
        simpleKMeans.setPreserveInstancesOrder(true);
        simpleKMeans.setNumClusters(cluster.getClusters());
        if (cluster.getDistances() == Cluster.Distances.Euclidean){
            simpleKMeans.setDistanceFunction(new EuclideanDistance());
        } else {
            simpleKMeans.setDistanceFunction(new ManhattanDistance());
        }
        simpleKMeans.setMaxIterations(cluster.getIterations());
        simpleKMeans.buildClusterer(data);
        return simpleKMeans;
    }

    public String handleEM(Cluster emModel) throws Exception{
        FileFactory.TrainTest trainTest = fileFactory.getInstancesFromFile(emModel.getFileName(), new Options(false, true));
        Instances data = trainTest.train;
        if (emModel.getFeatureSelection() != null){
            data = applyFeatureSelection(trainTest, emModel);
        }
        EM em = trainEm(emModel, data);

        ClusterEvaluation clusterEvaluation = new ClusterEvaluation();
        clusterEvaluation.setClusterer(em);
        clusterEvaluation.evaluateClusterer(featureReductionService.reAddClassificationNominal(data, trainTest.test));

        return clusterEvaluation.clusterResultsToString();
    }

    public EM trainEm(Cluster emModel, Instances data) throws Exception{
        EM em = new EM();
        em.setMaxIterations(emModel.getIterations());
        em.setNumClusters(emModel.getClusters());
        em.buildClusterer(data);
        return em;
    }

    public void plotKM(Cluster cluster, Instances instances, String name) throws Exception{
        SimpleKMeans simpleKMeans = trainKmeans(cluster, instances);
        int[] assignments = simpleKMeans.getAssignments();

        try{
            FileWriter writer = new FileWriter(name + ".csv", true);
            for (int i = 0; i < assignments.length; i++){
                double[] values = instances.get(i).toDoubleArray();
                writer.append(new Double(values[0]).toString());
                writer.append(",");
                writer.append(new Double(values[1]).toString());
//                writer.append(",");
//                writer.append(new Integer(assignments[i]).toString());
                writer.append("\n");
            }
            writer.flush();
            writer.close();

        } catch (Exception e){
            System.out.println(e.toString());
        }
    }

//    public StringBuilder plotKMStringReturn(Cluster cluster, Instances instances, String name) throws Exception{
//        SimpleKMeans simpleKMeans = trainKmeans(cluster, instances);
//        int[] assignments = simpleKMeans.getAssignments();
//        StringBuilder data = new StringBuilder("");
//        try{
//            FileWriter outputfile = new FileWriter(name + ".csv", true);
//
//            CSVWriter writer = new CSVWriter(outputfile);
//            // adding header to csv
//            String[] header = { "pointX", "pointY"};
//            writer.writeNext(header);
//            for (int i = 0; i < assignments.length; i++){
//                double[] values = instances.get(i).toDoubleArray();
//                String[] data1 = { new Double(values[0]).toString(), new Double(values[1]).toString()};
//                writer.writeNext(data1);
////                writer.append(new Double(values[0]).toString());
////                writer.append(",");
////                writer.append(new Double(values[1]).toString());
////                writer.append(",");
////                writer.append(new Integer(assignments[i]).toString());
////                writer.append("\n");
//
////                data.append(new Double(values[0]).toString());
////                data.append(",");
////                data.append(new Double(values[1]).toString());
////                data.append("\n");
//            }
//            writer.flush();
//            writer.close();
//
//        } catch (Exception e){
//            System.out.println(e.toString());
//        }
//        return data;
//    }

    public  Map<String,List> plotKMStringReturn(Cluster cluster, Instances instances, String name) throws Exception{
        SimpleKMeans simpleKMeans = trainKmeans(cluster, instances);
        int[] assignments = simpleKMeans.getAssignments();
        List<Map> dataLines = new ArrayList<>();
        Map<String,List> map = new HashMap<>();
        List<Double> pointX = new ArrayList<>();
        List<Double> pointY = new ArrayList<>();

        try{
            FileWriter writer = new FileWriter("/Users/twentytwola/advertising-management-system/src/main/resources/arffs/"+name + ".csv", true);
            String header =  "pointX,pointY,Cluster";
            writer.append(header);
            writer.append("\n");

            for (int i = 0; i < assignments.length; i++){
                double[] values = instances.get(i).toDoubleArray();
                String[] data1 = { new Double(values[0]).toString(), new Double(values[1]).toString()};

                writer.append(new Double(values[0]).toString());
                writer.append(",");
                writer.append(new Double(values[1]).toString());
                writer.append(",");
                writer.append(new Integer(assignments[i]).toString());
                writer.append("\n");

                pointX.add(new Double(values[0]));
                pointY.add(new Double(values[1]));

                map.put("pointX", pointX);
                map.put("pointY",pointY);

//                map.put("pointX",new Double(values[0]));
//                map.put("pointY",new Double(values[1]));
//
//                dataLines.add(map);

//                dataLines.add(",");
//                dataLines.append(new Double(values[1]).toString());
//                dataLines.append("\n");
            }

            writer.flush();
            writer.close();


        } catch (Exception e){
            System.out.println(e.toString());
        }

        return map;
    }

    public void plotEM(Cluster emModel, Instances instances, String name) throws Exception{
        EM simpleEM = trainEm(emModel, instances);
        ClusterEvaluation clusterEvaluation = new ClusterEvaluation();
        clusterEvaluation.setClusterer(simpleEM);
        clusterEvaluation.evaluateClusterer(instances);
        double[] assignments = clusterEvaluation.getClusterAssignments();

        try{
            FileWriter writer = new FileWriter("/Users/twentytwola/advertising-management-system/src/main/resources/arffs/"+name + ".csv", true);
            String header =  "pointX,pointY,Cluster";
            writer.append(header);
            writer.append("\n");
            for (int i = 0; i < assignments.length; i++){
                double[] values = instances.get(i).toDoubleArray();
                writer.append(new Double(values[0]).toString());
                writer.append(",");
                writer.append(new Double(values[1]).toString());
                writer.append(",");
                writer.append(new Double(assignments[i]).toString());
                writer.append("\n");
            }
            writer.flush();
            writer.close();

        } catch (Exception e){
            System.out.println(e.toString());
        }
    }

    public void plotKMWithFeature() throws Exception{
        FileFactory.TrainTest carTrainTest = fileFactory.getInstancesFromFile(ML.Files.CarBin, new Options(false, true));
        FileFactory.TrainTest censusTrainTest = fileFactory.getInstancesFromFile(ML.Files.CensusBin, new Options(false, true));
//        FileFactory.TrainTest carBin = fileFactory.getInstancesFromFile(ML.Files.CarBin, new Options(false, true));
//        FileFactory.TrainTest censusBin = fileFactory.getInstancesFromFile(ML.Files.CensusBin, new Options(false, true));

        Instances pcaCar = featureReductionService.applyPCAFilter(carTrainTest.train, 30);
        Instances pcaCensus = featureReductionService.applyPCAFilter(censusTrainTest.train, 30);
//        Instances icaCar = featureReductionService.applyICA(carBin.test, 30);
//        Instances icaCensus = featureReductionService.applyICA(censusBin.test, 30);
//        Instances rpCar = featureReductionService.applyRP(carBin.train, 30);
//        Instances rpCensus = featureReductionService.applyRP(censusBin.train, 30);

        Cluster cluster = new Cluster();
        cluster.setClusters(6);
        cluster.setIterations(1000);
        Map<String,List> data = plotKMStringReturn(cluster, pcaCar, "PCA_CAR");
        plotKM(cluster, pcaCar, "PCA_CAR");
        plotKM(cluster, pcaCensus, "PCA_CENSUS");
//        plotKM(cluster, filterClass(icaCar), "ICA_CAR");
//        plotKM(cluster, filterClass(icaCensus), "ICA_CENSUS");
//        plotKM(cluster, rpCar, "RP_CAR");
//        plotKM(cluster, rpCensus, "RP_CENSUS");
    }

    public Map<String,List> plotKMWithFeatureReturn() throws Exception{
        FileFactory.TrainTest carTrainTest = fileFactory.getInstancesFromFile(ML.Files.CarBin, new Options(false, true));

        Instances pcaCar = featureReductionService.applyPCAFilter(carTrainTest.train, 30);

        Cluster cluster = new Cluster();
        cluster.setClusters(4);
        cluster.setIterations(100);

        Map<String,List> data = plotKMStringReturn(cluster, pcaCar, "PCA_CAR");
        plotKM(cluster, pcaCar, "PCA_CAR");

        return data;
    }

    public ArrayList<String> plotKMWithHeaderReturn(ClusterUploadFile clusterUploadFile) throws Exception {
        FileFactory.TrainTest carTrainTest = fileFactory.getInstancesFromFile(ML.Files.Iris, new Options(false, true));

//        Instances Iris = featureReductionService.applyPCAFilter(carTrainTest.train, 30);
        BufferedReader breader = null;
        breader = new BufferedReader(new FileReader(
                "/Users/twentytwola/advertising-management-system/src/main/resources/arffs/"+clusterUploadFile.getFileName()));

//        DBFile dbFile = dbFileStorageService.getFileByName(clusterUploadFile.getFileName());
//        breader = new BufferedReader(new FileReader(breader));
        Instances Iris = new Instances(breader);
        SimpleKMeans cluster = new SimpleKMeans();
        cluster.setSeed(10);
        cluster.setMaxIterations(clusterUploadFile.getIterations());

        if (clusterUploadFile.getDistances() == Cluster.Distances.Euclidean){
            cluster.setDistanceFunction(new EuclideanDistance());
        } else {
            cluster.setDistanceFunction(new ManhattanDistance());
        }

        cluster.setPreserveInstancesOrder(true);
        cluster.setNumClusters(clusterUploadFile.getClusters());

        cluster.buildClusterer(Iris);

        ArrayList<String> listHeader =  demo(cluster,Iris,"Iris_KMeans");

        return listHeader;
    }

    public ArrayList<String> demo(SimpleKMeans cluster, Instances instances, String name) throws Exception {
        // TODO Auto-generated constructor stub
        BufferedReader breader = null;
//        breader = new BufferedReader(new FileReader(
//                "/Users/twentytwola/advertising-management-system/src/main/resources/arffs2/iris.arff"));
//        Instances Train = new Instances(breader);
        Instances Train = instances;
        //Train.setClassIndex(Train.numAttributes() - 1); // comment out this line
//        SimpleKMeans kMeans = new SimpleKMeans();
//        kMeans.setSeed(10);
//        kMeans.setPreserveInstancesOrder(true);
//        kMeans.setNumClusters(3);
//        kMeans.buildClusterer(Train);

        SimpleKMeans kMeans =  cluster;
        double[] index = Train.get(0).toDoubleArray();

        StringBuilder header = new StringBuilder();
        ArrayList<String> listHeader = new ArrayList();
        for(int i = 0; i < index.length; i++){
            if((index.length-1) != i) {
                listHeader.add(Train.get(0).attribute(i).name());
                header.append(Train.get(0).attribute(i).name());
                header.append(",");
            }

            if((index.length-1) == i){
                header.append("cluster");
            }

            if(index.length == i){
                header.append("\n");
            }
        }
        System.out.println(listHeader);
        int[] assignments = kMeans.getAssignments();
        try{
            FileWriter writer = new FileWriter("/Users/twentytwola/advertising-management-system/src/main/resources/arffs/"+name + ".csv", true);
//            String header =  "pointX,pointY,Cluster";
            writer.append(header);
            writer.append("\n");

            for (int i = 0; i < assignments.length; i++){
                double[] values = Train.get(i).toDoubleArray();
                String[] data1 = { new Double(values[0]).toString(), new Double(values[1]).toString()};
                for(int j = 0;j < values.length - 1;j++){
                    writer.append(new Double(values[j]).toString());
                    writer.append(",");
                }
                writer.append(new Integer(assignments[i]).toString());
                writer.append("\n");
            }

            writer.flush();
            writer.close();


        } catch (Exception e){
            System.out.println(e.toString());
        }
        int i = 0;

//        breader.close();

        return  listHeader;
    }

    public void plotEMWithFeature() throws Exception {
        FileFactory.TrainTest carTrainTest = fileFactory.getInstancesFromFile(ML.Files.Iris, new Options(false, true));
//        FileFactory.TrainTest censusTrainTest = fileFactory.getInstancesFromFile(ML.Files.CensusBin, new Options(false, true));
//        FileFactory.TrainTest carBin = fileFactory.getInstancesFromFile(ML.Files.CarBin, new Options(false, true));
//        FileFactory.TrainTest censusBin = fileFactory.getInstancesFromFile(ML.Files.CensusBin, new Options(false, true));

        Instances pcaCar = featureReductionService.applyPCAFilter(carTrainTest.train, 30);
//        Instances pcaCensus = featureReductionService.applyPCAFilter(censusTrainTest.train, 30);
//        Instances icaCar = featureReductionService.applyICA(carBin.test, 30);
//        Instances icaCensus = featureReductionService.applyICA(censusBin.test, 30);
//        Instances rpCar = featureReductionService.applyRP(carBin.train, 30);
//        Instances rpCensus = featureReductionService.applyRP(censusBin.train, 30);

        Cluster em = new Cluster();
        em.setClusters(3);
        em.setIterations(1000);

        plotEM(em, pcaCar, "Iris_EM");
//        plotEM(em, pcaCensus, "PCA_CENSUS");
//        plotEM(em, filterClass(icaCar), "ICA_CAR");
//        plotEM(em, filterClass(icaCensus), "ICA_CENSUS");
//        plotEM(em, rpCar, "RP_CAR");
//        plotEM(em, rpCensus, "RP_CENSUS");
    }

    private Instances filterClass(Instances data) throws Exception{
        Remove filter = new Remove();
        filter.setAttributeIndices("" + (data.classIndex() + 1));
        filter.setInputFormat(data);
        return Filter.useFilter(data, filter);
    }

    private MakeDensityBasedClusterer makeDensityBasedClustererWrapper(SimpleKMeans simpleKMeans, Instances data) throws Exception{
        MakeDensityBasedClusterer makeDensityBasedClusterer = new MakeDensityBasedClusterer();
        makeDensityBasedClusterer.setClusterer(simpleKMeans);
        makeDensityBasedClusterer.buildClusterer(data);
        return makeDensityBasedClusterer;
    }

    private Instances applyFeatureSelection(FileFactory.TrainTest data, Cluster cluster) throws Exception{
        switch (cluster.getFeatureSelection()){
            case ICA:
                return filterClass(featureReductionService.applyICA(data.test, 5));
            case PCA:
                return featureReductionService.applyPCAFilter(data.train, 5);
            case RP:
                return featureReductionService.applyRP(data.train, 5);
            case CFS:
                return null;
        }
        return null;
    }

    private Instances applyFeatureSelectionUploadFile(TrainTest data, ClusterUploadFile cluster) throws Exception{
        switch (cluster.getFeatureSelection()){
            case ICA:
                return filterClass(featureReductionService.applyICA(data.test, 5));
            case PCA:
                return featureReductionService.applyPCAFilter(data.train, 5);
            case RP:
                return featureReductionService.applyRP(data.train, 5);
            case CFS:
                return null;
        }
        return null;
    }

    public class TrainTest {
        public Instances train;
        public Instances test;
        public TrainTest(Instances train, Instances test){
            this.train = train;
            this.test = test;
        }
    }
}
