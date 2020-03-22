package com.hyva.restopos.rest.repository;

import com.hyva.restopos.rest.entities.EnquiryForm;
import com.hyva.restopos.rest.entities.EnquiryFormDetails;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EnquiryFormDetailsRepository extends JpaRepository<EnquiryFormDetails,Long> {
    EnquiryFormDetails findAllByFirstNameAndIdNotIn(String name, Long id);
    EnquiryFormDetails findAllByFirstName(String name);
    EnquiryFormDetails findAllByPhoneNumberOrEmail(String phone, String email);
    EnquiryFormDetails findAllByEnquiryForm(EnquiryForm form);
    List<EnquiryFormDetails> findAllByEnquiryFormId(Long id);
    EnquiryFormDetails findByEnquiryFormId(Long id);
}
