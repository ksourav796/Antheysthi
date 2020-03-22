package com.hyva.restopos.rest.pojo;

import lombok.Data;

import javax.persistence.Column;
import java.util.Date;
import java.util.List;

@Data
public class RestaurantPojo {
    private String  locationConnectId;
    private String  code;
    private Long sId;
    private Long rid;
    private String parent;
    private String product;
    private String service;
    private String name;
    private String rName;
    private String contact;
    private String email;
    private String country;
    private String state;
    private String city;
    private String location;
    private String addressOne;
    private String addressTwo;
    private String zipcode;
    private String status;
    private String date;
    private String user;
    private String cName;
    private String remarks;
    private String gstNo;
    private String radioValue;
    private String assigneduser;
    @Column(columnDefinition="longtext")
    private String file;
    private String assigned;
    private String active;
    private String amountPaid;
    private String balanceAmount;
    private Date transactionDate;
    private String arr;
    private String head;
    private String paymentStatus;
    private String paymentDate;
    private String paymentAmount;
    private String uploadStatus;
    private String  assignstatus;
    private String  agency;
    private String  agAmount;
    private String paymentMode;
    private String actualPrice;
    private String statusOnline;
    private String agencyCode;
    private String userP;
    private String subscriptionStatus;
    private String expiryDate;

    private String workProgress;
    private String appDate;
    private String appTime;
    private String appUser;
    private String appRemarks;
    private String resRemarks;

    private String owner;
    private String opening_status;
    private String alcohal;
    private String cardsCash;
    private String clientService;
    private String orderfacility;

    private String seating;
    private String deliveryTime;
    private String deliveryPrice;
    private String resturent_type_id;
    private String discountType;
    private String cuisines;
    private String tags;
    private String companyname;
    private String subscriptionName;
    private String validity;
    private String generateQrNo;
    private String qrImage;
    private String remainderDate;
    private String remainderData;
    private String listing;
    private Long agencyId;
    private Long franId;
    private Long userId;
    private String custStatus;
    private String callbackDate;
    private String callbackTime;
    private String slug;

    public String getSlug() {
        return slug;
    }

    public void setSlug(String slug) {
        this.slug = slug;
    }

    public String getCallbackDate() {
        return callbackDate;
    }

    public void setCallbackDate(String callbackDate) {
        this.callbackDate = callbackDate;
    }

    public String getCallbackTime() {
        return callbackTime;
    }

    public void setCallbackTime(String callbackTime) {
        this.callbackTime = callbackTime;
    }

    public String getCustStatus() {
        return custStatus;
    }

    public void setCustStatus(String custStatus) {
        this.custStatus = custStatus;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getAgencyId() {
        return agencyId;
    }

    public void setAgencyId(Long agencyId) {
        this.agencyId = agencyId;
    }

    public Long getFranId() {
        return franId;
    }

    public void setFranId(Long franId) {
        this.franId = franId;
    }

    public String getListing() {
        return listing;
    }

    public void setListing(String listing) {
        this.listing = listing;
    }

    public String getResRemarks() {
        return resRemarks;
    }

    public void setResRemarks(String resRemarks) {
        this.resRemarks = resRemarks;
    }

    public String getRemainderDate() {
        return remainderDate;
    }

    public void setRemainderDate(String remainderDate) {
        this.remainderDate = remainderDate;
    }

    public String getRemainderData() {
        return remainderData;
    }

    public void setRemainderData(String remainderData) {
        this.remainderData = remainderData;
    }

    public String getQrImage() {
        return qrImage;
    }

    public void setQrImage(String qrImage) {
        this.qrImage = qrImage;
    }

    public String getGenerateQrNo() {
        return generateQrNo;
    }

    public void setGenerateQrNo(String generateQrNo) {
        this.generateQrNo = generateQrNo;
    }
    public String getSubscriptionName() {
        return subscriptionName;
    }

    public void setSubscriptionName(String subscriptionName) {
        this.subscriptionName = subscriptionName;
    }

    public String getValidity() {
        return validity;
    }

    public void setValidity(String validity) {
        this.validity = validity;
    }

    public String getCompanyname() {
        return companyname;
    }

    public void setCompanyname(String companyname) {
        this.companyname = companyname;
    }

    public String getOrderfacility() {
        return orderfacility;
    }

    public void setOrderfacility(String orderfacility) {
        this.orderfacility = orderfacility;
    }

    public String getClientService() {
        return clientService;
    }

    public void setClientService(String clientService) {
        this.clientService = clientService;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public String getOpening_status() {
        return opening_status;
    }

    public void setOpening_status(String opening_status) {
        this.opening_status = opening_status;
    }

    public String getAlcohal() {
        return alcohal;
    }

    public void setAlcohal(String alcohal) {
        this.alcohal = alcohal;
    }

    public String getCardsCash() {
        return cardsCash;
    }

    public void setCardsCash(String cardsCash) {
        this.cardsCash = cardsCash;
    }



    public String getSeating() {
        return seating;
    }

    public void setSeating(String seating) {
        this.seating = seating;
    }

    public String getDeliveryTime() {
        return deliveryTime;
    }

    public void setDeliveryTime(String deliveryTime) {
        this.deliveryTime = deliveryTime;
    }

    public String getDeliveryPrice() {
        return deliveryPrice;
    }

    public void setDeliveryPrice(String deliveryPrice) {
        this.deliveryPrice = deliveryPrice;
    }

    public String getResturent_type_id() {
        return resturent_type_id;
    }

    public void setResturent_type_id(String resturent_type_id) {
        this.resturent_type_id = resturent_type_id;
    }

    public String getDiscountType() {
        return discountType;
    }

    public void setDiscountType(String discountType) {
        this.discountType = discountType;
    }

    public String getCuisines() {
        return cuisines;
    }

    public void setCuisines(String cuisines) {
        this.cuisines = cuisines;
    }

    public String getTags() {
        return tags;
    }

    public void setTags(String tags) {
        this.tags = tags;
    }

    public String getWorkProgress() {
        return workProgress;
    }

    public void setWorkProgress(String workProgress) {
        this.workProgress = workProgress;
    }

    public String getAppDate() {
        return appDate;
    }

    public void setAppDate(String appDate) {
        this.appDate = appDate;
    }

    public String getAppTime() {
        return appTime;
    }

    public void setAppTime(String appTime) {
        this.appTime = appTime;
    }

    public String getAppUser() {
        return appUser;
    }

    public void setAppUser(String appUser) {
        this.appUser = appUser;
    }

    public String getAppRemarks() {
        return appRemarks;
    }

    public void setAppRemarks(String appRemarks) {
        this.appRemarks = appRemarks;
    }

    public String getSubscriptionStatus() {
        return subscriptionStatus;
    }

    public void setSubscriptionStatus(String subscriptionStatus) {
        this.subscriptionStatus = subscriptionStatus;
    }

    public String getExpiryDate() {
        return expiryDate;
    }

    public void setExpiryDate(String expiryDate) {
        this.expiryDate = expiryDate;
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

    public String getUserP() {
        return userP;
    }

    public void setUserP(String userP) {
        this.userP = userP;
    }

    public String getAgencyCode() {
        return agencyCode;
    }

    public void setAgencyCode(String agencyCode) {
        this.agencyCode = agencyCode;
    }

    public String getAgAmount() {
        return agAmount;
    }

    public void setAgAmount(String agAmount) {
        this.agAmount = agAmount;
    }

    public String getPaymentMode() {
        return paymentMode;
    }

    public void setPaymentMode(String paymentMode) {
        this.paymentMode = paymentMode;
    }

    public String getActualPrice() {
        return actualPrice;
    }

    public void setActualPrice(String actualPrice) {
        this.actualPrice = actualPrice;
    }

    public String getStatusOnline() {
        return statusOnline;
    }

    public void setStatusOnline(String statusOnline) {
        this.statusOnline = statusOnline;
    }

    public String getAgency() {
        return agency;
    }

    public void setAgency(String agency) {
        this.agency = agency;
    }

    public String getAssignstatus() {
        return assignstatus;
    }

    public void setAssignstatus(String assignstatus) {
        this.assignstatus = assignstatus;
    }

    public String getPaymentStatus() {
        return paymentStatus;
    }

    public void setPaymentStatus(String paymentStatus) {
        this.paymentStatus = paymentStatus;
    }

    public String getUploadStatus() {
        return uploadStatus;
    }

    public void setUploadStatus(String uploadStatus) {
        this.uploadStatus = uploadStatus;
    }

    public Long getRid() {
        return rid;
    }

    public void setRid(Long rid) {
        this.rid = rid;
    }



    public Long getsId() {
        return sId;
    }

    public void setsId(Long sId) {
        this.sId = sId;
    }


    public String getPaymentDate() {
        return paymentDate;
    }

    public void setPaymentDate(String paymentDate) {
        this.paymentDate = paymentDate;
    }

    public String getPaymentAmount() {
        return paymentAmount;
    }

    public void setPaymentAmount(String paymentAmount) {
        this.paymentAmount = paymentAmount;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getAddressOne() {
        return addressOne;
    }

    public void setAddressOne(String addressOne) {
        this.addressOne = addressOne;
    }

    public String getAddressTwo() {
        return addressTwo;
    }

    public void setAddressTwo(String addressTwo) {
        this.addressTwo = addressTwo;
    }

    public String getHead() {
        return head;
    }

    public void setHead(String head) {
        this.head = head;
    }

    public String getArr() {
        return arr;
    }

    public void setArr(String arr) {
        this.arr = arr;
    }

    public Date getTransactionDate() {
        return transactionDate;
    }

    public void setTransactionDate(Date transactionDate) {
        this.transactionDate = transactionDate;
    }

    public String getBalanceAmount() {
        return balanceAmount;
    }

    public void setBalanceAmount(String balanceAmount) {
        this.balanceAmount = balanceAmount;
    }

    public String getActive() {
        return active;
    }

    public void setActive(String active) {
        this.active = active;
    }

    public String getAmountPaid() {
        return amountPaid;
    }

    public void setAmountPaid(String amountPaid) {
        this.amountPaid = amountPaid;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getParent() {
        return parent;
    }

    public void setParent(String parent) {
        this.parent = parent;
    }

    public String getAssigneduser() {
        return assigneduser;
    }

    public void setAssigneduser(String assigneduser) {
        this.assigneduser = assigneduser;
    }

    public String getRadioValue() {
        return radioValue;
    }

    public void setRadioValue(String radioValue) {
        this.radioValue = radioValue;
    }


    public String getAssigned() {
        return assigned;
    }

    public void setAssigned(String assigned) {
        this.assigned = assigned;
    }

    public String getFile() {
        return file;
    }

    public void setFile(String file) {
        this.file = file;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }


    public String getProduct() {
        return product;
    }

    public void setProduct(String product) {
        this.product = product;
    }

    public String getService() {
        return service;
    }

    public void setService(String service) {
        this.service = service;
    }

    public String getrName() {
        return rName;
    }

    public void setrName(String rName) {
        this.rName = rName;
    }

    public String getcName() {
        return cName;
    }

    public void setcName(String cName) {
        this.cName = cName;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }


    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getZipcode() {
        return zipcode;
    }

    public void setZipcode(String zipcode) {
        this.zipcode = zipcode;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    public String getGstNo() {
        return gstNo;
    }

    public void setGstNo(String gstNo) {
        this.gstNo = gstNo;
    }
}