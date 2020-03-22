package com.hyva.restopos.rest.repository;

import com.hyva.restopos.rest.entities.EnquiryForm;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EnquiryFormRepository extends JpaRepository<EnquiryForm,Long> {
    EnquiryForm findAllByFirstNameAndIdNotIn(String name,Long id);
    EnquiryForm findAllByFirstName(String name);
    EnquiryForm findAllById(Long id);
    List<EnquiryForm> findAllByUser(String user);
    EnquiryForm findAllByPhoneNumberOrEmail(String phone,String email);

    EnquiryForm findFirstByFirstNameContaining(String name,Sort sort);
    EnquiryForm findFirstByFirstNameContainingAndStatus(String name,String status,Sort sort);
    EnquiryForm findFirstByFirstNameContainingAndUser(String name,String userName,Sort sort);
    EnquiryForm findFirstByFirstNameContainingAndUserAndStatus(String name,String userName,String status,Sort sort);
    EnquiryForm findFirstBy(Sort sort);
    EnquiryForm findFirstByStatus(String status,Sort sort);
    EnquiryForm findFirstByUser(String name,Sort sort);
    EnquiryForm findFirstByUserAndStatus(String name,String status,Sort sort);

    List<EnquiryForm>  findAllByFirstNameContaining(String name, Pageable pageable);
    List<EnquiryForm>  findAllByFirstNameContainingAndStatus(String name,String status, Pageable pageable);
    List<EnquiryForm>  findAllByFirstNameContainingAndUser(String name,String userName, Pageable pageable);
    List<EnquiryForm>  findAllByFirstNameContainingAndUserAndStatus(String name,String userName,String status, Pageable pageable);
    List<EnquiryForm>  findAllBy(Pageable pageable);
    List<EnquiryForm>  findAllByStatus(String status,Pageable pageable);
    List<EnquiryForm>  findAllByUser(String userName,Pageable pageable);
    List<EnquiryForm>  findAllByUserAndStatus(String userName,String status,Pageable pageable);
    List<EnquiryForm>  findAllByFirstNameContaining(String name);
    List<EnquiryForm>  findAllByFirstNameContainingAndUser(String name,String userName);
    List<EnquiryForm>  findAllByFirstNameContainingAndUserAndStatus(String name,String userName,String status);
    List<EnquiryForm>  findAllBy();
    List<EnquiryForm>  findAllByStatus(String status);
    List<EnquiryForm>  findByUser(String userName);
    List<EnquiryForm>  findByUserAndStatus(String userName,String status);
}
