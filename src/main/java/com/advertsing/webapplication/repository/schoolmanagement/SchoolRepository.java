package com.advertsing.webapplication.repository.schoolmanagement;

import com.advertsing.webapplication.entity.schoolmanagement.School;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SchoolRepository extends JpaRepository<School, Long> {
        School findByIdAndDeletedFalse(Long id);
        List<School> findAll();
}
