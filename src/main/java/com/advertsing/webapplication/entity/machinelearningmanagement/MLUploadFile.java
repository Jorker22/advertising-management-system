package com.advertsing.webapplication.entity.machinelearningmanagement;

public class MLUploadFile {
    protected String fileName;
    protected ML.TestType testType = ML.TestType.CrossValidation;

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public ML.TestType getTestType() {
        return testType;
    }

    public void setTestType(ML.TestType testType) {
        this.testType = testType;
    }

    public static enum Files {
        Boston, Census, Car, CarBin, CensusBin, CensusKm, CensusEm, SchooneyBin,Iris;
    }

    public static enum TestType {
        CrossValidation, TestData, Train;
    }
}
