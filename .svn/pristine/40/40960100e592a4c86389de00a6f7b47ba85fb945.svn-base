package com.hyva.restopos.rest.pojo;

import lombok.Data;

import javax.persistence.Column;

@Data
public class PopupPojo {
    private Long id;
    private String popupName;
    @Column(columnDefinition = "blob")
    private String details;
    private String status;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPopupName() {
        return popupName;
    }

    public void setPopupName(String popupName) {
        this.popupName = popupName;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
