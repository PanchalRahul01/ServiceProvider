package com.example.ServiceProvider.Controllers;

import com.example.ServiceProvider.Entity.Locations;
import com.example.ServiceProvider.Entity.User;
import com.example.ServiceProvider.Services.Userservices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class HomeController {

    @Autowired
    private Userservices userservices;

    @GetMapping("/")
    public String home() {
        return "HomeController Running";
    }

}
