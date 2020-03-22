package com.hyva.restopos.rest.entities;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@Entity
public class ServiceLocation {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO ,generator="native")
    @GenericGenerator(name="native",strategy = "native")
    private Long serlocId;
    private String servicelName;
    private String status;

    public Long getSerlocId() {
        return serlocId;
    }

    public void setSerlocId(Long serlocId) {
        this.serlocId = serlocId;
    }

    public String getServicelName() {
        return servicelName;
    }

    public void setServicelName(String servicelName) {
        this.servicelName = servicelName;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}