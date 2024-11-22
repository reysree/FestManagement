package com.fest.management.Repository;


import com.fest.management.Entity.Payments;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface PaymentsRepository extends JpaRepository<Payments,Long> {

    @Query("SELECT p FROM Payments p WHERE p.userGid = :userGid")
    Payments findByGid(@Param("userGid") String userGid);

}
