package com.example.ServiceProvider.Controllers;
import com.example.ServiceProvider.Entity.User;
import com.example.ServiceProvider.Services.Userservices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")   // add base path
@CrossOrigin("*")
public class UserController {

    @Autowired
    private Userservices userservices;

    @PostMapping
    public void createUser(@RequestBody User user) {
        userservices.signUp(user);
    }
}
