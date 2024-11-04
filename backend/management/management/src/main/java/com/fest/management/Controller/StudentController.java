package com.fest.management.Controller;


import com.fest.management.Entity.Student;
import com.fest.management.Service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/students")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping(value = "/register")
    public ResponseEntity<Student> registerStudent(@RequestBody Student student){
        Student createdStudent = studentService.addStudent(student);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdStudent);
    }
    @PostMapping(value = "/login", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> Login(@RequestBody Student student){
        String isAuthenticated = studentService.authenticateStudent(student.getGid(), student.getPassword());
        if(isAuthenticated != null){
            System.out.println("Successfully Logged In");
            //Student LoggedStudent = studentService.getStudentDetails(student.getGid());
            return ResponseEntity.ok(isAuthenticated);
        }else{
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", "Invalid credentials");
            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body(errorResponse); // Ensure consistent response type
        }
        }
    }
