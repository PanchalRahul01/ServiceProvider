package com.example.ServiceProvider.Repository;

import com.example.ServiceProvider.Entity.BookingService;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingServiceRepo extends JpaRepository<BookingService,Integer> {
}
