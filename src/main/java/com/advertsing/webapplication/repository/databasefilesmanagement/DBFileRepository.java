package com.advertsing.webapplication.repository.databasefilesmanagement;


import com.advertsing.webapplication.entity.databasefilesmanagement.DBFile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DBFileRepository extends JpaRepository<DBFile, String> {
//    DBFile findByFileName(String fileName);

    List<DBFile> findByFileName(String fileName);
}
