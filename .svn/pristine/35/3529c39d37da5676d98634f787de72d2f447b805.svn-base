package com.hyva.restopos.rest.pojo;

import lombok.Data;

import javax.persistence.Column;

@Data
public class SchDocumentPojo {

    private Long id;
    private String documentName;
    @Column(columnDefinition="text")
    private String file;
    private String docDayDate;
    private String emailSubject;
    private String emailBody;
    private String sms;
    private String status;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDocumentName() {
        return documentName;
    }

    public void setDocumentName(String documentName) {
        this.documentName = documentName;
    }

    public String getFile() {
        return file;
    }

    public void setFile(String file) {
        this.file = file;
    }

    public String getEmailSubject() {
        return emailSubject;
    }

    public void setEmailSubject(String emailSubject) {
        this.emailSubject = emailSubject;
    }

    public String getEmailBody() {
        return emailBody;
    }

    public void setEmailBody(String emailBody) {
        this.emailBody = emailBody;
    }

    public String getSms() {
        return sms;
    }

    public void setSms(String sms) {
        this.sms = sms;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getDocDayDate() {
        return docDayDate;
    }

    public void setDocDayDate(String docDayDate) {
        this.docDayDate = docDayDate;
    }
}
