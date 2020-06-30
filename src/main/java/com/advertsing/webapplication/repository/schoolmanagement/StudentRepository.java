package com.advertsing.webapplication.repository.schoolmanagement;

import com.advertsing.webapplication.entity.schoolmanagement.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StudentRepository extends JpaRepository<Student, Long> {
    Student findByStudentNoAndDeletedFalse(String studentNo);
    Student findByIdAndDeletedFalse(Long studentId);
    Student findByLineAccountAndDeletedFalse(String LineAccount);
}
