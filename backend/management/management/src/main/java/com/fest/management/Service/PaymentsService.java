package com.fest.management.Service;


import com.fest.management.Entity.Payments;
import com.fest.management.Repository.PaymentsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

@Service
public class PaymentsService {

    @Autowired
    private PaymentsRepository paymentsRepository;

    public boolean authenticatePayment(Payments p){
        try{
            paymentsRepository.save(p);
            return true;
        }catch(DataAccessException d){
            System.err.println("Database error while saving payment :"+d.getMessage());
            return false;
        }
    }

    public Payments getTransactionDetails(String userId){
        return paymentsRepository.findByGid(userId);
    }
}
