package com.example.ServiceProvider.Entity;

import jakarta.persistence.*;
import lombok.Data;

import java.security.Timestamp;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "users")   // better table name
public class User {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "firebase_uid", nullable = false, unique = true)
    private String firebaseUid;

    @Column(nullable = false)
    private String username;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(name = "created_at", insertable = false, updatable = false)
    private LocalDateTime createdAt;

    // getters and setters


}
