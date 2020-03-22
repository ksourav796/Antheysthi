package com.hyva.restopos.rest.repository;

import com.hyva.restopos.rest.entities.TypeOfEnquiry;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TypeOfEnquiryRepository extends JpaRepository<TypeOfEnquiry,Long> {
    List<TypeOfEnquiry> findAllByStatus(String status);
    TypeOfEnquiry findAllByNameAndIdNotIn(String name,Long id);
    TypeOfEnquiry findAllByName(String name);
    TypeOfEnquiry findFirstByStatus(String name,Sort sort);
    TypeOfEnquiry findFirstByNameContainingAndStatus(String name,String status,Sort sort);
    List<TypeOfEnquiry> findAllByNameContainingAndStatus(String name,String status);
    List<TypeOfEnquiry> findAllByNameContainingAndStatus(String name, String status, Pageable pageable);
    List<TypeOfEnquiry> findAllByStatus(String status, Pageable pageable);
}
