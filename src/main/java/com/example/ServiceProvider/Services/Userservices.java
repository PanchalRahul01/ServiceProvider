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

    public User saveUser(User user) {

        if (userRepository.existsByEmail(user.getEmail())) {
            throw new RuntimeException("Email already exists");
        }

        if (userRepository.existsByFirebaseUid(user.getFirebaseUid())) {
            throw new RuntimeException("Firebase UID already exists");
        }

        return userRepository.save(user);
    }
    
}
