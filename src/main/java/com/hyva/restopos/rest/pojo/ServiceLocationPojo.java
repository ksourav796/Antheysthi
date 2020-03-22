package com.hyva.restopos.rest.pojo;

import lombok.Data;

@Data
public class ServiceLocationPojo {
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