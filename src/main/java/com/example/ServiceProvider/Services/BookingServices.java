package com.example.ServiceProvider.Services;

import com.example.ServiceProvider.Entity.AllServices;
import com.example.ServiceProvider.Repository.ServicesRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingServices {

    @Autowired
    private ServicesRepo servicesRepo;

    public List<AllServices> findAllService(){
        return servicesRepo.findAll();
    }

}
