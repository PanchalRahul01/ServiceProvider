package com.example.ServiceProvider.Repository;

import com.example.ServiceProvider.Entity.AllServices;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServicesRepo extends JpaRepository<AllServices, Integer> {
}
