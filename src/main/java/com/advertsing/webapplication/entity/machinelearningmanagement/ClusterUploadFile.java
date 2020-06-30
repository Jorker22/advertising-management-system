package com.advertsing.webapplication.entity.machinelearningmanagement;

public class ClusterUploadFile extends MLUploadFile {

    private int clusters = 2;
    private Cluster.Distances distances = Cluster.Distances.Euclidean;
    private int iterations = 500;



    private Cluster.FeatureSelection featureSelection = null;

    public int getClusters() {
        return clusters;
    }

    public void setClusters(int clusters) {
        this.clusters = clusters;
    }

    public Cluster.Distances getDistances() {
        return distances;
    }

    public void setDistances(Cluster.Distances distances) {
        this.distances = distances;
    }

    public enum Distances {
        Manhatten, Euclidean;
    }

    public int getIterations() {
        return iterations;
    }

    public void setIterations(int iterations) {
        this.iterations = iterations;
    }

    public void setFileName(String fileName){
        this.fileName = fileName;
    }

    public String getFileName(){
        return this.fileName;
    }

//    public void setRealFileName(String realFileName) {
//        this.realFileName = realFileName;
//    }
//    public String getRealFileName(){
//       return  this.realFileName;
//    }

    public Cluster.FeatureSelection getFeatureSelection() {
        return featureSelection;
    }

    public void setFeatureSelection(Cluster.FeatureSelection featureSelection) {
        this.featureSelection = featureSelection;
    }

    public enum FeatureSelection {
        ICA, PCA, RP, CFS;
    }
}
