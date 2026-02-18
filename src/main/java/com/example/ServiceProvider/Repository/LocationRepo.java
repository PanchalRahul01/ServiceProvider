package com.example.ServiceProvider.Repository;

import com.example.ServiceProvider.Entity.Locations;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LocationRepo extends JpaRepository<Locations,Integer> {

}
