package com.hyva.restopos.rest.pojo;

import lombok.Data;

import javax.persistence.Column;

@Data
public class ApplicationPojo {
    private Long id;
    private String name;
    private String status;
    private String developerId;
    private Long pgId;
    private String saasStatus;
    @Column(name = "description", columnDefinition = "LONGTEXT")
    private String description;
    private String pgkey;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getDeveloperId() {
        return developerId;
    }

    public void setDeveloperId(String developerId) {
        this.developerId = developerId;
    }

    public Long getPgId() {
        return pgId;
    }

    public void setPgId(Long pgId) {
        this.pgId = pgId;
    }

    public String getSaasStatus() {
        return saasStatus;
    }

    public void setSaasStatus(String saasStatus) {
        this.saasStatus = saasStatus;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPgkey() {
        return pgkey;
    }

    public void setPgkey(String pgkey) {
        this.pgkey = pgkey;
    }
}