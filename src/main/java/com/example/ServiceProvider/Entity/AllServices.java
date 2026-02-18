package com.example.ServiceProvider.Entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "services")
public class AllServices {

    @Id()
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int service_id;

    @Column(name = "category_id")
    private int category_id;

    @Column(name = "service_name")
    private String serviceName;

    @Column(name = "description")
    private String description;

    @Column(name = "price")
    private double price;

    @Column(name = "rating")
    private double rating;

    @Column(name = "reviews_count")
    private int reviews_count;

}
    