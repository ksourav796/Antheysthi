package com.hyva.restopos.rest.entities;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
public class EnquiryForm implements Serializable {
    @Id
    @GenericGenerator(name = "native", strategy = "native")
    @GeneratedValue(strategy = GenerationType.AUTO,generator = "native")
    private Long id;
    private String user;
    private String firstName;
    private String enquiryDate;
    private String enquiryNo;
    private String sourceOfEnquiry;
    private String serviceLocation;
    private String lastName;
    private String fullName;
    private String callerLocation;
    private String phoneNumber;
    @Column(columnDefinition = "blob")
    private String typeOfEnquiry;
    @Column(columnDefinition = "blob")
    private String serviceTypeDetails;
    private String serviceType;
    private String country;
    private String state;
    private String city;
    private String zipcode;
    private String address1;
    private String address2;
    private String email;
    private String callStatus;
    private String callinfo;
    private String specialRequirements;
    private String callStatusDetails;
    private String others;
    private String assignstatus;
    private String status;
}
