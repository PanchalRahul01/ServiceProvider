package com.example.ServiceProvider.Controllers;

import com.example.ServiceProvider.Entity.AllServices;
import com.example.ServiceProvider.Repository.ServicesRepo;
import com.example.ServiceProvider.Services.BookingServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5174")
public class BookingSerController {

    @Autowired
    private BookingServices bookingServices;

    @GetMapping("/services")
    public List<AllServices> findAllSer() {
        return bookingServices.findAllService();
    }

}
