package com.fest.management.Service;

import com.fest.management.Config.SecurityConfig;
import com.fest.management.Entity.Student;
import com.fest.management.Repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class StudentService {


    @Autowired
    StudentRepository studentRepository;

    @Autowired
    PasswordEncoder passwordEncoder;


    public Student addStudent(Student student){
            String gid = student.getGid();
            Student existingStudent = studentRepository.findByGid(gid);
            if(existingStudent != null){
                System.out.println("Student details already exists");
                return null;
            }
            student.setPassword(passwordEncoder.encode(student.getPassword()));
            return studentRepository.save(student);
        }

    public String authenticateStudent(String gid, String password){
        Student existingStudent = studentRepository.findByGid(gid);
        System.out.println("Raw password: " + password);
        System.out.println("Matches: " + passwordEncoder.matches(password, existingStudent.getPassword()));
        if(passwordEncoder.matches(password,existingStudent.getPassword())) {
            String firstname = existingStudent.getFirstName();
            String lastname = existingStudent.getLastName();
            System.out.println("Student authenticated successfully");
            return firstname+" "+lastname;
        }else{
            throw new IllegalArgumentException("Invalid Credentials");
        }
    }

    public Student getStudentDetails(String gid){
        return studentRepository.findByGid(gid);
    }
}
