package com.hyva.restopos.rest.pojo;

import lombok.Data;

@Data
public class EnqSourcePojo {
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