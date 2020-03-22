package com.hyva.restopos.rest.repository;


import com.hyva.restopos.rest.entities.ServiceType;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ServiceTypeRepository extends JpaRepository<ServiceType,Long> {


    ServiceType findFirstByServiceTypeContaining(String serviceType, Sort sort);
    ServiceType findFirstBy( Sort sort);
    List<ServiceType> findAllByTypeOfEnquiry(String type);
    List<ServiceType> findAllByServiceTypeContaining(String serviceType, Pageable pageable);
    List<ServiceType> findAllBy(Pageable pageable);
    List<ServiceType> findAllBy();
    List<ServiceType> findAllByServiceTypeContaining(String serviceType);
    ServiceType findAllByTypeOfEnquiryAndServiceTypeAndIdNotIn(String type,String name,Long id);
    ServiceType findAllByTypeOfEnquiryAndServiceType(String type,String name);
}
