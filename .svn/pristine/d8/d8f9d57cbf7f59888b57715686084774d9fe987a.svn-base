package com.hyva.restopos.rest.Mapper;



import com.hyva.restopos.Application;
import com.hyva.restopos.rest.entities.*;
import com.hyva.restopos.rest.pojo.*;
import com.hyva.restopos.rest.entities.City;
import com.hyva.restopos.rest.entities.Country;
import com.hyva.restopos.rest.entities.Currency;
import com.hyva.restopos.rest.pojo.CityPojo;
import com.hyva.restopos.rest.entities.Subscriptions;
import com.hyva.restopos.rest.entities.State;
import com.hyva.restopos.rest.pojo.CountryPojo;
import com.hyva.restopos.rest.pojo.CurrencyPojo;
import com.hyva.restopos.rest.pojo.SubscriptionsPojo;
import com.hyva.restopos.rest.pojo.StatePojo;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class HiposMapper {

    public static Country MapPojoToEntity(CountryPojo countryPojo){
        Country country = new Country();
        country.setCountryId(countryPojo.getCountryId());
        country.setCountryName(countryPojo.getCountryName());
        country.setStatus(countryPojo.getStatus());
        return country;
    }
    public static Module MapPojoToEntity(ModulePojo modulePojo){
        Module module = new Module();
        module.setId(modulePojo.getId());
        module.setModuleName(modulePojo.getModuleName());
        module.setStatus(modulePojo.getStatus());
        return module;
    }
    public static SubModule MapPojoToEntity(SubModulePojo subModulePojo){
        SubModule subModule = new SubModule();
        subModule.setId(subModulePojo.getId());
        subModule.setModuleName(subModulePojo.getModuleName());
        subModule.setSubModuleName(subModulePojo.getSubModuleName());
        subModule.setStatus(subModulePojo.getStatus());
        return subModule;
    }
    public static CreatePage MapPojoToEntity(CreatePagePojo createPagePojo){
        CreatePage createPage = new CreatePage();
        createPage.setId(createPagePojo.getId());
        createPage.setModuleName(createPagePojo.getModuleName());
        createPage.setPageName(createPagePojo.getPageName());
        createPage.setSubmoduleName(createPagePojo.getSubmoduleName());
        createPage.setColumns(createPagePojo.getColumns());
        createPage.setDetails(createPagePojo.getDetails());
        return createPage;
    }
    public static Popup MapPojoToEntity(PopupPojo popupPojo){
        Popup popup = new Popup();
        popup.setId(popupPojo.getId());
        popup.setPopupName(popupPojo.getPopupName());
        popup.setDetails(popupPojo.getDetails());
        return popup;
    }
    public static Supplier MapPojoToEntity(SupplierPojo supplierPojo){
        Supplier supplier = new Supplier();
        supplier.setId(supplierPojo.getId());
        supplier.setSupplierName(supplierPojo.getSupplierName());
        supplier.setEmail(supplierPojo.getEmail());
        supplier.setGst(supplierPojo.getGst());
        supplier.setEmail(supplierPojo.getEmail());
        supplier.setContact(supplierPojo.getContact());
        supplier.setAccNo(supplierPojo.getAccNo());
        supplier.setAddress(supplierPojo.getAddress());
        supplier.setCountry(supplierPojo.getCountry());
        supplier.setState(supplierPojo.getState());
        supplier.setCurrency(supplierPojo.getCurrency());
        supplier.setPersonIncharge(supplierPojo.getPersonIncharge());
        supplier.setBankName(supplierPojo.getBankName());
        supplier.setPanNo(supplierPojo.getPanNo());
        supplier.setBankBranch(supplierPojo.getBankBranch());
        supplier.setIfsc(supplierPojo.getIfsc());
        supplier.setUin(supplierPojo.getUin());
        supplier.setWebsite(supplierPojo.getWebsite());
        supplier.setCreditLimit(supplierPojo.getCreditLimit());
        supplier.setCreditTerm(supplierPojo.getCreditTerm());
        supplier.setStatus(supplierPojo.getStatus());
        supplier.setServiceList(supplierPojo.getServiceList());
        return supplier;
    }
    public static ServiceType MapPojoToEntity(ServiceTypePojo serviceTypePojo){
        ServiceType serviceType = new ServiceType();
        serviceType.setId(serviceTypePojo.getId());
        serviceType.setServiceType(serviceTypePojo.getServiceType());
        serviceType.setTypeOfEnquiry(serviceTypePojo.getTypeOfEnquiry());
        serviceType.setDetails(serviceTypePojo.getDetails());
        return serviceType;
    }
    public static Agency MapAgencyToEntity(AgencyPojo agencyPojo){
        Agency agency = new Agency();
        agency.setAgId(agencyPojo.getAgId());
        agency.setRoleName(agencyPojo.getRoleName());
        agency.setAgencyName(agencyPojo.getAgencyName());
        agency.setAgencyAddress(agencyPojo.getAgencyAddress());
        agency.setAgPhone(agencyPojo.getAgPhone());
        agency.setFranName(agencyPojo.getFranName());
        agency.setAgName(agencyPojo.getUserName());
        agency.setAgPassword(agencyPojo.getAgPassword());
        agency.setAgencyCode(agencyPojo.getAgencyCode());
        agency.setParent(agencyPojo.getParent());
        agency.setStatus(agencyPojo.getStatus());
        agency.setAgencyCode(agencyPojo.getAgencyCode());

        return agency;
    }
    public static List<AgencyPojo> mapagencyEntityToPojo(List<Agency> List) {
        List<AgencyPojo> list = new ArrayList<>();
        for (Agency agency : List) {
            AgencyPojo agencyPojo = new AgencyPojo();
            agencyPojo.setAgId(agency.getAgId());
            agencyPojo.setRoleName(agency.getRoleName());
            agencyPojo.setStatus(agency.getStatus());
            agencyPojo.setAgencyName(agency.getAgencyName());
            agencyPojo.setAgencyAddress(agency.getAgencyAddress());
            agencyPojo.setAgPhone(agency.getAgPhone());
            agencyPojo.setAgName(agency.getAgName());
            agencyPojo.setAgPassword(agency.getAgPassword());
            agencyPojo.setAgencyCode(agency.getAgencyCode());
            agencyPojo.setFranName(agency.getFranName());
            list.add(agencyPojo);
        }
        return list;
    }
    public static List<CallStatusMasterPojo> mapCallStatusEntityToPojo(List<CallStatusMaster> List) {
        List<CallStatusMasterPojo> list = new ArrayList<>();
        for (CallStatusMaster callStatusMaster : List) {
            CallStatusMasterPojo callStatusMasterPojo = new CallStatusMasterPojo();
            callStatusMasterPojo.setId(callStatusMaster.getId());
            callStatusMasterPojo.setName(callStatusMaster.getName());
            callStatusMasterPojo.setStatus(callStatusMaster.getStatus());
            list.add(callStatusMasterPojo);
        }
        return list;
    }
    public static List<PopupPojo> mapPopupEntityToPojo(List<Popup> List) {
        List<PopupPojo> list = new ArrayList<>();
        for (Popup popup : List) {
            PopupPojo popupPojo = new PopupPojo();
            popupPojo.setId(popup.getId());
            popupPojo.setPopupName(popup.getPopupName());
            popupPojo.setDetails(popup.getDetails());
            popupPojo.setStatus(popup.getStatus());
            list.add(popupPojo);
        }
        return list;
    }
    public static TypeOfEnquiry MapPojoToEntity(TypeOfEnquiryPojo typeOfEnquiryPojo){
        TypeOfEnquiry typeOfEnquiry = new TypeOfEnquiry();
        typeOfEnquiry.setId(typeOfEnquiryPojo.getId());
        typeOfEnquiry.setName(typeOfEnquiryPojo.getName());
        typeOfEnquiry.setStatus(typeOfEnquiryPojo.getStatus());
        return typeOfEnquiry;
    }
    public static Mail MapPojoToEntity(MailDTO saveMailDetails){
        Mail mail = new Mail();
        mail.setId(saveMailDetails.getId());
        mail.setUserName(saveMailDetails.getUserName());
        mail.setPassword(saveMailDetails.getPassword());
        mail.setPort(saveMailDetails.getPort());
        mail.setSmtpHost(saveMailDetails.getSmtpHost());
        mail.setForMail(saveMailDetails.getForMail());
        mail.setStatus("Active");
        return mail;
    }
    public static List<MailDTO> mapMailEntityToPojo(List<Mail> mailList){
        List<MailDTO> list=new ArrayList<>();
        for(Mail mail:mailList) {
            MailDTO mailDTO = new MailDTO();
            mailDTO.setId(mail.getId());
            mailDTO.setUserName(mail.getUserName());
            mailDTO.setPassword(mail.getPassword());
            mailDTO.setSmtpHost(mail.getSmtpHost());
            mailDTO.setPort(mail.getPort());
            list.add(mailDTO);
        }
        return list;
    }
    public static EnquiryForm MapPojoToEntity(EnquiryFormPojo enquiryFormPojo){
        EnquiryForm enquiryForm = new EnquiryForm();
        enquiryForm.setId(enquiryFormPojo.getId());
        enquiryForm.setAddress1(enquiryFormPojo.getAddress1());
        enquiryForm.setAddress2(enquiryFormPojo.getAddress2());
        enquiryForm.setCallerLocation(enquiryFormPojo.getCallerLocation());
        enquiryForm.setCountry(enquiryFormPojo.getCountry());
        enquiryForm.setState(enquiryFormPojo.getState());
        enquiryForm.setCity(enquiryFormPojo.getCity());
        enquiryForm.setCallStatus(enquiryFormPojo.getCallStatus());
        enquiryForm.setFirstName(enquiryFormPojo.getFirstName());
        enquiryForm.setLastName(enquiryFormPojo.getLastName());
        enquiryForm.setPhoneNumber(enquiryFormPojo.getPhoneNumber());
        enquiryForm.setTypeOfEnquiry(enquiryFormPojo.getTypeOfEnquiry());
        enquiryForm.setServiceType(enquiryFormPojo.getServiceType());
        enquiryForm.setZipcode(enquiryFormPojo.getZipcode());
        enquiryForm.setEmail(enquiryFormPojo.getEmail());
        enquiryForm.setCallinfo(enquiryFormPojo.getCallinfo());
        enquiryForm.setServiceTypeDetails(enquiryFormPojo.getServiceTypeDetails());
        enquiryForm.setSpecialRequirements(enquiryFormPojo.getSpecialRequirements());
        enquiryForm.setCallStatusDetails(enquiryFormPojo.getCallStatusDetails());
        enquiryForm.setServiceLocation(enquiryFormPojo.getServiceLocation());
        enquiryForm.setSourceOfEnquiry(enquiryFormPojo.getSourceOfEnquiry());
        enquiryForm.setEnquiryNo(enquiryFormPojo.getEnquiryNo());
        enquiryForm.setEnquiryDate(enquiryFormPojo.getEnquiryDate());
        enquiryForm.setOthers(enquiryFormPojo.getOthers());
        if(enquiryFormPojo.getId()==null) {
            enquiryForm.setAssignstatus("Assign");
            enquiryForm.setStatus("Pending");
        }else {
            enquiryForm.setAssignstatus(enquiryFormPojo.getAssignstatus());
            enquiryForm.setStatus(enquiryFormPojo.getStatus());
        }
        enquiryForm.setUser(enquiryFormPojo.getUser());
        return enquiryForm;
    }
    public static List<EnquiryFormPojo> mapEnquiryFormEntityToPojo(List<EnquiryForm> List) {
        List<EnquiryFormPojo> list = new ArrayList<>();
        for (EnquiryForm enquiryForm : List) {
            EnquiryFormPojo enquiryFormPojo = new EnquiryFormPojo();
            enquiryFormPojo.setId(enquiryForm.getId());
            enquiryFormPojo.setAddress1(enquiryForm.getAddress1());
            enquiryFormPojo.setAddress2(enquiryForm.getAddress2());
            enquiryFormPojo.setCallerLocation(enquiryForm.getCallerLocation());
            enquiryFormPojo.setCountry(enquiryForm.getCountry());
            enquiryFormPojo.setState(enquiryForm.getState());
            enquiryFormPojo.setCity(enquiryForm.getCity());
            enquiryFormPojo.setCallStatus(enquiryForm.getCallStatus());
            enquiryFormPojo.setFirstName(enquiryForm.getFirstName());
            enquiryFormPojo.setLastName(enquiryForm.getLastName());
            enquiryFormPojo.setPhoneNumber(enquiryForm.getPhoneNumber());
            enquiryFormPojo.setTypeOfEnquiry(enquiryForm.getTypeOfEnquiry());
            enquiryFormPojo.setServiceType(enquiryForm.getServiceType());
            enquiryFormPojo.setZipcode(enquiryForm.getZipcode());
            enquiryFormPojo.setEmail(enquiryForm.getEmail());
            enquiryFormPojo.setCallinfo(enquiryForm.getCallinfo());
            enquiryFormPojo.setServiceTypeDetails(enquiryForm.getServiceTypeDetails());
            enquiryFormPojo.setSpecialRequirements(enquiryForm.getSpecialRequirements());
            enquiryFormPojo.setCallStatusDetails(enquiryForm.getCallStatusDetails());
            enquiryFormPojo.setServiceLocation(enquiryForm.getServiceLocation());
            enquiryFormPojo.setSourceOfEnquiry(enquiryForm.getSourceOfEnquiry());
            enquiryFormPojo.setEnquiryNo(enquiryForm.getEnquiryNo());
            enquiryFormPojo.setEnquiryDate(enquiryForm.getEnquiryDate());
            enquiryFormPojo.setOthers(enquiryForm.getOthers());
            enquiryFormPojo.setUser(enquiryForm.getUser());
            enquiryFormPojo.setStatus(enquiryForm.getStatus());
            enquiryFormPojo.setAssignstatus(enquiryForm.getAssignstatus());
            list.add(enquiryFormPojo);
        }
        return list;
    }

    public static PaymentMode MapPojoToEntity(PaymentModePojo paymentModePojo){
        PaymentMode paymentMode = new PaymentMode();
        paymentMode.setPaymentId(paymentModePojo.getPaymentId());
        paymentMode.setPaymentName(paymentModePojo.getPaymentName());
        paymentMode.setStatus(paymentModePojo.getStatus());
        return paymentMode;
    }


    public static List<CountryPojo> mapcountryEntityToPojo(List<Country> List) {
        List<CountryPojo> list = new ArrayList<>();
        for (Country country : List) {
            CountryPojo countryPojo = new CountryPojo();
            countryPojo.setCountryId(country.getCountryId());
            countryPojo.setStatus(country.getStatus());
            countryPojo.setCountryName(country.getCountryName());
            list.add(countryPojo);
        }
        return list;
    }
    public static List<SupplierPojo> mapsupplierEntityToPojo(List<Supplier> List) {
        List<SupplierPojo> list = new ArrayList<>();
        for (Supplier supplier : List) {
            SupplierPojo supplierPojo = new SupplierPojo();
            supplierPojo.setId(supplier.getId());
            supplierPojo.setSupplierName(supplier.getSupplierName());
            supplierPojo.setStatus(supplier.getStatus());
            supplierPojo.setEmail(supplier.getEmail());
            supplierPojo.setContact(supplier.getContact());
            supplierPojo.setAddress(supplier.getAddress());
            supplierPojo.setState(supplier.getState());
            supplierPojo.setPersonIncharge(supplier.getPersonIncharge());
            supplierPojo.setCountry(supplier.getCountry());
            supplierPojo.setCurrency(supplier.getCurrency());
            supplierPojo.setBankBranch(supplier.getBankBranch());
            supplierPojo.setBankName(supplier.getBankName());
            supplierPojo.setAccNo(supplier.getAccNo());
            supplierPojo.setCreditLimit(supplier.getCreditLimit());
            supplierPojo.setGst(supplier.getGst());
            supplierPojo.setIfsc(supplier.getIfsc());
            supplierPojo.setCreditTerm(supplier.getCreditTerm());
            supplierPojo.setPanNo(supplier.getPanNo());
            supplierPojo.setWebsite(supplier.getWebsite());
            supplierPojo.setServiceList(supplier.getServiceList());
            list.add(supplierPojo);
        }
        return list;
    }
    public static List<ServiceTypePojo> mapServiceTypeEntityToPojo(List<ServiceType> List) {
        List<ServiceTypePojo> list = new ArrayList<>();
        for (ServiceType serviceType : List) {
            ServiceTypePojo serviceTypePojo = new ServiceTypePojo();
            serviceTypePojo.setId(serviceType.getId());
            serviceTypePojo.setServiceType(serviceType.getServiceType());
            serviceTypePojo.setTypeOfEnquiry(serviceType.getTypeOfEnquiry());
            serviceTypePojo.setDetails(serviceType.getDetails());
            list.add(serviceTypePojo);
        }
        return list;
    }
    public static List<TypeOfEnquiryPojo> mapTypeEntityToPojo(List<TypeOfEnquiry> List) {
        List<TypeOfEnquiryPojo> list = new ArrayList<>();
        for (TypeOfEnquiry typeOfEnquiry : List) {
            TypeOfEnquiryPojo typeOfEnquiryPojo = new TypeOfEnquiryPojo();
            typeOfEnquiryPojo.setId(typeOfEnquiry.getId());
            typeOfEnquiryPojo.setStatus(typeOfEnquiry.getStatus());
            typeOfEnquiryPojo.setName(typeOfEnquiry.getName());
            list.add(typeOfEnquiryPojo);
        }
        return list;
    }
    public static EnqSource mapEnqPojoToEnity(EnqSourcePojo enqSourcePojo){
        EnqSource activity = new EnqSource();
        activity.setEnqSourceId(enqSourcePojo.getEnqSourceId());
        activity.setSourceName(enqSourcePojo.getSourceName());
        activity.setStatus(enqSourcePojo.getStatus());

        return activity;
    }
    public static ServiceLocation mapLocationServicePojoToEnity(ServiceLocationPojo serviceLocationPojo){
        ServiceLocation serviceLocation = new ServiceLocation();
        serviceLocation.setSerlocId(serviceLocationPojo.getSerlocId());
        serviceLocation.setServicelName(serviceLocationPojo.getServicelName());
        serviceLocation.setStatus(serviceLocationPojo.getStatus());

        return serviceLocation;
    }
    public static Service mapServicePojoToEnity(ServicePojo servicePojo){
        Service service = new Service();
        service.setsId(servicePojo.getsId());
        service.setName(servicePojo.getName());
        service.setPrice(servicePojo.getPrice());
        service.setAttendants(servicePojo.getAttendants());
        service.setAvailabilities(servicePojo.getAvailabilities());
        service.setCurrency(servicePojo.getCurrency());
        service.setCategories(servicePojo.getCategories());
        service.setAttendants(servicePojo.getAttendants());
        service.setDescription(servicePojo.getDescription());
        service.setDuration(servicePojo.getDuration());
        return service;
    }
    public static Currency MapPojoToEntity(CurrencyPojo currencyPojo){
        Currency currency = new Currency();
        currency.setCurrencyId(currencyPojo.getCurrencyId());
        currency.setCurrencyName(currencyPojo.getCurrencyName());
        currency.setCurrencyCode(currencyPojo.getCurrencyCode());
        currency.setCurrencySymbol(currencyPojo.getCurrencySymbol());
        currency.setCurrencySymbolPlace(currencyPojo.getCurrencySymbolPlace());
        currency.setAccountCode(currencyPojo.getAccountCode());
        currency.setLocationId(currencyPojo.getLocationId());
        currency.setUseraccountId(currencyPojo.getUseraccountId());
        currency.setCurrencyDescription(currencyPojo.getCurrencyDescription());
        currency.setStatus(currencyPojo.getStatus());
        return currency;
    }

    public static SmsServer mapSMSServerPojoToEntity(SmsServerPojo smsServerDTO){
        SmsServer smsServer = new SmsServer();
        smsServer.setMessageId(smsServerDTO.getId());
        smsServer.setSmsURL(smsServerDTO.getSmsURL());
        smsServer.setApiKey(smsServerDTO.getApiKey());
        smsServer.setSenderId(smsServerDTO.getSenderId());
        return smsServer;
    }
    public static List<SmsServerPojo> mapSMSServerEntityToPojo(List<SmsServer> smsServers){
        List<SmsServerPojo> smsServerDTOS=new ArrayList<>();
        for(SmsServer smsServer:smsServers) {
            SmsServerPojo smsServerDTO = new SmsServerPojo();
            smsServerDTO.setId(smsServer.getMessageId());
            smsServerDTO.setSmsURL(smsServer.getSmsURL());
            smsServerDTO.setApiKey(smsServer.getApiKey());
            smsServerDTO.setSenderId(smsServer.getSenderId());
            smsServerDTOS.add(smsServerDTO);
        }
        return smsServerDTOS;
    }


    public static List<CurrencyPojo> mapCurrencyEntityToPojo(List<Currency> List) {
        List<CurrencyPojo> list = new ArrayList<>();
        for (Currency currency : List) {
            CurrencyPojo currencyPojo = new CurrencyPojo();
            currencyPojo.setCurrencyId(currency.getCurrencyId());
            currencyPojo.setAccountCode(currency.getAccountCode());
            currencyPojo.setCurrencyCode(currency.getCurrencyCode());
            currencyPojo.setCurrencySymbol(currency.getCurrencySymbol());
            currencyPojo.setCurrencySymbolPlace(currency.getCurrencySymbolPlace());
            currencyPojo.setLocationId(currency.getLocationId());
            currencyPojo.setCurrencyDescription(currency.getCurrencyDescription());
            currencyPojo.setUseraccountId(currency.getUseraccountId());
            currencyPojo.setStatus(currency.getStatus());
            currencyPojo.setCurrencyName(currency.getCurrencyName());
            list.add(currencyPojo);
        }
        return list;
    }


    public static UserRole MapUserRolePojoToEntity(UserRolePojo userRolePojo ){
        UserRole userRole = new UserRole();
        userRole.setRoleId(userRolePojo.getRoleId());
        userRole.setRoleName(userRolePojo.getRoleName());
        userRole.setRoleStatus(userRolePojo.getRoleStatus());
        return userRole;
    }
    public static CallStatusMaster mapPojoToEntity(CallStatusMasterPojo callStatusMasterPojo ){
        CallStatusMaster callStatusMaster = new CallStatusMaster();
        callStatusMaster.setId(callStatusMasterPojo.getId());
        callStatusMaster.setName(callStatusMasterPojo.getName());
        callStatusMaster.setStatus(callStatusMasterPojo.getStatus());
        return callStatusMaster;
    }

    public static City mapCityPojoToEntity(CityPojo cityDTO){
        City city = new City();
        city.setCityId(cityDTO.getCityId());
        city.setCountryId(cityDTO.getCountryId());
        city.setStatus(cityDTO.getStatus());
        city.setStateId(cityDTO.getStateId());
        city.setCityName(cityDTO.getCityName());
        city.setStateName(cityDTO.getStateName());
        city.setCountryName(cityDTO.getCountryName());
        return city;
    }

    public static List<CityPojo> mapCityEntityToPojo(List<City> typeList){
        List<CityPojo> list=new ArrayList<>();
        for(City city:typeList) {
            CityPojo cityDTO = new CityPojo();
            cityDTO.setCityId(city.getCityId());
            cityDTO.setCountryId(city.getCountryId());
            cityDTO.setStatus(city.getStatus());
            cityDTO.setStateId(city.getStateId());
            cityDTO.setCityName(city.getCityName());
            cityDTO.setStateName(city.getStateName());
            cityDTO.setCountryName(city.getCountryName());
            list.add(cityDTO);
        }
        return list;
    }


    public static Subscriptions mapPojoToEntity(SubscriptionsPojo sassSubscriptionsPojo){

        Subscriptions sassSubscriptions=new Subscriptions();
        sassSubscriptions.setSubscriptionName(sassSubscriptionsPojo.getSubscriptionName());
        sassSubscriptions.setValidity(sassSubscriptionsPojo.getValidity());
        sassSubscriptions.setStatus(sassSubscriptionsPojo.getStatus());
        sassSubscriptions.setSubscriptionFor(sassSubscriptionsPojo.getSubscriptionFor());
        sassSubscriptions.setVersion(sassSubscriptionsPojo.getVersion());
        sassSubscriptions.setPermission(sassSubscriptionsPojo.getPermission());
        sassSubscriptions.setAddonPermission(sassSubscriptionsPojo.getAddonPermission());
        sassSubscriptions.setApplication(sassSubscriptionsPojo.getApplication());
        sassSubscriptions.setCompanies(sassSubscriptionsPojo.getCompanies());
        sassSubscriptions.setApplicationurl(sassSubscriptionsPojo.getApplicationurl());
        sassSubscriptions.setUsers(sassSubscriptionsPojo.getUsers());
        sassSubscriptions.setSubscriptionId(sassSubscriptionsPojo.getSubscriptionId());
        sassSubscriptions.setActualPrice(sassSubscriptionsPojo.getActualPrice());
        sassSubscriptions.setOfferPrice(sassSubscriptionsPojo.getOfferPrice());
        return sassSubscriptions;
    }

    public static List<SubscriptionsPojo> mapSubscriptionEntityToPojo(List<Subscriptions> sassSubscriptionsList){
        List<SubscriptionsPojo> sassSubscriptionsPojoList = new ArrayList<>();
        for(Subscriptions sassSubscriptions:sassSubscriptionsList){
            SubscriptionsPojo sassSubscriptionsPojo = new SubscriptionsPojo();
            sassSubscriptionsPojo.setSubscriptionId( sassSubscriptions.getSubscriptionId());
            sassSubscriptionsPojo.setSubscriptionName( sassSubscriptions.getSubscriptionName() );
            sassSubscriptionsPojo.setValidity( sassSubscriptions.getValidity() );
            sassSubscriptionsPojo.setStatus( sassSubscriptions.getStatus() );
            sassSubscriptionsPojo.setSubscriptionFor( sassSubscriptions.getSubscriptionFor() );
            sassSubscriptionsPojo.setVersion( sassSubscriptions.getVersion() );
            sassSubscriptionsPojo.setAddonPermission( sassSubscriptions.getAddonPermission() );
            sassSubscriptionsPojo.setCompanies( sassSubscriptions.getCompanies() );
            sassSubscriptionsPojo.setUsers(sassSubscriptions.getUsers());
            sassSubscriptionsPojo.setApplication( sassSubscriptions.getApplication() );
            sassSubscriptionsPojo.setApplicationurl( sassSubscriptions.getApplicationurl() );
            sassSubscriptionsPojo.setActualPrice( sassSubscriptions.getActualPrice() );
            sassSubscriptionsPojo.setOfferPrice( sassSubscriptions.getOfferPrice() );
            sassSubscriptionsPojo.setPermission(sassSubscriptions.getPermission());
            sassSubscriptionsPojoList.add( sassSubscriptionsPojo);
        }
        return sassSubscriptionsPojoList;
    }

    public static State MapStateEntityToPojo(StatePojo statePojo){
        State state = new State();
        state.setStateId(statePojo.getStateId());
        state.setCountryId(statePojo.getCountryId());
        state.setStateName(statePojo.getStateName());
        state.setStatus(statePojo.getStatus());
        return state;
    }
    public static Currency mapPojoToEntity(CurrencyPojo currencyPojo){
        Currency currency = new Currency();
        currency.setCurrencyId(currencyPojo.getCurrencyId());
        currency.setCurrencyName(currencyPojo.getCurrencyName());
        currency.setCurrencyDescription(currencyPojo.getCurrencyDescription());
        currency.setCurrencyCode(currencyPojo.getCurrencyCode());
        currency.setCurrencySymbol(currencyPojo.getCurrencySymbol());
        currency.setStatus(currencyPojo.getStatus());
        return currency;
    }
    public static List<StatePojo> mapEntityToPojo(List<State> List) {
        List<StatePojo> list = new ArrayList<>();
        for (State state : List) {
            StatePojo statePojo = new StatePojo();
            statePojo.setStateId(state.getStateId());
            statePojo.setCountryId(state.getCountryId());
            statePojo.setStateName(state.getStateName());
            statePojo.setCountryName(state.getCountryName());
            statePojo.setStatus(state.getStatus());
            list.add(statePojo);
        }
        return list;
    }
//    public static List<CurrencyPojo> mapEntityToPojo(List<Currency> List) {
//        List<CurrencyPojo> list = new ArrayList<>();
//        for (Currency currency : List) {
//            CurrencyPojo currencyPojo = new CurrencyPojo();
//            currencyPojo.setCurrencyId(currency.getCurrencyId());
//            currencyPojo.setCurrencyName(currency.getCurrencyName());
//            currencyPojo.setCurrencyCode(currency.getCurrencyCode());
//            currencyPojo.setCurrencyDescription(currency.getCurrencyDescription());
//            currencyPojo.setStatus(currency.getStatus());
//            list.add(currencyPojo);
//        }
//        return list;
//    }

    public static List<UserRolePojo> mapRolePojotoentity(List<UserRole> List) {
        List<UserRolePojo> list = new ArrayList<>();
        for (UserRole pojo : List) {
            UserRolePojo userRolePojo = new UserRolePojo();
            userRolePojo.setRoleId(pojo.getRoleId());
            userRolePojo.setRoleName(pojo.getRoleName());
            userRolePojo.setRoleStatus(pojo.getRoleStatus());
            list.add(userRolePojo);
        }
        return list;
    }


    public static Orders mapPojoToEntity(OrdersPojo ordersPojo){
        Orders orders=new Orders();
        orders.setUsername(ordersPojo.getUsername());
        orders.setPassword(ordersPojo.getPassword());
        orders.setCompanyEmail(ordersPojo.getCompanyEmail());
        orders.setCustomerName(ordersPojo.getCustomerName());
        orders.setCompanyName(ordersPojo.getCompanyName());
        orders.setCompanyAddress(ordersPojo.getCompanyAddress());
        orders.setDeliveryType(ordersPojo.getDeliveryType());
//        orders.setNewsletter(ordersPojo.getNewsletter());
        orders.setCompanyPhone(ordersPojo.getCompanyPhone());
        orders.setPackagesSASSId(ordersPojo.getPackagesSASSId());
        orders.setCompanyNo(ordersPojo.getCompanyNo());
//        sassOrders.setCountry(sassOrdersPojo.getCountry());
//        sassOrders.setCurrency(sassOrdersPojo.getCurrency());
        orders.setFaxno(ordersPojo.getFaxno());
        orders.setLanguage(ordersPojo.getLanguage());
//        orders.setGstRegistered(ordersPojo.getGstRegistered());
//        orders.setGstRegisteredDate(ordersPojo.getGstRegisteredDate());
        orders.setIncorpDate(ordersPojo.getIncorpDate());
        orders.setPostingStatus("Pending");
        orders.setPan(ordersPojo.getPan());
        orders.setOrderValue((new Date().getTime()));
//        orders.setWebsite(ordersPojo.getWebsite());
//        orders.setUsercount(ordersPojo.getUsercount());
        orders.setAmount(ordersPojo.getAmount());
        orders.setPaymentMethod(ordersPojo.getPaymentMethod());
        orders.setPaymentDate(ordersPojo.getPaymentDate());
        orders.setBank(ordersPojo.getBank());
        orders.setRecpNo(ordersPojo.getRecpNo());
        return orders;
    }

    public static List<OrdersPojo> MapEntityToPojo(List<Orders> sassOrders){
        List<OrdersPojo> list=new ArrayList<>();
        for(Orders sassOrders1:sassOrders) {
            OrdersPojo sassOrdersPojo = new OrdersPojo();
            sassOrdersPojo.setCompanyName(sassOrders1.getCompanyName());
            sassOrdersPojo.setCompanyEmail(sassOrders1.getCompanyEmail());
            sassOrdersPojo.setSassOrdersId(sassOrders1.getSassOrdersId());
            sassOrdersPojo.setCustomerName(sassOrders1.getCustomerName());
            sassOrdersPojo.setCompanyPhone(sassOrders1.getCompanyPhone());
//            sassOrdersPojo.setIncorpDate(sassOrders1.getCreationDate());
            sassOrdersPojo.setOrderValue(sassOrders1.getOrderValue());
            sassOrdersPojo.setUsername(sassOrders1.getUsername());
            sassOrdersPojo.setPassword(sassOrders1.getPassword());
            if(sassOrders1.getSassSubscriptionsId()!=null) {
                sassOrdersPojo.setSubscriptionId(String.valueOf(sassOrders1.getSassSubscriptionsId().getSubscriptionId()));
                sassOrdersPojo.setSubscriptionName(sassOrders1.getSassSubscriptionsId().getSubscriptionName());
                sassOrdersPojo.setVersion(sassOrders1.getSassSubscriptionsId().getVersion());
            }
            if(sassOrders1.getSassSubscriptionsId()!=null)
                sassOrdersPojo.setValidity(sassOrders1.getSassSubscriptionsId().getValidity());
            sassOrdersPojo.setPostingStatus(sassOrders1.getPostingStatus());
            sassOrdersPojo.setLicenceKey(sassOrders1.getLicenceKey());
//            sassOrdersPojo.setRenew(sassOrders1.getRenew());
            sassOrdersPojo.setCreatedDate(sassOrders1.getCreatedDate());
            sassOrdersPojo.setExpiryDate(sassOrders1.getExpiryDate());
//            if(sassOrders1.getExpiryDate().before(new Date())){
//                sassOrdersPojo.setValidityStatus("Expired");
//            }else {
//                sassOrdersPojo.setValidityStatus("Active");
//            }
            sassOrdersPojo.setDeliveryType(sassOrders1.getDeliveryType());
//            sassOrdersPojo.setUsercount(sassOrders1.getUsercount());
            list.add(sassOrdersPojo);
        }
        return list;
    }



    public static List<ServicePojo> mapServiceEntityToPojo(List<Service> serviceList){
        List<ServicePojo> list = new ArrayList<>();
        for(Service service:serviceList){
            ServicePojo servicePojo = new ServicePojo();
            servicePojo.setsId( service.getsId());
            servicePojo.setName( service.getName());
            servicePojo.setDuration(service.getDuration());
            servicePojo.setPrice( service.getPrice());
            servicePojo.setCurrency( service.getCurrency());
            servicePojo.setAttendants( service.getAttendants());
            servicePojo.setCategories( service.getCategories());
            servicePojo.setAvailabilities( service.getAvailabilities());
            servicePojo.setDescription( service.getDescription());
            list.add( servicePojo);
        }
        return list;
    }
    public static List<UserPojo> mapUserEntityToPojo(List<User> userList){
        List<UserPojo> list = new ArrayList<>();
        for(User user:userList){
            UserPojo userPojo = new UserPojo();
            userPojo.setUserId( user.getUserId());
            userPojo.setAgencyName( user.getAgencyName());
            userPojo.setUserRole( user.getUserRole());
            userPojo.setFirstName( user.getFirstName());
            userPojo.setLastName(user.getLastName());
            userPojo.setUserName( user.getUserName());
            userPojo.setPasswordUser( user.getPasswordUser());
            userPojo.setAddress( user.getAddress());
            userPojo.setCalender( user.getCalender());
            userPojo.setCountry( user.getCountry());
            userPojo.setState( user.getState());
            userPojo.setCity( user.getCity());
            userPojo.setEmail( user.getEmail());
            userPojo.setZipCode( user.getZipCode());
            userPojo.setReTypePswd( user.getReTypePswd());
            userPojo.setNotes( user.getNotes());
            userPojo.setParent(user.getParent());
            userPojo.setPhone( user.getPhone());
            userPojo.setStatus( user.getStatus());
            userPojo.setAgencyId( user.getAgencyId());
            userPojo.setFranId( user.getFranId());
            userPojo.setRadioValue( user.getRadioValue());
            list.add( userPojo);
        }
        return list;
    }
    public static List<RestaurantPojo> mapResEntityToPojo(List<Restaurant> restaurantList){
        List<RestaurantPojo> list = new ArrayList<>();
        for(Restaurant restaurant:restaurantList){
            RestaurantPojo restaurantPojo = new RestaurantPojo();
            restaurantPojo.setRid(restaurant.getRid());
            restaurantPojo.setName(restaurant.getName());
            restaurantPojo.setSlug(restaurant.getSlug());
            restaurantPojo.setDate(restaurant.getDate());
            restaurantPojo.setUser(restaurant.getUser());
            restaurantPojo.setProduct(restaurant.getProduct());
            restaurantPojo.setService(restaurant.getService());
            restaurantPojo.setCountry(restaurant.getCountry());
            restaurantPojo.setState(restaurant.getState());
            restaurantPojo.setCity(restaurant.getCity());
            restaurantPojo.setRemarks(restaurant.getRemarks());
            restaurantPojo.setcName(restaurant.getcName());
            restaurantPojo.setrName(restaurant.getrName());
            restaurantPojo.setContact(restaurant.getContact());
            restaurantPojo.setZipcode(restaurant.getZipcode());
            restaurantPojo.setLocation(restaurant.getLocation());
            restaurantPojo.setEmail(restaurant.getEmail());
            restaurantPojo.setGstNo(restaurant.getGstNo());
            restaurantPojo.setRadioValue(restaurant.getRadioValue());
            restaurantPojo.setParent(restaurant.getParent());
            restaurantPojo.setStatus(restaurant.getStatus());
            restaurantPojo.setAssigneduser(restaurant.getAssigneduser());
            restaurantPojo.setStatusOnline(restaurant.getStatusOnline());
            restaurantPojo.setLocationConnectId(restaurant.getLocationConnectId());
            restaurantPojo.setAmountPaid(restaurant.getAmountPaid());
            restaurantPojo.setActive(restaurant.getActive());
            restaurantPojo.setAddressOne(restaurant.getAddressOne());
            restaurantPojo.setAddressTwo(restaurant.getAddressTwo());
            restaurantPojo.setActualPrice(restaurant.getActualPrice());
            restaurantPojo.setBalanceAmount(restaurant.getBalanceAmount());
            restaurantPojo.setTransactionDate(restaurant.getTransactionDate());
            restaurantPojo.setPaymentStatus(restaurant.getPaymentStatus());
            restaurantPojo.setPaymentDate(restaurant.getPaymentDate());
            restaurantPojo.setPaymentAmount(restaurant.getPaymentAmount());
            restaurantPojo.setFile(restaurant.getFile());
            restaurantPojo.setUploadStatus(restaurant.getUploadStatus());
            restaurantPojo.setAssignstatus(restaurant.getAssignstatus());
            restaurantPojo.setAgency(restaurant.getAgency());
            restaurantPojo.setPaymentMode(restaurant.getPaymentMode());
            restaurantPojo.setCode(restaurant.getCode());
            restaurantPojo.setExpiryDate(restaurant.getExpiryDate());
            restaurantPojo.setSubscriptionStatus(restaurant.getSubscriptionStatus());
            restaurantPojo.setAppDate(restaurant.getAppDate());
            restaurantPojo.setAppTime(restaurant.getAppTime());
            restaurantPojo.setAppRemarks(restaurant.getAppRemarks());
            restaurantPojo.setAppUser(restaurant.getAppUser());
            restaurantPojo.setWorkProgress(restaurant.getWorkProgress());
            restaurantPojo.setResRemarks(restaurant.getResRemarks());


            restaurantPojo.setOwner(restaurant.getOwner());
            restaurantPojo.setOpening_status(restaurant.getOpening_status());
            restaurantPojo.setAlcohal(restaurant.getAlcohal());
            restaurantPojo.setCardsCash(restaurant.getCardsCash());
            restaurantPojo.setClientService(restaurant.getClientService());
            restaurantPojo.setOrderfacility(restaurant.getOrderfacility());
            restaurantPojo.setSeating(restaurant.getSeating());
            restaurantPojo.setDeliveryTime(restaurant.getDeliveryTime());
            restaurantPojo.setDeliveryPrice(restaurant.getDeliveryPrice());
            restaurantPojo.setResturent_type_id(restaurant.getResturent_type_id());
            restaurantPojo.setDiscountType(restaurant.getDiscountType());
            restaurantPojo.setCuisines(restaurant.getCuisines());
            restaurantPojo.setTags(restaurant.getTags());
            restaurantPojo.setCompanyname(restaurant.getCompanyname());
            restaurantPojo.setCode(restaurant.getCode());
            restaurantPojo.setValidity(restaurant.getValidity());
            restaurantPojo.setSubscriptionStatus(restaurant.getSubscriptionStatus());
            restaurantPojo.setSubscriptionName(restaurant.getSubscriptionName());
            restaurantPojo.setQrImage(restaurant.getQrImage());
            restaurantPojo.setGenerateQrNo(restaurant.getGenerateQrNo());
            restaurantPojo.setListing(restaurant.getListing());
            restaurantPojo.setCustStatus(restaurant.getCustStatus());
            restaurantPojo.setCallbackDate(restaurant.getCallbackDate());
            restaurantPojo.setCallbackTime(restaurant.getCallbackTime());

            list.add( restaurantPojo);
        }
        return list;
    }








    public static User MapPojoToEntity(UserPojo userPojo){
        User user = new User();
        user.setUserId(userPojo.getUserId());
        user.setAgencyId(userPojo.getAgencyId());
        user.setUserRole(userPojo.getUserRole());
        user.setParent(userPojo.getParent());
        user.setFirstName(userPojo.getFirstName());
        user.setLastName(userPojo.getLastName());
        user.setPhone(userPojo.getPhone());
        user.setEmail(userPojo.getEmail());
        user.setAddress(userPojo.getAddress());
        user.setAgencyName(userPojo.getAgencyName());
        user.setCountry(userPojo.getCountry());
        user.setState(userPojo.getState());
        user.setCity(userPojo.getCity());
        user.setZipCode(userPojo.getZipCode());
        user.setReTypePswd(userPojo.getReTypePswd());
        user.setNotes(userPojo.getNotes());
        user.setUserName(userPojo.getUserName());
        user.setPasswordUser(userPojo.getPasswordUser());
        user.setReTypePswd("Approve");
        user.setCalender(userPojo.getCalender());
        user.setStatus(userPojo.getStatus());
        user.setAgencyId(userPojo.getAgencyId());
        user.setFranId(userPojo.getFranId());
        user.setRadioValue(userPojo.getRadioValue());
        return user;
    }
    public static GeneralSettings mapSettingsPojoToEntity(SettingsPojo pojo){
        GeneralSettings settings=new GeneralSettings();
        settings.setId(pojo.getId());
        settings.setCompanyName(pojo.getCompanyName());
        settings.setAttachFile(pojo.getAttachFile());
        settings.setAddress(pojo.getAddress());
        settings.setCompanyEmail(pojo.getCompanyEmail());
        settings.setGst(pojo.getGst());
        settings.setCompanyLink(pojo.getCompanyLink());
        settings.setGoogleAnalyticsID(pojo.getGoogleAnalyticsID());
        return settings;
    }

    public static List<SchDocumentPojo> mapSchDocumnetEntityToPojo(List<SchDocument> List) {
        List<SchDocumentPojo> list = new ArrayList<>();
        for (SchDocument schDocument : List) {
            SchDocumentPojo schDocumentPojo = new SchDocumentPojo();
            schDocumentPojo.setDocumentName(schDocument.getDocumentName());
            schDocumentPojo.setEmailBody(schDocument.getEmailBody());
            schDocumentPojo.setEmailSubject(schDocument.getEmailSubject());
            schDocumentPojo.setSms(schDocument.getSms());
            schDocumentPojo.setFile(schDocument.getFile());
            schDocumentPojo.setStatus(schDocument.getStatus());
            schDocumentPojo.setId(schDocument.getId());

            list.add(schDocumentPojo);
        }
        return list;
    }
    public static SchDocument mapSchDocumnetPojoToEntity(SchDocumentPojo documentPojo){
        SchDocument document = new SchDocument();
        document.setId(documentPojo.getId());
        document.setDocumentName(documentPojo.getDocumentName());
        document.setEmailBody(documentPojo.getEmailBody());
        document.setEmailSubject(documentPojo.getEmailSubject());
        document.setSms(documentPojo.getSms());
        document.setFile(documentPojo.getFile());
        document.setStatus(documentPojo.getStatus());
        return document;
        }

}
