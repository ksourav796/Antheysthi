package com.hyva.restopos.rest.Hiposservice;
import com.google.gson.Gson;
import com.hyva.restopos.rest.entities.*;
import com.hyva.restopos.rest.pojo.UserRolePojo;
import com.hyva.restopos.rest.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;


@Component
public class BasicDataService {
@Autowired
UserAccessRightsRepository userAccessRightsRepository;
@Autowired
UserRoleRepository userRoleRepository;
@Autowired
SmsServerRepository smsServerRepository;
@Autowired
UserRepository userRepository;
@Autowired
CountryRepository countryRepository;
@Autowired
EnqSourceRepository enqSourceRepository;
@Autowired
ServiceLocationRepository serviceLocationRepository;
@Autowired
ServiceTypeRepository serviceTypeRepository;
@Autowired
AmbulanceRepository ambulanceRepository;
@Autowired
HiposService service;
@Autowired
CallStatusRepository callStatusRepository;
@Autowired
CreatePageRepository createPageRepository;
@Autowired
TypeOfEnquiryRepository typeOfEnquiryRepository;
    public void pushData()throws Exception {

        List<UserAccessRights> userAccessRightsList = userAccessRightsRepository.findAll();
        if (userAccessRightsList.isEmpty()){
            UserAccessRights userAccessRights1 = new UserAccessRights();
            userAccessRights1.setHr(true);
            userAccessRights1.setOrderList(true);
            userAccessRights1.setServices(true);
            userAccessRights1.setRestaurant(true);
            userAccessRights1.setLists(true);
            userAccessRights1.setUsers(true);
            userAccessRights1.setMasters(true);
            userAccessRights1.setSettings(true);
            userAccessRights1.setCountry(true);
            userAccessRights1.setState(true);
            userAccessRights1.setCity(true);
            userAccessRights1.setPayment(true);
            userAccessRights1.setCurrency(true);
            userAccessRights1.setService(true);
            userAccessRights1.setProduct(true);
            userAccessRights1.setPayment(true);
            userAccessRights1.setUserRole(true);
            userAccessRights1.setAgencyMaster(true);
            userAccessRights1.setClient(true);
            userAccessRights1.setReports(true);
            userAccessRights1.setFranchise(true);
            userAccessRights1.setConfiguration(true);
            userAccessRights1.setResRemarks(true);
            userAccessRights1.setTaskCompletion(true);
            userAccessRights1.setRemark(true);
            userAccessRights1.setAppointment(true);
            userAccessRights1.setSelectbox(true);
            userAccessRights1.setInvoice(true);
            userAccessRights1.setEnqAdd(true);
            userAccessRights1.setEnqAssign(true);
            userAccessRights1.setEnqDelete(true);
            userAccessRights1.setEnqMore(true);
            userAccessRights1.setCreatepage(true);
            userAccessRights1.setModule(true);
            userAccessRights1.setSubmodule(true);
            userAccessRights1.setTypeOfEnq(true);
            userAccessRights1.setServiceLocation(true);
            userAccessRights1.setServiceType(true);
            userAccessRights1.setEmailServer(true);
            userAccessRights1.setSmsServer(true);
            userAccessRights1.setCallStatus(true);
            userAccessRights1.setSupplier(true);
            userAccessRights1.setSourceOfEnq(true);
            userAccessRights1.setEnqAddcall(true);
            userAccessRights1.setEnqEdit(true);
            userAccessRights1.setEnqConfirmEnquiry(true);
            userAccessRights1.setEnqUpload(true);
            userAccessRights1.setAddClient(true);
            userAccessRights1.setDataimport(true);
            userAccessRights1.setExcel(true);
            userAccessRights1.setListingpage(true);
            List<String> stringList = new ArrayList<>();
            Gson gson = new Gson();
            userAccessRights1.setActivity( gson.toJson(stringList));
            userAccessRights1.setMoreDetails(true);
            userAccessRightsRepository.save(userAccessRights1);

        }

        List<User> userList = userRepository.findAll();
        if(userList.size()==0) {
            UserAccessRights userAccessRights = userAccessRightsRepository.findOne(1L);
            AddUser("admin","admin","admin","Active","approved",userAccessRights,"101","17","1558","","","","560025",null);
        }

        List<EnqSource> enqSourceList =  enqSourceRepository.findAll();
        if(enqSourceList.size()==0){
            AddEnqSource("Ozonental","Active");
            AddEnqSource("Justdail","Active");
            AddEnqSource("Others","Active");
        }
        List<ServiceLocation> serviceLocationList =  serviceLocationRepository.findAll();
        if(serviceLocationList.size()==0){
            AddServiceLocation("Bangalore","Active");
            AddServiceLocation("Kolkata","Active");
            AddServiceLocation("Delhi","Active");
            AddServiceLocation("Ahmedabad","Active");
            AddServiceLocation("Jaipur","Active");
            AddServiceLocation("Hyderabad","Active");
            AddServiceLocation("Chennai","Active");
        }
        List<TypeOfEnquiry> typeOfEnquiryList= typeOfEnquiryRepository.findAll();
        if(typeOfEnquiryList.size()==0) {
            AddTypeOfEnquiry("FuneralService-PartA","Active");
            AddTypeOfEnquiry("FuneralService-PartB","Active");
            AddTypeOfEnquiry("DeadBodyTransport","Active");
            AddTypeOfEnquiry("PetCremation","Active");
            AddTypeOfEnquiry("Ambulance","Active");
            AddTypeOfEnquiry("Others","Active");
        }
        List<Ambulance> ambulanceList= ambulanceRepository.findAll();
        if(ambulanceList.size()==0) {
            AddAmbulance("Basic Ambu","Active");
            AddAmbulance("Critical Care Ambu","Active");
            AddAmbulance("NeoNatal Ambu","Active");
            AddAmbulance("Emergency Care Ambu","Active");
        }
        List<CallStatusMaster> callStatusMasters= callStatusRepository.findAll();
        if(callStatusMasters.size()==0) {
            AddCallstatus("Service_UnAvailable","Active");
            AddCallstatus("General_Enquiry","Active");
            AddCallstatus("Service_Initiated","Active");
            AddCallstatus("IVR_DROP","Active");
        }
//        List<ServiceType> serviceTypeList= serviceTypeRepository.findAll();
//        if(serviceTypeList.size()==0) {
//            AddServiceType("FuneralService-PartA","Hearse Van");
//            AddServiceType("FuneralService-PartA","Freezer Box");
//            AddServiceType("FuneralService-PartA","Embalming");
//            AddServiceType("FuneralService-PartB","Funeral Priest");
//            AddServiceType("FuneralService-PartB","Catering");
//            AddServiceType("FuneralService-PartB","Venue Management");
//            AddServiceType("DeadBodyTransport","Domestic HUM - Air");
//            AddServiceType("DeadBodyTransport","Domestic HUM - Road");
//            AddServiceType("DeadBodyTransport","International HUM");
//            AddServiceType("DeadBodyTransport","Coffin Packing");
//            AddServiceType("PetCremation","Dog");
//            AddServiceType("PetCremation","Cat");
//            AddServiceType("PetCremation","Snake");
//        }

        List<UserRole> userRoles=userRoleRepository.findAll();
        if(userRoles.size()==0) {
            AddUserRole("Admin");
        }


    }


    private void AddEnqSource(String name,String status) {
        EnqSource enqSource = new EnqSource();
        enqSource.setSourceName(name);
        enqSource.setStatus(status);
        enqSourceRepository.save(enqSource);
    }
    private void AddServiceLocation(String name,String status) {
        ServiceLocation serviceLocation = new ServiceLocation();
        serviceLocation.setServicelName(name);
        serviceLocation.setStatus(status);
        serviceLocationRepository.save(serviceLocation);
    }


    private void AddUserRole(String name)throws Exception {
        UserRole userRole = new UserRole();
        userRole.setRoleName(name);
        userRole.setRoleStatus("Active");
        Map<String,Boolean> allCreatePageMap = new LinkedHashMap<>();
        List<CreatePage> createPageList = createPageRepository.findAll();
        allCreatePageMap.put("module",true);
        allCreatePageMap.put("submodule",true);
        allCreatePageMap.put("createpage",true);
        allCreatePageMap.put("user",true);
        allCreatePageMap.put("userRole",true);
        allCreatePageMap.put("company",true);
        for (CreatePage createPage:createPageList){
            if(!StringUtils.isEmpty(createPage.getPageName())){
                allCreatePageMap.put(createPage.getPageName(),true);
            }else if (!StringUtils.isEmpty(createPage.getSubmoduleName())){
                allCreatePageMap.put(createPage.getSubmoduleName(),true);
            }else {
                allCreatePageMap.put(createPage.getModuleName(),true);
            }
        }
        Gson gson = new Gson();
        userRole.setPermissions(gson.toJson(allCreatePageMap));
        List<UserAccessRights> userAccessRightsList = userAccessRightsRepository.findAll();
//        service.createSaveUserAccountSetupDetails(userRole);
        if (userAccessRightsList.size()>0){
            userRole.setUserAccessRights(userAccessRightsList.get(0));
        }
        userRoleRepository.save(userRole);
    }
    private void AddUser(String username,String firstname,String password,String status,String retypePassword,UserAccessRights userAccessRights,String country,String state,String city,String email,String userRole,String parent,String zipcode,Long fid) {
        User user = new User();
        user.setUserName(username);
        user.setFirstName(firstname);
        user.setPasswordUser(password);
        user.setStatus(status);
        user.setReTypePswd(retypePassword);
        user.setUserAccessRights(userAccessRights);
        user.setCountry(country);
        user.setState(state);
        user.setCity(city);
        user.setEmail(email);
        user.setParent(parent);
        user.setFranId(fid);
        user.setUserRole(userRole);
        user.setZipCode(zipcode);
        List<UserRole> userRoles = userRoleRepository.findAll();
        if(userRoles.size()>0) {
            user.setPermissions(userRoles.get(0).getPermissions());
        }
        userRepository.save(user);
    }

    private void AddTypeOfEnquiry(String name,String status) {
        TypeOfEnquiry typeOfEnquiry = new TypeOfEnquiry();
        typeOfEnquiry.setName(name);
        typeOfEnquiry.setStatus(status);
        typeOfEnquiryRepository.save(typeOfEnquiry);
    }
    private void AddAmbulance(String name,String status) {
        Ambulance ambulance = new Ambulance();
        ambulance.setName(name);
        ambulance.setStatus(status);
        ambulanceRepository.save(ambulance);
    }
    private void AddCallstatus(String name,String status) {
        CallStatusMaster callStatusMaster = new CallStatusMaster();
        callStatusMaster.setName(name);
        callStatusMaster.setStatus(status);
        callStatusRepository.save(callStatusMaster);
    }
    private void AddServiceType(String typeOfenquiry,String servicetype) {
        ServiceType serviceType = new ServiceType();
        serviceType.setTypeOfEnquiry(typeOfenquiry);
        serviceType.setServiceType(servicetype);
        serviceTypeRepository.save(serviceType);
    }

}


















