package com.hyva.restopos.rest.pojo;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

@Data
public class SupplierPojo  {
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
    private String serviceList;
}
