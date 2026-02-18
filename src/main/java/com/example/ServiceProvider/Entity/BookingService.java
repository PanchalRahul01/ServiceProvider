package com.example.ServiceProvider.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Data
public class BookingService {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int bookingId;

    private int userId;
    private int serviceId;

    private LocalDate bookingDate;
    private LocalTime bookingTime;

    private String address;
    private String status;
    private String notes;

}
