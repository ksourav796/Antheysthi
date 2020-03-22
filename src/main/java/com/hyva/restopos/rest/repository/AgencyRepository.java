package com.hyva.restopos.rest.repository;

import com.hyva.restopos.rest.entities.Agency;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AgencyRepository extends JpaRepository<Agency,Long> {
    Agency findByAgencyNameAndAgIdNotIn(String name,Long id);
    Agency findAllByAgNameAndAgPassword(String name,String password);
    Agency findByAgencyName(String name);
    List<Agency> findAllByFranName(String name);
    Agency findAllByAgId(Long id);
    Agency findAllByAgencyName(String id);
    Agency findAllByAgencyCode(String id);


}
