package com.hyva.restopos.rest.repository;

import com.hyva.restopos.rest.entities.Currency;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CurrencyRepository extends JpaRepository<Currency,Long> {
    Currency findAllByCurrencyNameAndCurrencyIdNotIn(String name,Long id);
    Currency findAllByCurrencyName(String name);
    Currency findFirstByCurrencyNameContainingAndStatus(String name,String status,Sort sort);
    Currency findFirstByStatus(String status,Sort sort);
    List<Currency> findAllByCurrencyNameContainingAndStatus(String name,String status);
    List<Currency> findAllByStatus(String status);
    List<Currency> findAllByCurrencyNameContainingAndStatus(String name, String status, Pageable pageable);
    List<Currency> findAllByStatus(String status, Pageable pageable);


}
