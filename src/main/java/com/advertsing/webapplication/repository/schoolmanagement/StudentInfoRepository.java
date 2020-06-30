package com.advertsing.webapplication.repository.schoolmanagement;

import com.advertsing.webapplication.entity.broadcastmanagement.Tag;
import com.advertsing.webapplication.entity.schoolmanagement.Student;
import com.advertsing.webapplication.entity.schoolmanagement.StudentInfo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StudentInfoRepository extends JpaRepository<StudentInfo, Long> {
        List<StudentInfo> findByDeletedFalseAndTagListIn(List<Tag> tagList);

        StudentInfo findByStudentAndDeletedFalse(Student student);

}
