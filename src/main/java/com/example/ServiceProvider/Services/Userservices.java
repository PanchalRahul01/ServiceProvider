package com.example.ServiceProvider.Services;
import com.example.ServiceProvider.Entity.Locations;
import com.example.ServiceProvider.Entity.User;
import com.example.ServiceProvider.Repository.LocationRepo;
import com.example.ServiceProvider.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service            
public class Userservices {

    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private LocationRepo  locationRepo;

    public List<User> getUsers() {
        return userRepository.findAll();
    }
    
    public User signUp(User  user) {
       return userRepository.save(user);
    }
    
}
