package com.hyva.restopos.rest.entities;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;
@Data
@Entity
public class Supplier implements Serializable {
    @Id
    @GenericGenerator(name = "native", strategy = "native")
    @GeneratedValue(strategy = GenerationType.AUTO,generator = "native")
    private Long id;
    private String supplierName;
    private String gst;
    private String email;
    private String contact;
    private String address;
    private String personIncharge;
    private String country;
    private String currency;
    private String state;
    private String status;
    private String bankName;
    private String accNo;
    private String panNo;
    private String bankBranch;
    private String ifsc;
    private String uin;
    private String website;
    private String creditTerm;
    private String creditLimit;
    @Column(columnDefinition = "blob")
    private String serviceList;
}
