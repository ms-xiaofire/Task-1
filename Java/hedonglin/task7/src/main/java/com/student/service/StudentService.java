package com.student.service;

import com.student.model.Student;
import org.springframework.stereotype.Service;

import java.util.List;

public interface StudentService {
    int deleteByPrimaryKey(Long id);

    int insert(Student student);

    int insertSelective(Student record);

    Student selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(Student record);

    int updateByPrimaryKey(Student student);

    List<Student> getAll();

    public String getTokenByName(String account) throws Exception;

    List<Student> randomSelectStudent();

    Long selectIdByName(String name);

    Student selectByName(String name);

    public Long getIdByTokey(String token) throws Exception;

//    Long smsVerification(String cellphone);
}