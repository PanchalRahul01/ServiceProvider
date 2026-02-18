package com.example.ServiceProvider.Controllers;
import com.example.ServiceProvider.Entity.Area;
import com.example.ServiceProvider.Entity.City;
import com.example.ServiceProvider.Repository.AreaRepository;
import com.example.ServiceProvider.Repository.CityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/search")
@CrossOrigin("*")
public class SearchController {

    @Autowired
    private CityRepository cityRepo;

    @Autowired
    private AreaRepository areaRepo;


    @GetMapping
    public Map<String, Object> search(@RequestParam String keyword) {

        List<City> cities =
                cityRepo.findByCityNameContainingIgnoreCase(keyword);

        List<Area> areas =
                areaRepo.findByAreaNameContainingIgnoreCase(keyword);

        Map<String, Object> result = new HashMap<>();
        result.put("cities", cities);
        result.put("areas", areas);

        return result;
    }   
}
