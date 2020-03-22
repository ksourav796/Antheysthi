package com.hyva.restopos.rest.repository;

import com.hyva.restopos.rest.entities.Supplier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SupplierRepository extends JpaRepository<Supplier,Long> {
    Supplier findAllBySupplierNameAndIdNotIn(String name,Long id);
    Supplier findAllBySupplierName(String name);
    Supplier findFirstBySupplierNameContainingAndStatus(String name,String status,Sort sort);
    Supplier findFirstByStatus(String status,Sort sort);

    List<Supplier> findAllByStatus(String status, Pageable pageable);
    List<Supplier> findAllBySupplierNameContainingAndStatus(String name, String status, Pageable pageable);
    List<Supplier> findAllBySupplierNameContainingAndStatus(String name, String status);
    List<Supplier> findAllByStatus(String status);
}
