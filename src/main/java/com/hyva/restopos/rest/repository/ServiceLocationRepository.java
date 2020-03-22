package com.hyva.restopos.rest.repository;

import com.hyva.restopos.rest.entities.ServiceLocation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ServiceLocationRepository extends JpaRepository<ServiceLocation,Long> {
    ServiceLocation findByServicelName(String name);
    ServiceLocation findBySerlocId(Long id);
    ServiceLocation findAllByServicelNameAndSerlocIdNotIn(String name, Long id);
    List<ServiceLocation> findAllByStatus(String status);

}