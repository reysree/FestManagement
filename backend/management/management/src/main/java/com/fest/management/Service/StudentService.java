package com.fest.management.Service;

import com.fest.management.Entity.Student;
import com.fest.management.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class StudentService {


    @Autowired
    StudentRepository studentRepository;


    public Student addStudent(Student student){
            String gid = student.getGid();
            Student existingStudent = studentRepository.findByGid(gid);
            if(existingStudent != null){
                System.out.println("Student details already exists");
                return null;
            }
            return studentRepository.save(student);
        }

    public String authenticateStudent(String gid, String password){
        Student existingStudent = studentRepository.findByGidandPassword(gid, password);
        if(existingStudent != null){
            String firstname = existingStudent.getFirstName();
            String lastname = existingStudent.getLastName();
            System.out.println("Student authenticated successfully");
            return firstname+" "+lastname;
        }
        return null;
    }

    public Student getStudentDetails(String gid){
        return studentRepository.findByGid(gid);
    }
}
