package com.hyva.restopos.rest.pojo;

import lombok.Data;

@Data
public class SettingsPojo {
    private Long id;
    private String companyName;
    private String companyEmail;
    private String companyLink;
    private String googleAnalyticsID;
    private String dateFormat;
    private String attachFile;
    private String address;
    private String gst;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getCompanyEmail() {
        return companyEmail;
    }

    public void setCompanyEmail(String companyEmail) {
        this.companyEmail = companyEmail;
    }

    public String getCompanyLink() {
        return companyLink;
    }

    public void setCompanyLink(String companyLink) {
        this.companyLink = companyLink;
    }

    public String getGoogleAnalyticsID() {
        return googleAnalyticsID;
    }

    public void setGoogleAnalyticsID(String googleAnalyticsID) {
        this.googleAnalyticsID = googleAnalyticsID;
    }

    public String getDateFormat() {
        return dateFormat;
    }

    public void setDateFormat(String dateFormat) {
        this.dateFormat = dateFormat;
    }

    public String getAttachFile() {
        return attachFile;
    }

    public void setAttachFile(String attachFile) {
        this.attachFile = attachFile;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getGst() {
        return gst;
    }

    public void setGst(String gst) {
        this.gst = gst;
    }
}
