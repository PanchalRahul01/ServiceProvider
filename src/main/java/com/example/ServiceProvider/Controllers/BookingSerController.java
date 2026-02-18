package com.example.ServiceProvider.Controllers;

import com.example.ServiceProvider.Entity.AllServices;
import com.example.ServiceProvider.Entity.BookingService;
import com.example.ServiceProvider.Repository.ServicesRepo;
import com.example.ServiceProvider.Services.BookingServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5174")
public class BookingSerController {

    @Autowired
    private BookingServices bookingServices;

    @PostMapping("/BookingService")
    public BookingService bookService(@RequestBody BookingService b) {
        return bookingServices.saveBooking(b);
    }


    @GetMapping("/services")
    public List<AllServices> findAllSer() {
        return bookingServices.findAllService();
    }

}
