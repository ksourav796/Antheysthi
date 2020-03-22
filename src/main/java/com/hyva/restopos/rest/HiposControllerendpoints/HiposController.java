package com.hyva.restopos.rest.HiposControllerendpoints;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.google.gson.Gson;
import com.hyva.restopos.rest.Hiposservice.HiposService;
import com.hyva.restopos.rest.entities.*;

import com.hyva.restopos.rest.pojo.*;
import com.hyva.restopos.rest.repository.*;
import com.hyva.restopos.util.FileSystemOperations;
import org.apache.commons.io.FilenameUtils;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.json.JSONObject;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;;
import javax.servlet.http.HttpServlet;
import java.io.*;
import java.lang.reflect.Type;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping("/hipos")
public class HiposController extends HttpServlet {
    @Autowired
    HiposService hiposService;
    @Autowired
    CountryRepository countryRepository;
    @Autowired
    StateRepository stateRepository;
    @Autowired
    CityRepository cityRepository;

    @RequestMapping(value = "/saveCountry",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity saveCountry(@RequestBody CountryPojo countryPojo){
        return ResponseEntity.status(200).body(hiposService.saveCountry(countryPojo));
    }
    @RequestMapping(value = "/saveCreatePage",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity saveCreatePage(@RequestBody CreatePagePojo createPagePojo) throws Exception{
        return ResponseEntity.status(200).body(hiposService.saveCreatePage(createPagePojo));
    }
    @RequestMapping(value = "/savePopup",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity savePopup(@RequestBody PopupPojo popupPojo) throws Exception{
        return ResponseEntity.status(200).body(hiposService.savePopup(popupPojo));
    }
    @RequestMapping(value = "/saveSupplier",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity saveSupplier(@RequestBody SupplierPojo supplierPojo){
        return ResponseEntity.status(200).body(hiposService.saveSupplier(supplierPojo));
    }
    @RequestMapping(value = "/saveFormData",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity saveFormData(@RequestBody String s,@RequestParam(value = "module")String module) throws Exception{
        return ResponseEntity.status(200).body(hiposService.saveFormData(s,module));
    }
    @RequestMapping(value = "/saveEnquiryForm",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity saveEnquiryForm(@RequestBody EnquiryFormPojo enquiryFormPojo) throws Exception{
        return ResponseEntity.status(200).body(hiposService.saveEnquiryForm(enquiryFormPojo));
    }
    @RequestMapping(value = "/saveModule",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity saveModule(@RequestBody ModulePojo modulePojo) throws Exception{
        return ResponseEntity.status(200).body(hiposService.saveModule(modulePojo));
    }
    @RequestMapping(value = "/saveSubModule",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity saveSubModule(@RequestBody SubModulePojo subModulePojo) throws Exception{
        return ResponseEntity.status(200).body(hiposService.saveSubModule(subModulePojo));
    }
    @RequestMapping(value = "/getModuleList",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity getModuleList() throws Exception{
        return ResponseEntity.status(200).body(hiposService.getModuleList());
    }
    @RequestMapping(value = "/getSubModuleList",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity getSubModuleList() throws Exception{
        return ResponseEntity.status(200).body(hiposService.getSubModuleList());
    }
    @RequestMapping(value = "/getPopupList",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity getPopupList() throws Exception{
        return ResponseEntity.status(200).body(hiposService.getPopupList());
    }
    @RequestMapping(value = "/getSubModuleListBasedOnModule",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity getSubModuleListBasedOnModule(@RequestParam(value = "module")String module) throws Exception{
        return ResponseEntity.status(200).body(hiposService.getSubModuleListBasedOnModule(module));
    }
    @RequestMapping(value = "/getSubModuleBasedOnModule",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity getSubModuleBasedOnModule(@RequestParam(value = "module")String module,
                                                    @RequestParam(value = "type")String type) throws Exception{
        return ResponseEntity.status(200).body(hiposService.getSubModuleBasedOnModule(module,type));
    }
    @RequestMapping(value = "/saveServiceType",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity saveServiceType(@RequestBody ServiceTypePojo serviceTypePojo) throws Exception{
        return ResponseEntity.status(200).body(hiposService.saveServiceType(serviceTypePojo));
    }
    @RequestMapping(value = "/getUserRolePermissions",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity getUserRolePermissions(@RequestParam(value = "id")Long id){
        return ResponseEntity.status(200).body(hiposService.getUserRolePermissions(id));
    }
    @RequestMapping(value = "/getUserPermissions",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity getUserPermissions(@RequestParam(value = "id")Long id){
        return ResponseEntity.status(200).body(hiposService.getUserPermissions(id));
    }
    @RequestMapping(value = "/savePermissions",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity savePermissions(@RequestParam(value = "roleId")Long id,@RequestBody String permissions){
        return ResponseEntity.status(200).body(hiposService.savePermissions(id,permissions));
    }
    @RequestMapping(value = "/saveUserPermissions",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity saveUserPermissions(@RequestParam(value = "userId")Long id,@RequestBody String permissions){
        return ResponseEntity.status(200).body(hiposService.saveUserPermissions(id,permissions));
    }
    @RequestMapping(value = "/saveEnqFormAddCall",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity saveEnqFormAddCall(@RequestBody EnquiryFormPojo enquiryFormPojo){
        return ResponseEntity.status(200).body(hiposService.saveEnqFormAddCall(enquiryFormPojo));
    }
    @RequestMapping(value = "/confirmEnquiry",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity confirmEnquiry(@RequestParam(value = "id")Long id){
        return ResponseEntity.status(200).body(hiposService.confirmEnquiry(id));
    }
   @RequestMapping(value = "/getEnquiryListBasedOnPhoneNum",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity getEnquiryListBasedOnPhoneNum(@RequestParam(value = "phone",required = false)String phone,
                                                        @RequestParam(value = "email",required = false)String email){
        return ResponseEntity.status(200).body(hiposService.getEnquiryListBasedOnPhoneNum(phone,email));
    }
    @RequestMapping(value = "/getPaginatedEnquiry", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getPaginatedEnquiry(@RequestParam(value = "type", required = false) String type,@RequestParam(value = "searchText", required = false) String searchText,@RequestAttribute(value = "userName")String userName,
                                              @RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(hiposService.getPaginatedEnquiry( type,basePojo, searchText,userName));
    }
    @RequestMapping(value = "/getPaginatedClients", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getPaginatedEnquiry(@RequestParam(value = "type", required = false) String type,@RequestParam(value = "searchText", required = false) String searchText,@RequestAttribute(value = "userName")String userName,@RequestParam(value = "status")String status,
                                              @RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(hiposService.getPaginatedClients( type,basePojo, searchText,userName,status));
    }
    @RequestMapping(value = "/saveMail", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity saveMail(@RequestBody MailDTO saveMailDetails) {
        return ResponseEntity.status(200).body(hiposService.createSaveMailDetails(saveMailDetails));
    }
    @RequestMapping(value = "/saveTypeOfEnquiry", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity saveTypeOfEnquiry(@RequestBody TypeOfEnquiryPojo typeOfEnquiryPojo) {
        return ResponseEntity.status(200).body(hiposService.saveTypeOfEnquiry(typeOfEnquiryPojo));
    }
    @RequestMapping(value = "/editMail", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity editMail(@RequestParam(value = "userName", required = false) String userName) {
        return ResponseEntity.status(200).body(hiposService.editMail(userName));
    }
    @RequestMapping(value = "/getPaginatedMailList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getPaginatedMailList() {
        return ResponseEntity.status(200).body(hiposService.getMailList());
    }

    @RequestMapping(value = "/getstateMaster", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getstateMaster(@RequestParam(value = "countryName", required = false) String countryName
                                                   ){
        return ResponseEntity.status(200).body(hiposService.getcountrybasedList(countryName));
    }

    @RequestMapping(value = "/generateEnquiryNo", method = RequestMethod.POST,
            produces = "text/plain")
    public ResponseEntity generateEnquiryNo() {
        String abc = hiposService.generateEnquiryNo();
        return ResponseEntity.status(200).body(abc);
    }
    @RequestMapping(value = "/CheckUrlAvailability", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity CheckUrlAvailability(@RequestParam(value = "slug", required = false) String slug)throws Exception{
        return ResponseEntity.status(200).body(hiposService.CheckUrlAvailability(slug));
    }
    @RequestMapping(value = "/getcityMaster", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getcityMaster(@RequestParam(value = "StateId", required = false) String state
    ){
        return ResponseEntity.status(200).body(hiposService.getcitybasedlist(state));
    }

    @RequestMapping(value = "/saveCity",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity saveCity(@RequestBody CityPojo cityPojo){
        return ResponseEntity.status(200).body(hiposService.saveCity(cityPojo));
    }
    @RequestMapping(value = "/saveCallStatus",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity saveCallStatus(@RequestBody CallStatusMasterPojo callStatusMasterPojo){
        return ResponseEntity.status(200).body(hiposService.saveCallStatus(callStatusMasterPojo));
    }
    @RequestMapping(value = "/getUserObject",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity getUserObject(@RequestAttribute(value = "userName")String name){
        return ResponseEntity.status(200).body(hiposService.getUserObject(name));
    }
    @RequestMapping(value = "/assignToUser",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity assignToUser(@RequestParam(value = "assignedUser")String assignedUser,@RequestParam(value = "id")Long id){
        return ResponseEntity.status(200).body(hiposService.assignToUser(assignedUser,id));
    }
    @RequestMapping(value = "/getCityList",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity getCityList(){
        return ResponseEntity.status(200).body(hiposService.getCityList());
    }

    @RequestMapping(value = "/getTypeOfEnquiryList",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity getTypeOfEnquiryList(){
        return ResponseEntity.status(200).body(hiposService.getTypeOfEnquiryList());
    }
    @RequestMapping(value = "/getServiceTypeList",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity getServiceTypeList(@RequestParam(value = "type",required = false)String type){
        return ResponseEntity.status(200).body(hiposService.getServiceTypeList(type));
    }

    @RequestMapping(value = "/getAllServiceTypeList",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity getAllServiceTypeList(){
        return ResponseEntity.status(200).body(hiposService.getAllServiceTypeList());
    }
    @RequestMapping(value = "/saveEnquirySource", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveEnquirySource(@RequestBody EnqSourcePojo enqSourcePojo) {
        return ResponseEntity.status(200).body(hiposService.saveEnquirySource(enqSourcePojo));
    }
    @RequestMapping(value = "/getenqSourceList",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity getenqSourceList(@RequestParam(value="status",required = false)String status){
        return ResponseEntity.status(200).body(hiposService.getenqSourceList(status));
    }
    @RequestMapping(value = "/saveServiceLocation", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveServiceLocation(@RequestBody ServiceLocationPojo serviceLocationPojo) {
        return ResponseEntity.status(200).body(hiposService.saveServiceLocation(serviceLocationPojo));
    }
    @RequestMapping(value = "/getServiceLocationList",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity getServiceLocationList(@RequestParam(value="status",required = false)String status){
        return ResponseEntity.status(200).body(hiposService.getServiceLocationList(status));
    }
  @RequestMapping(value = "/getUserRoleList",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity getUserRoleList(){
        return ResponseEntity.status(200).body(hiposService.getUserRoleList());
    }


    @RequestMapping(value = "/deleteCity", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity deleteCity(@RequestBody CityPojo details) {
        return ResponseEntity.status(200).body(hiposService.deleteCity(details));
    }
    @RequestMapping(value = "/getpaginatedcountry", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getpaginatedcountry(@RequestParam(value = "type", required = false) String type,@RequestParam(value = "searchText", required = false) String searchText,
                                              @RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(hiposService.getcountrypagelist( type,basePojo, searchText));
    }
    @RequestMapping(value = "/getpaginatedSupplier", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getpaginatedSupplier(@RequestParam(value = "type", required = false) String type,@RequestParam(value = "searchText", required = false) String searchText,
                                              @RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(hiposService.getpaginatedSupplier( type,basePojo, searchText));
    }
    @RequestMapping(value = "/getpaginatedServiceType", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getpaginatedServiceType(@RequestParam(value = "type", required = false) String type,@RequestParam(value = "searchText", required = false) String searchText,
                                              @RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(hiposService.getpaginatedServiceType( type,basePojo, searchText));
    }
//    @RequestMapping(value = "/getpaginatedPopup", method = RequestMethod.POST, produces = "application/json")
//    public ResponseEntity getpaginatedPopup(@RequestParam(value = "type", required = false) String type,@RequestParam(value = "searchText", required = false) String searchText,
//                                              @RequestBody BasePojo basePojo) {
//        return ResponseEntity.status(200).body(hiposService.getpaginatedPopup( type,basePojo, searchText));
//    }
    @RequestMapping(value = "/getpaginatedTypeOfEnquiry", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getpaginatedTypeOfEnquiry(@RequestParam(value = "type", required = false) String type,@RequestParam(value = "searchText", required = false) String searchText,
                                              @RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(hiposService.getpaginatedTypeOfEnquiry( type,basePojo, searchText));
    }


    @RequestMapping(value = "/deleteCountry", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity deleteCountry(@RequestBody CountryPojo details) {
        return ResponseEntity.status(200).body(hiposService.deleteCountry(details));
    }



    @RequestMapping(value = "/saveState",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity saveState(@RequestBody StatePojo statePojo){
        return ResponseEntity.status(200).body(hiposService.saveState(statePojo));
    }
    @RequestMapping(value = "/saveCurrency",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity saveCurrency(@RequestBody CurrencyPojo currencyPojo){
        return ResponseEntity.status(200).body(hiposService.saveCurrency(currencyPojo));
    }
    @RequestMapping(value = "/getStateList",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity getStateList(){
        return ResponseEntity.status(200).body(hiposService.getStateList());
    }
    @RequestMapping(value = "/getCurrencyList",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity getCurrencyList(){
        return ResponseEntity.status(200).body(hiposService.getCurrencyList());
    }

    @RequestMapping(value = "/deleteState", method = RequestMethod.POST, produces = "application/json")
    public void deleteState(@RequestParam(value = "stateId", required = false) Long id)
    {
        hiposService.deleteState(id);
    }

    @RequestMapping(value = "/getPaginatedState", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getPaginatedState(@RequestParam(value = "type", required = false) String type,
                                            @RequestParam(value = "searchText", required = false) String searchText,
                                            @RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(hiposService.getPaginatedState(type, basePojo, searchText));
    }
    @RequestMapping(value = "/getPaginationCurrencyList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getPaginationCurrencyList(@RequestParam(value = "type", required = false) String type,
                                            @RequestParam(value = "searchText", required = false) String searchText,
                                            @RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(hiposService.getPaginationCurrencyList(type, basePojo, searchText));
    }
    @RequestMapping(value = "/webClick", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity webClick(@RequestParam(value = "phoneNumber", required = false) String phone) {
        return ResponseEntity.status(200).body(hiposService.webClick(phone));
    }
    @RequestMapping(value = "/getCallDetails", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getCallDetails(@RequestBody CallDetailsPojo callDetailsPojo) {
        return ResponseEntity.status(200).body(hiposService.getCallDetails(callDetailsPojo));
    }

    @RequestMapping(value = "/stateImportSave" ,method = RequestMethod.POST)
    public ResponseEntity stateImportSave(@RequestParam("myFile") MultipartFile uploadfiles) throws Exception {
        System.out.println(uploadfiles.getOriginalFilename());
        try {
            XSSFWorkbook workbook = new XSSFWorkbook(uploadfiles.getInputStream());
            XSSFSheet sheet = workbook.getSheetAt(0);
            for (int i = 1; i < sheet.getLastRowNum() + 1; i++) {
                org.apache.poi.ss.usermodel.Row row = sheet.getRow(i);
                if(row==null)
                    break;
                if(row!=null) {
                    StatePojo statePojo = new StatePojo();
                    String country = row.getCell(0).toString();
                    String state = row.getCell(1).toString();
                    String status = row.getCell(2).toString();
//                    statePojo.setCountryId(country);
                    statePojo.setStateName(state);
                    statePojo.setStatus(status==null?null:status.toString());
                    saveState(statePojo);
                }
            }
        }catch (Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity(HttpStatus.OK);
    }
    @RequestMapping(value = "/getCountryList",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity getCountryList(){
        return ResponseEntity.status(200).body(hiposService.getCountryList());
    }
    @RequestMapping(value = "/getCreatePageList",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity getCreatePageList(){
        return ResponseEntity.status(200).body(hiposService.getCreatePageList());
    }
    @RequestMapping(value = "/getCreatePageL",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity getCreatePageL(){
        return ResponseEntity.status(200).body(hiposService.getCreatePageL());
    }
    @RequestMapping(value = "/getModule",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity getModule(){
        return ResponseEntity.status(200).body(hiposService.getModule());
    }
    @RequestMapping(value = "/getPopupDetails",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity getPopupDetails(@RequestParam(value = "popup")String popup){
        return ResponseEntity.status(200).body(hiposService.getPopupDetails(popup));
    }
    @RequestMapping(value = "/getCreatePageListBasedOnModule",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity getCreatePageListBasedOnModule(@RequestParam(value = "module")String module){
        return ResponseEntity.status(200).body(hiposService.getCreatePageListBasedOnModule(module));
    }
    @RequestMapping(value = "/getFieldsBasedOnModule",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity getFieldsBasedOnModule(@RequestParam(value = "module",required = false)String name){
        return ResponseEntity.status(200).body(hiposService.getFieldsBasedOnModule(name));
    }
    @RequestMapping(value = "/getForeignkeyvalues",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity getForeignkeyvalues(@RequestParam(value = "moduleName",required = false)String moduleName,
                                              @RequestParam(value = "feildName",required = false)String feildName)throws Exception{
        return ResponseEntity.status(200).body(hiposService.getForeignkeyvalues(moduleName,feildName));
    }
    @RequestMapping(value = "/editEnquiry",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity editEnquiry(@RequestParam(value = "id")Long id){
        return ResponseEntity.status(200).body(hiposService.editEnquiry(id));
    }
    @RequestMapping(value = "/editCreatePage",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity editCreatePage(@RequestParam(value = "id")Long id){
        return ResponseEntity.status(200).body(hiposService.editCreatePage(id));
    }
    @RequestMapping(value = "/editFormPage",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity editFormPage(@RequestParam(value = "module")String module,@RequestParam(value = "id")Long id) throws Exception{
        return ResponseEntity.status(200).body(hiposService.editFormPage(module,id));
    }
    @RequestMapping(value = "/AddCallEnquiry",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity AddCallEnquiry(@RequestParam(value = "id")Long id){
        return ResponseEntity.status(200).body(hiposService.AddCallEnquiry(id));
    }
    @RequestMapping(value = "/getFormList",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity getFormList(@RequestParam(value = "module")String module)throws Exception{
        return ResponseEntity.status(200).body(hiposService.getFormList(module));
    }
    @RequestMapping(value = "/getEnquiryFormList",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity getEnquiryFormList(@RequestAttribute(value = "userName")String name){
        return ResponseEntity.status(200).body(hiposService.getEnquiryFormList(name));
    }
    @RequestMapping(value = "/saveServiceDetails", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveServiceDetails(@RequestBody ServicePojo servicePojo) {
        Service service = hiposService.saveServiceDetails(servicePojo);
        return ResponseEntity.status(200).body(service);
    }
    @RequestMapping(value="/saveAgency", method=RequestMethod.POST,consumes ="application/json",produces="application/json")
    public ResponseEntity saveAgency(@RequestBody AgencyPojo agency)
    {
        return ResponseEntity.status(200).body(hiposService.savenewAgency(agency));
    }
    @RequestMapping(value = "/getAgencyList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getAgencyList() {
        return ResponseEntity.status(200).body(hiposService.getAgencyList());
    }
    @RequestMapping(value = "/getCallStatusList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getCallStatusList() {
        return ResponseEntity.status(200).body(hiposService.getCallStatusList());
    }
    @RequestMapping(value = "/getUserList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getUserList(@RequestParam(value = "searchText", required = false) String searchText) {
        return ResponseEntity.status(200).body(hiposService.getUserList(searchText));
    }
    @RequestMapping(value = "/getUserAssignedList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getUserAssignedList(@RequestAttribute(value = "userName", required = false) String user) {
        return ResponseEntity.status(200).body(hiposService.getUserAssignedList(user));
    }

    @RequestMapping(value = "/getUserListBasedOnParent", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getUserListBasedOnParent(@RequestAttribute(value = "userName") String userName) {
        return ResponseEntity.status(200).body(hiposService.getUserListBasedOnParent(userName));
    }


    @RequestMapping(value = "/getServiceList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getServiceList(@RequestParam(value = "searchText", required = false) String searchText) {
        return ResponseEntity.status(200).body(hiposService.getServiceList(searchText));
    }
    @RequestMapping(value = "/getDocumentList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getDocumentList(@RequestParam(value = "searchText", required = false) String searchText) {
        return ResponseEntity.status(200).body(hiposService.getDocumentList(searchText));
    }



    @RequestMapping(value = "/saveUser",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity saveUser(@RequestBody UserPojo userPojo){
        return ResponseEntity.status(200).body(hiposService.saveUser(userPojo));
    }

    @RequestMapping(value = "/userValidate", method = RequestMethod.POST,consumes = "application/json", produces = "application/json")
    public ResponseEntity userValidate(@RequestBody UserPojo sassUserPojo)  {
        return ResponseEntity.status(200).body(hiposService.userValidate(sassUserPojo));
    }
    @RequestMapping(value = "/saveGeneral", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity saveGeneral(@RequestBody SettingsPojo settingsPojo) throws Exception {
        GeneralSettings master = null;
        master = hiposService.SaveGeneralSettings(settingsPojo);
        return ResponseEntity.status(200).body(master);
    }
    @RequestMapping(value = "/getGeneralSettingsDetailsList", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity getGeneralSettingsDetailsList() {
        return ResponseEntity.status(200).body(hiposService.getGeneralSettingsDetailsList());
    }


    @RequestMapping(value = "/getvarietyList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getvarietyList()throws Exception {
        return ResponseEntity.status(200).body(hiposService.getvarietyList());
    }
    @RequestMapping(value = "/getTypeList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getTypeList()throws Exception {
        return ResponseEntity.status(200).body(hiposService.getTypeList());
    }
    @RequestMapping(value = "/getSubTypeList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getSubTypeList(@RequestParam(value = "type")String type)throws Exception {
        return ResponseEntity.status(200).body(hiposService.getSubTypeList(type));
    }

    @RequestMapping(value = "/getpaginatedcity", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getpaginatedcity(@RequestParam(value = "type", required = false) String type,
                                       @RequestParam(value = "searchText", required = false) String searchText,
                                       @RequestBody BasePojo basePojo) {
    return ResponseEntity.status(200).body(hiposService.getpaginatedcitylist(type, basePojo, searchText));
    }
@RequestMapping(value = "/getPaginatedUserList", method = RequestMethod.POST, produces = "application/json")
public ResponseEntity getPaginatedUserList(@RequestParam(value = "type", required = false) String type,
                                       @RequestParam(value = "searchText", required = false) String searchText,
                                       @RequestBody BasePojo basePojo,@RequestAttribute(value = "userName")String name) {
    return ResponseEntity.status(200).body(hiposService.getPaginatedUserList(type, basePojo, searchText,name));
}
    @RequestMapping(value = "/CategoryBasedOnService", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity CategoryBasedOnService(@RequestParam(value = "categoryId", required = false) String categoryId) {
        return ResponseEntity.status(200).body(hiposService.CategoryBasedOnService(categoryId));
    }
    @RequestMapping(value = "/getCountryState", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getCountryState(@RequestParam(value = "countryid", required = false) Long countryName) {
        return ResponseEntity.status(200).body(hiposService.getCountryState(countryName));
    }

    @RequestMapping(value = "/getStateCity", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getStateCity(@RequestParam(value = "stateid", required = false) Long stateId) {
        return ResponseEntity.status(200).body(hiposService.getStateCity(stateId));
    }
    @RequestMapping(value = "/generateAGENNo", method = RequestMethod.POST,
            produces = "text/plain")
    public ResponseEntity generateAGENNo() {
        String abc = hiposService.generateAGENNo();
        return ResponseEntity.status(200).body(abc);
    }

    @RequestMapping(value = "/saveRole",method = RequestMethod.POST,consumes ="application/json")
    public ResponseEntity saveUserAccountSetup(@RequestBody UserRolePojo userRolePojo)throws Exception {
        return ResponseEntity.status(200).body(hiposService.createSaveUserAccountSetupDetails(userRolePojo));
    }
    @RequestMapping(value = "/getPaginatedUserRoleList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getPaginatedUserRoleList(@RequestParam(value = "type") String type,
                                                    @RequestParam(value = "searchText") String searchText,
                                                    @RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(hiposService.getPaginatedUserRoleList(type, basePojo, searchText));
    }
    @RequestMapping(value = "/saveUserAccessRights",method = RequestMethod.POST,consumes ="application/json")
    public ResponseEntity saveUserAccessRights(@RequestBody UserAccessRightsDTO savePermission,@RequestParam(value = "roleId")Long id){
        UserAccessRightsDTO camDTO = hiposService.createSaveUserAccessRights(savePermission,id);
        return ResponseEntity.status(200).body(camDTO);
    }


    @RequestMapping(value = "/getEditUserAccessRights",method = RequestMethod.POST,produces="application/json")
        public ResponseEntity getEditUserAccessRights(@RequestParam(value = "roleId") Long id) {
        UserRole userAccObj= hiposService.getUserAccountSetupObj(id);
        return ResponseEntity.status(200).body(hiposService.retrieveEditUserAccessRightsByNameOrCode(id));
    }


    @RequestMapping(value = "/saveOffer", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity saveOffer(@RequestBody DiscountPojo discountPojo) {
        return ResponseEntity.status(200).body(hiposService.saveOffer(discountPojo));
    }

//    @RequestMapping(value = "/sendsms", method = RequestMethod.POST, produces = "application/json")
//    public ResponseEntity sendsms(@RequestParam(value = "contact") String contact,
//                                  @RequestParam(value="appDate")String appDate,
//                                  @RequestParam(value="rName")String rName,
//                                  @RequestParam(value="appTime")String appTime,
//                                  @RequestParam(value="appUser")String appUser)throws Exception {
//        return ResponseEntity.status(200).body(hiposService.sendsms(contact,appDate,appTime,appUser));
//    }
    @RequestMapping(value = "/getSMSList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getSMSList() {
        return ResponseEntity.status(200).body(hiposService.getSmsServerList());
    }
    @RequestMapping(value = "/saveSMSDetails", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveSMSDetails(@RequestBody SmsServerPojo smsServerPojo) {
        return ResponseEntity.status(200).body(hiposService.saveSMSDetails(smsServerPojo));
    }
    @RequestMapping(value = "/editSmsDetails", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity editSmsDetails() {
        return ResponseEntity.status(200).body(hiposService.editSMSDetails());
    }

    @RequestMapping(value = "/deleteSMSDetails", method = RequestMethod.POST, produces = "application/json")
    public void deleteSMSDetails(@RequestParam(value = "id", required = false)Long id) {
        hiposService.deleteSMSDetails(id);

    }

    @RequestMapping(value = "/getcuisines", method = RequestMethod.GET, produces = "application/json")
    public ResponseEntity getcuisines()  throws  Exception{
        return ResponseEntity.status(200).body(hiposService.getcuisines());
    }
    @RequestMapping(value = "/getClientServiceList", method = RequestMethod.GET, produces = "application/json")
    public ResponseEntity getClientServiceList()  throws  Exception{
        return ResponseEntity.status(200).body(hiposService.getClientServiceList());
    }
    @RequestMapping(value = "/getOrderFacilityList", method = RequestMethod.GET, produces = "application/json")
    public ResponseEntity getOrderFacilityList()  throws  Exception{
        return ResponseEntity.status(200).body(hiposService.getOrderFacilityList());
    }
    @RequestMapping(value = "/getcountrywebList", method = RequestMethod.GET, produces = "application/json")
    public ResponseEntity getcountrywebList()  throws  Exception{
        return ResponseEntity.status(200).body(hiposService.getcountrywebList());
    }
    @RequestMapping(value = "/getStatewebList", method = RequestMethod.GET, produces = "application/json")
    public ResponseEntity getStatewebList(@RequestParam(value="countryid")String countryId)  throws  Exception{
        return ResponseEntity.status(200).body(hiposService.getStatewebList(countryId));
    }
    @RequestMapping(value = "/getCitywebList", method = RequestMethod.GET, produces = "application/json")
    public ResponseEntity getCitywebList(@RequestParam(value="stateid")String stateId)  throws  Exception{
        return ResponseEntity.status(200).body(hiposService.getCitywebList(stateId));
    }
  @RequestMapping(value = "/getLocationwebList", method = RequestMethod.GET, produces = "application/json")
    public ResponseEntity getLocationwebList(@RequestParam(value="cityid")String cityId)  throws  Exception{
        return ResponseEntity.status(200).body(hiposService.getLocationwebList(cityId));
    }
    @RequestMapping(value = "/getDiscountwebList", method = RequestMethod.GET, produces = "application/json")
    public ResponseEntity getDiscountwebList()  throws  Exception{
        return ResponseEntity.status(200).body(hiposService.getDiscountwebList());
    }
    @RequestMapping(value = "/getRestypewebList", method = RequestMethod.GET, produces = "application/json")
    public ResponseEntity getRestypewebList()  throws  Exception{
        return ResponseEntity.status(200).body(hiposService.getRestypewebList());
    }
    @RequestMapping(value = "/gettagswebList", method = RequestMethod.GET, produces = "application/json")
    public ResponseEntity gettagswebList()  throws  Exception{
        return ResponseEntity.status(200).body(hiposService.gettagswebList());
    }



    @PostMapping(value = "/savedocument")
    public ResponseEntity savedocument(MultipartHttpServletRequest form)throws Exception{
        String details=form.getParameter("details");
        Gson gson=new Gson();
        Type type=new TypeToken<SchDocumentPojo>(){}.getType();
        SchDocumentPojo documentPojo=gson.fromJson(details,type);
        StringBuilder sb = new StringBuilder();
        List<MultipartFile> m=form.getFiles("files");
        List<String> fileList=new ArrayList<>();
        for (MultipartFile file : m) {
            String fileName = FileSystemOperations.getImagesDirItem() + File.separator + documentPojo.getDocumentName();
            File f=new File(fileName);
            f.mkdir();
            String extension=FilenameUtils.getExtension(file.getOriginalFilename());
            fileName=fileName+ File.separator+file.getOriginalFilename()+"."+extension;
            JSONObject employeeDetails = new JSONObject();
            employeeDetails.put("file",fileName);
            if (file.isEmpty()) {
                continue;
            }
            byte[] bytes = file.getBytes();
            Path path = Paths.get(fileName);
            Files.write(path, bytes);
            sb.append(fileName).append(", ");
            fileList.add(fileName);
        }
        documentPojo.setFile(gson.toJson(fileList));
        return ResponseEntity.status(200).body(hiposService.savedocument(documentPojo));
    }


    @RequestMapping(value = "/getAllCategoryList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getAllCategoryList(@RequestParam(value = "restCode", required = false) String restCode,
                                             @RequestParam(value = "restConnectId", required = false) String restConnectId)throws Exception {
        return ResponseEntity.status(200).body(hiposService.getAllCategoryList(restCode,restConnectId));
    }
    @RequestMapping(value = "/restLogin", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity restLogin(@RequestParam(value = "email", required = false) String email,
                                   @RequestParam(value = "contact", required = false) String contact)throws Exception {
        return ResponseEntity.status(200).body(hiposService.restLogin(email,contact));
    }
    @RequestMapping(value = "/getAllItemList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getAllItemList(@RequestParam(value = "searchText", required = false) String searchText,
                                         @RequestParam(value = "restCode", required = false) String restCode,
                                         @RequestParam(value = "restConnectId", required = false) String restConnectId)throws Exception {
        return ResponseEntity.status(200).body(hiposService.getAllItemList(searchText,restCode,restConnectId));
    }
    @RequestMapping(value = "/getAllShiftList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getAllShiftList(@RequestParam(value = "restCode", required = false) String restCode,
                                          @RequestParam(value = "restConnectId", required = false) String restConnectId)throws Exception {
        return ResponseEntity.status(200).body(hiposService.getAllShiftList(restCode,restConnectId));
    }
    @RequestMapping(value = "/saveList",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity saveList(@RequestBody ItemCategoryPojo categoryPojo,
                                   @RequestParam(value = "restCode", required = false) String restCode,
                                   @RequestParam(value = "restConnectId", required = false) String restConnectId)throws Exception{
        return ResponseEntity.status(200).body(hiposService.saveList(categoryPojo,restCode,restConnectId));
    }

    @RequestMapping(value = "/saveMenuCategory", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveMenuCategory(@RequestBody CategoryPojo categoryPojo,
                                       @RequestParam(value = "restCode", required = false) String restCode,
                                       @RequestParam(value = "restConnectId", required = false) String restConnectId) throws Exception{
        return ResponseEntity.status(200).body(hiposService.saveMenuCategory(categoryPojo,restCode,restConnectId));
    }
    @RequestMapping(value = "/saveShiftTime", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveShiftTime(@RequestBody CategoryPojo categoryPojo,
                                       @RequestParam(value = "restCode", required = false) String restCode,
                                       @RequestParam(value = "restConnectId", required = false) String restConnectId) throws Exception{
        return ResponseEntity.status(200).body(hiposService.saveShiftTime(categoryPojo,restCode,restConnectId));
    }
}
