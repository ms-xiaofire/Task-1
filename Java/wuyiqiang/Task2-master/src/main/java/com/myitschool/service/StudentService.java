package com.myitschool.service;

import com.myitschool.DAO.StudentDAO;
import com.myitschool.student.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class StudentService implements baseService {

    @Autowired
    private StudentDAO studentDAO;

    public List<Student> allStudent(){
        List<Student> students = new ArrayList<Student>();
        students = studentDAO.allStudent();
        return students;
    }

    public void insertStudent(Student student){
        studentDAO.insertStudent(student);
    }

    public Student selectStudent(int id){
        Student student = new Student();
        student = studentDAO.selectStudent(id);
        return student;
    }

    public int deleteStudent(int id){
        int flag = studentDAO.deleteStudent(id);
        return flag;
    }

    public int updateStudent(Student student){
        int flag = studentDAO.updateStudent(student);
        return flag;
    }

}
