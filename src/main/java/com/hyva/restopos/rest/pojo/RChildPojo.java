package com.hyva.restopos.rest.pojo;

import lombok.Data;

import javax.persistence.Column;

@Data
public class RChildPojo {
    private Long  rcId;
    private String  locationConnectId;
    private String  code;
    private String  registration;
    private String  panCard;
    private String  gst;
    private String  gstState;
    private String  legalStatus;
    private String  natureBusiness;
    private String  office;
    private String  person;
    private String  personNo;
    private String  personEmail;
    private String  beneficiaryName;
    private String  accNo;
    private String  ifscCode;
    private String  bankName;
    private String  accountType;
    private String  merchantId;
    private String  apiKey;
    private String  merchantUname;
    private String  merchantPswd;
    private String  pancardImages;
    private String  gstImages;

    public String getPancardImages() {
        return pancardImages;
    }

    public void setPancardImages(String pancardImages) {
        this.pancardImages = pancardImages;
    }

    public String getGstImages() {
        return gstImages;
    }

    public void setGstImages(String gstImages) {
        this.gstImages = gstImages;
    }

    public Long getRcId() {
        return rcId;
    }

    public void setRcId(Long rcId) {
        this.rcId = rcId;
    }

    public String getLocationConnectId() {
        return locationConnectId;
    }

    public void setLocationConnectId(String locationConnectId) {
        this.locationConnectId = locationConnectId;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getRegistration() {
        return registration;
    }

    public void setRegistration(String registration) {
        this.registration = registration;
    }

    public String getPanCard() {
        return panCard;
    }

    public void setPanCard(String panCard) {
        this.panCard = panCard;
    }

    public String getGst() {
        return gst;
    }

    public void setGst(String gst) {
        this.gst = gst;
    }

    public String getGstState() {
        return gstState;
    }

    public void setGstState(String gstState) {
        this.gstState = gstState;
    }

    public String getLegalStatus() {
        return legalStatus;
    }

    public void setLegalStatus(String legalStatus) {
        this.legalStatus = legalStatus;
    }

    public String getNatureBusiness() {
        return natureBusiness;
    }

    public void setNatureBusiness(String natureBusiness) {
        this.natureBusiness = natureBusiness;
    }

    public String getOffice() {
        return office;
    }

    public void setOffice(String office) {
        this.office = office;
    }

    public String getPerson() {
        return person;
    }

    public void setPerson(String person) {
        this.person = person;
    }

    public String getPersonNo() {
        return personNo;
    }

    public void setPersonNo(String personNo) {
        this.personNo = personNo;
    }

    public String getPersonEmail() {
        return personEmail;
    }

    public void setPersonEmail(String personEmail) {
        this.personEmail = personEmail;
    }

    public String getBeneficiaryName() {
        return beneficiaryName;
    }

    public void setBeneficiaryName(String beneficiaryName) {
        this.beneficiaryName = beneficiaryName;
    }

    public String getAccNo() {
        return accNo;
    }

    public void setAccNo(String accNo) {
        this.accNo = accNo;
    }

    public String getIfscCode() {
        return ifscCode;
    }

    public void setIfscCode(String ifscCode) {
        this.ifscCode = ifscCode;
    }

    public String getBankName() {
        return bankName;
    }

    public void setBankName(String bankName) {
        this.bankName = bankName;
    }

    public String getAccountType() {
        return accountType;
    }

    public void setAccountType(String accountType) {
        this.accountType = accountType;
    }

    public String getMerchantId() {
        return merchantId;
    }

    public void setMerchantId(String merchantId) {
        this.merchantId = merchantId;
    }

    public String getApiKey() {
        return apiKey;
    }

    public void setApiKey(String apiKey) {
        this.apiKey = apiKey;
    }

    public String getMerchantUname() {
        return merchantUname;
    }

    public void setMerchantUname(String merchantUname) {
        this.merchantUname = merchantUname;
    }

    public String getMerchantPswd() {
        return merchantPswd;
    }

    public void setMerchantPswd(String merchantPswd) {
        this.merchantPswd = merchantPswd;
    }
}