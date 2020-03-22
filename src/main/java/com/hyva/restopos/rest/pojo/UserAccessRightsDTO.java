package com.hyva.restopos.rest.pojo;

import lombok.Data;

import javax.persistence.Column;

@Data
public class UserAccessRightsDTO {
    private Long id;
    private String userAccountSetupID;
    private boolean hr;
    private boolean client;
    private boolean reports;
    private boolean orderList;
    private boolean services;
    private boolean restaurant;
    private boolean enqAdd;
    private boolean enqAssign;
    private boolean enqMore;
    private boolean enqAddcall;
    private boolean enqConfirmEnquiry;
    private boolean enqEdit;
    private boolean createpage;
    private boolean module;
    private boolean submodule;
    private boolean enqUpload;
    private boolean enqDelete;
    private boolean lists;
    private boolean users;
    private boolean masters;
    private boolean settings;
    private boolean assign;
    private boolean country;
    private boolean state;
    private boolean city;
    private boolean smsServer;
    private boolean emailServer;
    private boolean typeOfEnq;
    private boolean serviceType;
    private boolean sourceOfEnq;
    private boolean serviceLocation;
    private boolean supplier;
    private boolean callStatus;
    private boolean currency;
    private boolean product;
    private boolean userRole;
    private boolean service;
    private boolean payment;
    private boolean franchise;
    private boolean appointment;
    private boolean remark;
    private boolean invoice;
    private boolean selectbox;
    private boolean configuration;


    @Column
    private String activity;
    private boolean agencyMaster;
    private boolean addClient;
    private boolean excel;
    private boolean dataimport;
    private boolean resRemarks;
    private boolean taskCompletion;
    private boolean listingpage;

    public boolean isEnqAddcall() {
        return enqAddcall;
    }

    public void setEnqAddcall(boolean enqAddcall) {
        this.enqAddcall = enqAddcall;
    }

    public boolean isEnqConfirmEnquiry() {
        return enqConfirmEnquiry;
    }

    public void setEnqConfirmEnquiry(boolean enqConfirmEnquiry) {
        this.enqConfirmEnquiry = enqConfirmEnquiry;
    }

    public boolean isEnqEdit() {
        return enqEdit;
    }

    public void setEnqEdit(boolean enqEdit) {
        this.enqEdit = enqEdit;
    }

    public boolean isCreatepage() {
        return createpage;
    }

    public void setCreatepage(boolean createpage) {
        this.createpage = createpage;
    }

    public boolean isModule() {
        return module;
    }

    public void setModule(boolean module) {
        this.module = module;
    }

    public boolean isSubmodule() {
        return submodule;
    }

    public void setSubmodule(boolean submodule) {
        this.submodule = submodule;
    }

    public boolean isSmsServer() {
        return smsServer;
    }

    public void setSmsServer(boolean smsServer) {
        this.smsServer = smsServer;
    }

    public boolean isEmailServer() {
        return emailServer;
    }

    public void setEmailServer(boolean emailServer) {
        this.emailServer = emailServer;
    }

    public boolean isTypeOfEnq() {
        return typeOfEnq;
    }

    public void setTypeOfEnq(boolean typeOfEnq) {
        this.typeOfEnq = typeOfEnq;
    }

    public boolean isServiceType() {
        return serviceType;
    }

    public void setServiceType(boolean serviceType) {
        this.serviceType = serviceType;
    }

    public boolean isSourceOfEnq() {
        return sourceOfEnq;
    }

    public void setSourceOfEnq(boolean sourceOfEnq) {
        this.sourceOfEnq = sourceOfEnq;
    }

    public boolean isServiceLocation() {
        return serviceLocation;
    }

    public void setServiceLocation(boolean serviceLocation) {
        this.serviceLocation = serviceLocation;
    }

    public boolean isSupplier() {
        return supplier;
    }

    public void setSupplier(boolean supplier) {
        this.supplier = supplier;
    }

    public boolean isCallStatus() {
        return callStatus;
    }

    public void setCallStatus(boolean callStatus) {
        this.callStatus = callStatus;
    }

    public boolean isListingpage() {
        return listingpage;
    }

    public void setListingpage(boolean listingpage) {
        this.listingpage = listingpage;
    }

    public boolean isResRemarks() {
        return resRemarks;
    }

    public void setResRemarks(boolean resRemarks) {
        this.resRemarks = resRemarks;
    }

    public boolean isTaskCompletion() {
        return taskCompletion;
    }

    public void setTaskCompletion(boolean taskCompletion) {
        this.taskCompletion = taskCompletion;
    }

    public boolean isAddClient() {
        return addClient;
    }

    public void setAddClient(boolean addClient) {
        this.addClient = addClient;
    }

    public boolean isExcel() {
        return excel;
    }

    public void setExcel(boolean excel) {
        this.excel = excel;
    }

    public boolean isDataimport() {
        return dataimport;
    }

    public void setDataimport(boolean dataimport) {
        this.dataimport = dataimport;
    }

    private boolean moreDetails;

    public boolean isConfiguration() {
        return configuration;
    }

    public void setConfiguration(boolean configuration) {
        this.configuration = configuration;
    }

    public boolean isMoreDetails() {
        return moreDetails;
    }

    public void setMoreDetails(boolean moreDetails) {
        this.moreDetails = moreDetails;
    }

    public boolean isSelectbox() {
        return selectbox;
    }

    public void setSelectbox(boolean selectbox) {
        this.selectbox = selectbox;
    }

    public boolean isAppointment() {
        return appointment;
    }

    public void setAppointment(boolean appointment) {
        this.appointment = appointment;
    }

    public boolean isRemark() {
        return remark;
    }

    public void setRemark(boolean remark) {
        this.remark = remark;
    }

    public boolean isInvoice() {
        return invoice;
    }

    public void setInvoice(boolean invoice) {
        this.invoice = invoice;
    }

    public boolean isFranchise() {
        return franchise;
    }

    public void setFranchise(boolean franchise) {
        this.franchise = franchise;
    }

    public boolean isAgencyMaster() {
        return agencyMaster;
    }

    public void setAgencyMaster(boolean agencyMaster) {
        this.agencyMaster = agencyMaster;
    }

    public boolean isPayment() {
        return payment;
    }

    public void setPayment(boolean payment) {
        this.payment = payment;
    }

    public boolean isAssign() {
        return assign;
    }

    public void setAssign(boolean assign) {
        this.assign = assign;
    }

    public boolean isCountry() {
        return country;
    }

    public void setCountry(boolean country) {
        this.country = country;
    }

    public boolean isState() {
        return state;
    }

    public void setState(boolean state) {
        this.state = state;
    }

    public boolean isCity() {
        return city;
    }

    public void setCity(boolean city) {
        this.city = city;
    }

    public boolean isCurrency() {
        return currency;
    }

    public void setCurrency(boolean currency) {
        this.currency = currency;
    }

    public boolean isProduct() {
        return product;
    }

    public void setProduct(boolean product) {
        this.product = product;
    }

    public boolean isUserRole() {
        return userRole;
    }

    public void setUserRole(boolean userRole) {
        this.userRole = userRole;
    }

    public boolean isService() {
        return service;
    }

    public void setService(boolean service) {
        this.service = service;
    }

    public boolean isReports() {
        return reports;
    }

    public void setReports(boolean reports) {
        this.reports = reports;
    }

    public boolean isClient() {
        return client;
    }

    public void setClient(boolean client) {
        this.client = client;
    }

    public String getActivity() {
        return activity;
    }

    public void setActivity(String activity) {
        this.activity = activity;
    }

    public boolean isEnqAdd() {
        return enqAdd;
    }

    public void setEnqAdd(boolean enqAdd) {
        this.enqAdd = enqAdd;
    }

    public boolean isEnqAssign() {
        return enqAssign;
    }

    public void setEnqAssign(boolean enqAssign) {
        this.enqAssign = enqAssign;
    }

    public boolean isEnqMore() {
        return enqMore;
    }

    public void setEnqMore(boolean enqMore) {
        this.enqMore = enqMore;
    }

    public boolean isEnqUpload() {
        return enqUpload;
    }

    public void setEnqUpload(boolean enqUpload) {
        this.enqUpload = enqUpload;
    }

    public boolean isEnqDelete() {
        return enqDelete;
    }

    public void setEnqDelete(boolean enqDelete) {
        this.enqDelete = enqDelete;
    }

    public boolean isLists() {
        return lists;
    }

    public void setLists(boolean lists) {
        this.lists = lists;
    }

    public boolean isUsers() {
        return users;
    }

    public void setUsers(boolean users) {
        this.users = users;
    }

    public boolean isMasters() {
        return masters;
    }

    public void setMasters(boolean masters) {
        this.masters = masters;
    }

    public boolean isSettings() {
        return settings;
    }

    public void setSettings(boolean settings) {
        this.settings = settings;
    }

    public boolean isOrderList() {
        return orderList;
    }

    public void setOrderList(boolean orderList) {
        this.orderList = orderList;
    }

    public boolean isServices() {
        return services;
    }

    public void setServices(boolean services) {
        this.services = services;
    }

    public boolean isRestaurant() {
        return restaurant;
    }

    public void setRestaurant(boolean restaurant) {
        this.restaurant = restaurant;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserAccountSetupID() {
        return userAccountSetupID;
    }

    public void setUserAccountSetupID(String userAccountSetupID) {
        this.userAccountSetupID = userAccountSetupID;
    }

    public boolean isHr() {
        return hr;
    }

    public void setHr(boolean hr) {
        this.hr = hr;
    }
}