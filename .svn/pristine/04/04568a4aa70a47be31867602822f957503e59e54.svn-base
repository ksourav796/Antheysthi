package com.hyva.restopos.rest.repository;

import com.hyva.restopos.rest.entities.City;
import com.hyva.restopos.rest.entities.Service;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ServiceRepository extends JpaRepository<Service,Long> {

    Service findAllByNameAndSIdNotIn(String name, Long id);
    Service findAllByName(String name);
   List<Service>  findByName(String name);
   List<Service>findAllByCategories(String name);


}
