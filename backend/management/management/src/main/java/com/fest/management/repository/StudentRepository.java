package com.fest.management.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.fest.management.Entity.Student;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {

    @Query("SELECT s FROM  Student s WHERE s.gid = :gid and s.password = :password")
    Student findByGidandPassword(@Param("gid") String gid, @Param("password") String password);

    @Query("SELECT s FROM Student s WHERE s.gid = :gid")
    Student findByGid(@Param("gid") String gid);

}
