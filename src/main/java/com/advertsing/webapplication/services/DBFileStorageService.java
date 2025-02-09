package com.advertsing.webapplication.services;


import com.advertsing.webapplication.entity.databasefilesmanagement.DBFile;
import com.advertsing.webapplication.exception.FileStorageException;
import com.advertsing.webapplication.exception.MyFileNotFoundException;
import com.advertsing.webapplication.repository.databasefilesmanagement.DBFileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class DBFileStorageService {

    @Autowired
    private DBFileRepository dbFileRepository;

    public DBFile storeFile(MultipartFile file) {
        // Normalize file name
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());

        try {
            // Check if the file's name contains invalid characters
            if(fileName.contains("..")) {
                throw new FileStorageException("Sorry! Filename contains invalid path sequence " + fileName);
            }

            DBFile dbFile = new DBFile(fileName, file.getContentType(), file.getBytes());

            return dbFileRepository.save(dbFile);
        } catch (IOException ex) {
            throw new FileStorageException("Could not store file " + fileName + ". Please try again!", ex);
        }
    }

    public DBFile getFile(String fileId) {
        return dbFileRepository.findById(fileId)
                .orElseThrow(() -> new MyFileNotFoundException("File not found with id " + fileId));
    }

    public List<DBFile> getFileByName(String fileName) {
        return dbFileRepository.findByFileName(fileName);
//                .orElseThrow(() -> new MyFileNotFoundException("File not found with Name " + fileName));
    }

    public List<DBFile> getAll() {
        return dbFileRepository.findAll();
    }
}
