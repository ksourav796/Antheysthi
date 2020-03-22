package com.hyva.restopos.rest.entities;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@Entity
public class EnqSource {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO ,generator="native")
    @GenericGenerator(name="native",strategy = "native")
    private Long enqSourceId;
    private String sourceName;
    private String status;

    public Long getEnqSourceId() {
        return enqSourceId;
    }

    public void setEnqSourceId(Long enqSourceId) {
        this.enqSourceId = enqSourceId;
    }

    public String getSourceName() {
        return sourceName;
    }

    public void setSourceName(String sourceName) {
        this.sourceName = sourceName;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}