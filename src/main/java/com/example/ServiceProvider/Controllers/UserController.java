package com.example.ServiceProvider.Controllers;
import com.example.ServiceProvider.Entity.User;
import com.example.ServiceProvider.Services.Userservices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private Userservices userService;

    @PostMapping("/add")
    public User addUser(@RequestBody User user) {
        return userService.saveUser(user);
    }
}
