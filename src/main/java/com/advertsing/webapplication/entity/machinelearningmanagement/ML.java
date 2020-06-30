package com.advertsing.webapplication.entity.machinelearningmanagement;

public class ML {

    protected ML.Files fileName = Files.Car;
    protected ML.TestType testType = ML.TestType.CrossValidation;

    public Files getFileName() {
        return fileName;
    }

    public void setFileName(Files fileName) {
        this.fileName = fileName;
    }

    public TestType getTestType() {
        return testType;
    }

    public void setTestType(TestType testType) {
        this.testType = testType;
    }

    public static enum Files {
        Boston, Census, Car, CarBin, CensusBin, CensusKm, CensusEm, SchooneyBin,Iris;
    }

    public static enum TestType {
        CrossValidation, TestData, Train;
    }
}
