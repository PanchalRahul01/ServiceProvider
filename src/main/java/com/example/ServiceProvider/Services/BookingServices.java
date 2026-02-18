package com.example.ServiceProvider.Services;

import com.example.ServiceProvider.Entity.AllServices;
import com.example.ServiceProvider.Entity.BookingService;
import com.example.ServiceProvider.Repository.BookingServiceRepo;
import com.example.ServiceProvider.Repository.ServicesRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingServices {

    @Autowired
    private ServicesRepo servicesRepo;

    @Autowired
    private BookingServiceRepo bookingServiceRepo;

    public List<AllServices> findAllService(){
        return servicesRepo.findAll();
    }

    public BookingService saveBooking(BookingService b) {
        return bookingServiceRepo.save(b);
    }


}
