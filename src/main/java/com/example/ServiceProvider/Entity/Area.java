package com.example.ServiceProvider.Entity;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name="areas")
public class Area {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "name")
    private String areaName;

    @Column(name = "pincode")
    private int pincode;

    @Column(name ="city_id")
    private int cityId;
}

