package com.example.ServiceProvider.Repository;

import com.example.ServiceProvider.Entity.Area;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AreaRepository extends JpaRepository<Area,Integer> {
    List<Area> findByAreaNameContainingIgnoreCase(String  keyword);
}
