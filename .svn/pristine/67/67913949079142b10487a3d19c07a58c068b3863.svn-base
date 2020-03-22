package com.hyva.restopos.rest.Hiposservice;

import com.google.gson.Gson;
import com.hyva.restopos.rest.Mapper.HiposMapper;
import com.hyva.restopos.rest.entities.*;
import com.hyva.restopos.rest.entities.Currency;
import com.hyva.restopos.rest.pojo.*;
import com.hyva.restopos.rest.repository.*;
import com.hyva.restopos.util.DataBaseCreds;
import com.hyva.restopos.util.FileSystemOperations;
import com.hyva.restopos.util.ObjectMapperUtils;
import com.lowagie.text.*;
import com.lowagie.text.pdf.BaseFont;
import com.sun.org.apache.xpath.internal.operations.Bool;
import org.apache.log4j.Logger;
import org.hibernate.HibernateException;
import org.json.JSONObject;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.*;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;
import org.springframework.web.client.RestTemplate;

import java.io.*;
import java.lang.reflect.Type;
import java.net.URL;
import java.net.URLConnection;
import java.nio.file.*;
import java.nio.file.attribute.BasicFileAttributes;
import java.sql.*;
import java.util.*;
import java.util.List;
import java.util.stream.Collectors;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

@Component
public class HiposService {
    private final Logger log = Logger.getLogger(getClass());

    @Autowired
    CountryRepository countryRepository;
    @Autowired
    SchDocumentRepository schDocumentRepository;
    @Autowired
    UserAccessRightsRepository userAccessRightsRepository;
    @Autowired
    SettingsRepository settingsRepository;
    @Autowired
    ServiceRepository serviceRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    StateRepository stateRepository;
    @Autowired
    CurrencyRepository currencyRepository;
    @Autowired
    SmsServerRepository smsServerRepository;
    @Autowired
    CallStatusRepository callStatusRepository;

    @Autowired
    CityRepository cityRepository;
   @Autowired
    UserRoleRepository userRoleRepository;
    @Autowired
    SchedulerService schedulerService;
    @Autowired
    MailRepository mailRepository;
    @Autowired
    SmsService smsService;
    @Autowired
    TypeOfEnquiryRepository typeOfEnquiryRepository;
    @Autowired
    EnqSourceRepository enqSourceRepository;
    @Autowired
    ServiceLocationRepository serviceLocationRepository;
    @Autowired
    EnquiryFormRepository enquiryFormRepository;
    @Autowired
    EnquiryFormDetailsRepository enquiryFormDetailsRepository;
    @Autowired
    SupplierRepository supplierRepository;
    @Autowired
    AgencyRepository agencyRepository;
    @Autowired
    CallDetailsRepository callDetailsRepository;
    @Autowired
    ServiceTypeRepository serviceTypeRepository;
    @Autowired
    CreatePageRepository createPageRepository;
    @Autowired
    DataBaseCreds dataBaseCreds;
    @Autowired
    ModuleRepository moduleRepository;
    @Autowired
    PopupRepository popupRepository;
    @Autowired
            SubModuleRepository subModuleRepository;
//    @Autowired
//    SmsServerRepository smsServerRepository;

    int paginatedConstants = 10;

    public Country saveCountry(CountryPojo countryPojo){
        Country country = new Country();
        if (countryPojo.getCountryId() != null) {
            country = countryRepository.findAllByCountryNameAndCountryIdNotIn(countryPojo.getCountryName(), countryPojo.getCountryId());
        } else {
            country = countryRepository.findAllByCountryName(countryPojo.getCountryName());

        }
        if (country == null) {
            country = HiposMapper.MapPojoToEntity(countryPojo);
            countryRepository.save(country);
            return country;
        } else {
            return null;
        }
    }

    public Popup savePopup(PopupPojo popupPojo){
        Popup popup = new Popup();
        if (popupPojo.getId()!=null){
            popup = popupRepository.findAllByPopupNameAndIdNotIn(popupPojo.getPopupName(),popupPojo.getId());
        }else {
            popup = popupRepository.findAllByPopupName(popupPojo.getPopupName());
        }
        if (popup==null){
            popup = HiposMapper.MapPojoToEntity(popupPojo);
            popupRepository.save(popup);
            return popup;
        }else {
            return null;
        }
    }
    public CreatePage saveCreatePage(CreatePagePojo createPagePojo) throws Exception{
        CreatePage createPage = new CreatePage();
//        List<CreatePage> createPageList = new ArrayList<>();
//        createPageList = createPageRepository.findAllByModuleNameAndSubmoduleNameNullAndPageNameNull(createPagePojo.getModuleName());
//        if(createPageList.size()>0){
//            createPageList = createPageRepository.findAllByModuleNameAndSubmoduleNameAndPageNameNull(createPagePojo.getModuleName(),createPagePojo.getSubmoduleName())
//        }
        if(StringUtils.isEmpty(createPagePojo.getModuleName())){
            Module module = moduleRepository.findAllByModuleName(createPagePojo.getPageName());
            ModulePojo modulePojo = new ModulePojo();
            if (module==null){
                module = new Module();
                module.setModuleName(createPagePojo.getPageName());
                module.setStatus("Active");
                moduleRepository.save(module);
                createPagePojo.setModuleName(module.getModuleName());
                createPagePojo.setPageName(null);
            }
        }else if(!StringUtils.isEmpty(createPagePojo.getModuleName())&&StringUtils.isEmpty(createPagePojo.getSubmoduleName())){
            SubModule subModule = subModuleRepository.findAllByModuleNameAndSubModuleName(createPagePojo.getModuleName(),createPagePojo.getPageName());
            if (subModule==null){
                subModule = new SubModule();
                subModule.setModuleName(createPagePojo.getModuleName());
                subModule.setSubModuleName(createPagePojo.getPageName());
                subModule.setStatus("Active");
                subModuleRepository.save(subModule);
                createPagePojo.setModuleName(subModule.getModuleName());
                createPagePojo.setSubmoduleName(subModule.getSubModuleName());
                createPagePojo.setPageName(null);
            }
        }
        if(createPagePojo.getModuleName()!=null&&createPagePojo.getSubmoduleName()==null&&createPagePojo.getPageName()==null){
            if (createPagePojo.getId() != null) {
            createPage = createPageRepository.findAllByModuleNameAndSubmoduleNameNotNullAndPageNameNotNullAndIdNotIn(createPagePojo.getModuleName(), createPagePojo.getId());
        } else {
            createPage = createPageRepository.findAllByModuleNameAndSubmoduleNameNotNullAndPageNameNotNull(createPagePojo.getModuleName());
        }
        }else if(createPagePojo.getModuleName()!=null&&createPagePojo.getSubmoduleName()!=null&&createPagePojo.getPageName()==null){
            if (createPagePojo.getId() != null) {
                createPage = createPageRepository.findAllByModuleNameAndSubmoduleNameAndPageNameNotNullAndIdNotIn(createPagePojo.getModuleName(),createPagePojo.getSubmoduleName(),createPagePojo.getId());
            } else {
                createPage = createPageRepository.findAllByModuleNameAndSubmoduleNameAndPageNameNotNull(createPagePojo.getModuleName(),createPagePojo.getSubmoduleName());
            }
        }else {
            if (createPagePojo.getId() != null) {
                createPage = createPageRepository.findAllByModuleNameAndSubmoduleNameAndPageNameAndIdNotIn(createPagePojo.getModuleName(),createPagePojo.getSubmoduleName(),createPagePojo.getPageName(),createPagePojo.getId());
            } else {
                createPage = createPageRepository.findAllByModuleNameAndSubmoduleNameAndPageName(createPagePojo.getModuleName(),createPagePojo.getSubmoduleName(),createPagePojo.getPageName());
            }
        }
        if (createPage == null) {
            createPage = HiposMapper.MapPojoToEntity(createPagePojo);
            createPageRepository.save(createPage);
            Class.forName("com.mysql.jdbc.Driver");
            String db_url = dataBaseCreds.getDB_URL();
            String database = db_url.substring(db_url.lastIndexOf("/") + 1, db_url.indexOf("?"));
            Statement stmt = null;
            Connection con = DriverManager.getConnection(db_url,
                    dataBaseCreds.getDB_USERNAME(),
                    dataBaseCreds.getDB_PASSWORD());
            stmt = con.createStatement();
            String tableName = null;
            if(!StringUtils.isEmpty(createPagePojo.getModuleName())&&StringUtils.isEmpty(createPagePojo.getSubmoduleName())&&StringUtils.isEmpty(createPagePojo.getPageName())){
                tableName = createPagePojo.getModuleName();
            }else if(!StringUtils.isEmpty(createPagePojo.getModuleName())&&!StringUtils.isEmpty(createPagePojo.getSubmoduleName())&&StringUtils.isEmpty(createPagePojo.getPageName())){
                tableName = createPagePojo.getSubmoduleName();
            }else {
                tableName = createPagePojo.getPageName();
            }
            String createTable = "CREATE TABLE IF NOT EXISTS " + database + "." + tableName.replaceAll("[^a-zA-Z]+","") + " (" +
                    " id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY " + ") ";
            stmt.executeUpdate(createTable);
            List<Map<String,Object>>mapList = new ArrayList<>();
            Gson gson = new Gson();
            Type type = new TypeToken<List<Map<String,Object>>>(){}.getType();
            mapList = gson.fromJson(createPagePojo.getDetails(),type);
            for (Map<String,Object> objectMap:mapList) {
                if (objectMap.get("oldfield")!=null){
                    if (!StringUtils.pathEquals(objectMap.get("oldfield").toString(), objectMap.get("field").toString())) {
                        String alterColumn = " ALTER TABLE " + database + "." + tableName.replaceAll("[^a-zA-Z]+","") + " CHANGE COLUMN " + objectMap.get("oldfield") + "  " + objectMap.get("field") + " VARCHAR(255) DEFAULT NULL" + " ";
                        System.out.println(alterColumn);
                        stmt.executeUpdate(alterColumn);
                    }
            }
            }
            for (Map<String,Object> map:mapList) {
                String columnValue = map.get("field").toString();
                boolean columnExists = columnExist(con, tableName.replaceAll("[^a-zA-Z]+",""), map.get("field").toString());
                if(columnExists == false) {
                    if (columnValue.length() > 256) {
                        String createcolumn = "ALTER TABLE " + database + "." + tableName.replaceAll("[^a-zA-Z]+","") + " ADD COLUMN " + columnValue + " LONGTEXT " + " DEFAULT NULL " + " ";
                        createcolumn = createcolumn.substring(0, createcolumn.length() - 1);
                        createcolumn += "";
                        stmt.executeUpdate(createcolumn);
                    } else {
                        String createColumn = "ALTER TABLE " + database + "." + tableName.replaceAll("[^a-zA-Z]+","") + " ADD COLUMN " + columnValue + " VARCHAR(255) DEFAULT NULL" + " ";
                        createColumn = createColumn.substring(0, createColumn.length() - 1);
                        createColumn += "";
                        stmt.executeUpdate(createColumn);
                    }
                }else {
                    if (columnValue.length() > 256) {
                        String modifyColumn = "ALTER TABLE " + database + "." + tableName.replaceAll("[^a-zA-Z]+","") + " modify " + map.get("field").toString() + " LONGTEXT " + " DEFAULT NULL " + " ";
                        stmt.executeUpdate(modifyColumn);
                    }
                }
            }
            return createPage;
        } else {
            return null;
        }
    }
    public int saveFormData(String s,String tablename) throws Exception{
        List<Map<String,Object>> map = new ArrayList<>();
        Gson gson = new Gson();
        Type type = new TypeToken<List<Map<String,Object>>>(){}.getType();
        map = gson.fromJson(s,type);
        Class.forName("com.mysql.jdbc.Driver");
        String db_url = dataBaseCreds.getDB_URL();
        String database = db_url.substring(db_url.lastIndexOf("/") + 1, db_url.indexOf("?"));
        Statement stmt = null;
        String insertData = null;
        int i=0;
        int j=0;
        int k=0;
        Connection con = DriverManager.getConnection(db_url,
                dataBaseCreds.getDB_USERNAME(),
                dataBaseCreds.getDB_PASSWORD());
        stmt = con.createStatement();
        if(map.get(map.size()-1).containsKey("id")) {
            insertData = "UPDATE " + database + "." + tablename.replaceAll("[^a-zA-Z]+", "") + " SET ";
            for (Map<String, Object> objectMap : map) {
                if (!StringUtils.isEmpty(objectMap.get("values"))) {
                    if (i == 0) {
                        i = 1;
                        insertData = insertData + objectMap.get("field") + " = " +"'"+ objectMap.get("values") +"'";
                    }
                }
            }
            insertData = insertData + " WHERE id=" + String.format("%.0f",Double.valueOf(map.get(map.size()-1).get("id").toString()));
            System.out.println(insertData);
        }else {
            insertData = "INSERT INTO " + database + "." + tablename.replaceAll("[^a-zA-Z]+", "") + "(";
            for (Map<String, Object> map1 : map) {
                if (!StringUtils.isEmpty(map1.get("values"))) {
                    if (i == 0) {
                        i = 1;
                        insertData = insertData + map1.get("field");
                    } else {
                        insertData = insertData + "," + map1.get("field").toString();
                    }
                }
            }
            insertData = insertData + ")";
            insertData = insertData + "VALUES (";
            for (Map<String, Object> map2 : map) {
                if (!StringUtils.isEmpty(map2.get("values"))) {
                    if (j == 0) {
                        j = 1;
                        insertData = insertData + "'" + map2.get("values") + "'";
                    } else {
                        insertData = insertData + "," + "'" + map2.get("values") + "'";
                    }
                }
            }
            insertData = insertData + ")";
        }
        k = stmt.executeUpdate(insertData);
        System.out.println(insertData);
        System.out.println(k);
        return k;
    }
    public static boolean columnExist(Connection conn, String tableName, String columnName) throws Exception {
        boolean cExists = false;

        try (ResultSet rsColumns = conn.getMetaData().getColumns(null, null, tableName, columnName)) {
            while (rsColumns.next()) {
                String cName = rsColumns.getString("COLUMN_NAME");
                if (cName != null && cName.equals(columnName)) {
                    cExists = true;
                    break;
                }
            }
        }
        return cExists;
    }
    public Supplier saveSupplier(SupplierPojo supplierPojo){
        Supplier supplier = new Supplier();
        if (supplierPojo.getId() != null) {
            supplier = supplierRepository.findAllBySupplierNameAndIdNotIn(supplierPojo.getSupplierName(), supplierPojo.getId());
        } else {
            supplier = supplierRepository.findAllBySupplierName(supplierPojo.getSupplierName());
        }
        if (supplier == null) {
            supplier = HiposMapper.MapPojoToEntity(supplierPojo);
            supplierRepository.save(supplier);
            return supplier;
        } else {
            return null;
        }
    }


    public EnquiryForm getEnquiryListBasedOnPhoneNum(String phone,String email){
        EnquiryForm enquiryForm = enquiryFormRepository.findAllByPhoneNumberOrEmail(phone,email);
        return enquiryForm;
    }
    public ServiceType saveServiceType(ServiceTypePojo serviceTypePojo) {
        ServiceType serviceType = new ServiceType();
        if (serviceTypePojo.getId() != null) {
            serviceType = serviceTypeRepository.findAllByTypeOfEnquiryAndServiceTypeAndIdNotIn(serviceTypePojo.getTypeOfEnquiry(), serviceTypePojo.getServiceType(), serviceTypePojo.getId());
        } else {
            serviceType = serviceTypeRepository.findAllByTypeOfEnquiryAndServiceType(serviceTypePojo.getTypeOfEnquiry(), serviceTypePojo.getServiceType());
        }
        if (serviceType == null) {
            serviceType = HiposMapper.MapPojoToEntity(serviceTypePojo);
            serviceTypeRepository.save(serviceType);
            return serviceType;
        } else {
            return null;
        }
    }


    public List<ModulePojo> getModuleList(){
        List<Module> moduleList = new ArrayList<>();
        moduleList = moduleRepository.findAllByStatus("Active");
        List<ModulePojo> modulePojoList = ObjectMapperUtils.mapAll(moduleList,ModulePojo.class);
        return  modulePojoList;
    }

    public List<SubModulePojo> getSubModuleListBasedOnModule(String module){
        List<SubModule> subModuleList = subModuleRepository.findAllByModuleName(module);
        List<SubModulePojo> subModulePojoList = ObjectMapperUtils.mapAll(subModuleList,SubModulePojo.class);
        return subModulePojoList;
    }

    public UserRole savePermissions(Long id,String permissions){
        UserRole userRole = userRoleRepository.findAllByRoleId(id);
        userRole.setPermissions(permissions);
        userRoleRepository.save(userRole);
        return userRole;
    }
    public User saveUserPermissions(Long id,String permissions){
        User user = userRepository.findOne(id);
        user.setPermissions(permissions);
        userRepository.save(user);
        return user;
    }

    public Map<String,Boolean> getUserPermissions(Long id){
        User user = userRepository.findOne(id);
//        UserRole userRole = null;
//        if(user.getUserRole()!=null) {
//             userRole = userRoleRepository.findByRoleName(user.getUserRole());
//        }
        Map<String,Boolean> allUserPermMap = new LinkedHashMap<>();
        Type type = new TypeToken<Map<String,Boolean>>(){}.getType();
        Gson gson = new Gson();
        allUserPermMap = gson.fromJson(user.getPermissions(),type);
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
        for (Map.Entry<String,Boolean> entry:allCreatePageMap.entrySet()){
            if(allUserPermMap.containsKey(entry.getKey())){
                entry.setValue(allUserPermMap.get(entry.getKey()));
            }
        }
        return allCreatePageMap;
    }

    public Map<String,Boolean> getUserRolePermissions(Long id){
        UserRole userRole = userRoleRepository.findAllByRoleId(id);
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

        Map<String,Boolean> alluserRoleMap =new LinkedHashMap<>();
        Type type = new TypeToken<Map<String,Boolean>>(){}.getType();
        Gson gson = new Gson();
        alluserRoleMap = gson.fromJson(userRole.getPermissions(),type);
        for (Map.Entry<String,Boolean> entry:allCreatePageMap.entrySet()){
           if(alluserRoleMap.containsKey(entry.getKey())){
            entry.setValue(alluserRoleMap.get(entry.getKey()));
            }
        }
        return allCreatePageMap;
    }

    public Map<String,Object> getSubModuleBasedOnModule(String module,String type) {
        Map<String, Object> stringObjectMap = new HashMap<>();

        if (StringUtils.pathEquals(type, "menu")) {
            List<CreatePage> createPageList = createPageRepository.findAllByModuleNameAndSubmoduleNameNotNull(module);
            stringObjectMap.put("page", "submodule");
            stringObjectMap.put("data", createPageList);
            if (createPageList.size() == 0) {
                createPageList = createPageRepository.findAllByModuleNameAndPageNameNotNull(module);
                stringObjectMap.put("page", "page");
                stringObjectMap.put("data", createPageList);
                if (createPageList.size() == 0) {
                    createPageList = createPageRepository.findAllByModuleNameAndSubmoduleNameNullAndPageNameNull(module);
                    stringObjectMap.put("page", "module");
                    stringObjectMap.put("data", createPageList);
                    stringObjectMap.put("tableName", module);
                }
            }
        } else if (StringUtils.pathEquals(type, "submenu")) {
            List<CreatePage> createPageList = createPageRepository.findAllBySubmoduleNameAndPageNameNotNull(module);
            stringObjectMap.put("page", "page");
            stringObjectMap.put("data", createPageList);
            if (createPageList.size() == 0) {
                createPageList = createPageRepository.findAllBySubmoduleNameAndPageNameNull(module);
                stringObjectMap.put("page", "module");
                stringObjectMap.put("data", createPageList);
                stringObjectMap.put("tableName", module);
            }
        }
        return stringObjectMap;
    }
    public List<SubModulePojo> getSubModuleList(){
        List<SubModule> subModuleList = new ArrayList<>();
        subModuleList = subModuleRepository.findAllByStatus("Active");
        List<SubModulePojo> subModulePojoList = ObjectMapperUtils.mapAll(subModuleList,SubModulePojo.class);
//        for (SubModulePojo subModulePojo :subModulePojoList){
//            Module module  = moduleRepository.findAllById(Long.parseLong(subModulePojo.getModuleName()));
//            if(module!=null) {
//                subModulePojo.setModuleName(module.getModuleName());
//            }
//        }
        return  subModulePojoList;
    }
    public Module saveModule(ModulePojo modulePojo){
        Module module = new Module();
        if(modulePojo.getId()!=null){
            module = moduleRepository.findAllByModuleNameAndIdNotIn(modulePojo.getModuleName(),modulePojo.getId());
        }else {
            module = moduleRepository.findAllByModuleName(modulePojo.getModuleName());
        }
        if(module==null){
            module = HiposMapper.MapPojoToEntity(modulePojo);
            moduleRepository.save(module);
            return module;
        }else {
            return null;
        }
    }
    public SubModule saveSubModule(SubModulePojo subModulePojo){
        SubModule subModule = new SubModule();
        if(subModulePojo.getId()!=null){
            subModule = subModuleRepository.findAllByModuleNameAndSubModuleNameAndIdNotIn(subModulePojo.getModuleName(),subModulePojo.getSubModuleName(),subModulePojo.getId());
        }else {
            subModule = subModuleRepository.findAllByModuleNameAndSubModuleName(subModulePojo.getModuleName(),subModulePojo.getSubModuleName());
        }
        if(subModule==null){
            subModule = HiposMapper.MapPojoToEntity(subModulePojo);
            subModuleRepository.save(subModule);
            return subModule;
        }else {
            return null;
        }
    }

    public EnquiryForm saveEnquiryForm(EnquiryFormPojo enquiryFormPojo) throws Exception{
        EnquiryForm enquiryForm = new EnquiryForm();
        EnquiryFormDetails enquiryFormDetails  = new EnquiryFormDetails();
        if(enquiryFormPojo.getId()!=null){
            enquiryForm = enquiryFormRepository.findAllByFirstNameAndIdNotIn(enquiryFormPojo.getFirstName(),enquiryFormPojo.getId());
        }else {
            enquiryForm = enquiryFormRepository.findAllByFirstName(enquiryFormPojo.getFirstName());
        }
        if(enquiryForm==null) {
            enquiryForm = HiposMapper.MapPojoToEntity(enquiryFormPojo);
            enquiryFormRepository.save(enquiryForm);
          List<EnquiryFormDetails> enquiryFormDetailsList= enquiryFormDetailsRepository.findAllByEnquiryFormId(enquiryFormPojo.getId());
          if(enquiryFormDetailsList.size()>0){
              enquiryFormDetails = enquiryFormDetailsList.get(0);
          }
            enquiryFormDetails.setAddress1(enquiryFormPojo.getAddress1());
            enquiryFormDetails.setAddress2(enquiryFormPojo.getAddress2());
            enquiryFormDetails.setCallerLocation(enquiryFormPojo.getCallerLocation());
            enquiryFormDetails.setCountry(enquiryFormPojo.getCountry());
            enquiryFormDetails.setState(enquiryFormPojo.getState());
            enquiryFormDetails.setCity(enquiryFormPojo.getCity());
            enquiryFormDetails.setCallStatus(enquiryFormPojo.getCallStatus());
            enquiryFormDetails.setFirstName(enquiryFormPojo.getFirstName());
            enquiryFormDetails.setLastName(enquiryFormPojo.getLastName());
            enquiryFormDetails.setPhoneNumber(enquiryFormPojo.getPhoneNumber());
            enquiryFormDetails.setTypeOfEnquiry(enquiryFormPojo.getTypeOfEnquiry());
            enquiryFormDetails.setServiceType(enquiryFormPojo.getServiceType());
            enquiryFormDetails.setZipcode(enquiryFormPojo.getZipcode());
            enquiryFormDetails.setEmail(enquiryFormPojo.getEmail());
            enquiryFormDetails.setCallinfo(enquiryFormPojo.getCallinfo());
            enquiryFormDetails.setServiceTypeDetails(enquiryFormPojo.getServiceTypeDetails());
            enquiryFormDetails.setSpecialRequirements(enquiryFormPojo.getSpecialRequirements());
            enquiryFormDetails.setCallStatusDetails(enquiryFormPojo.getCallStatusDetails());
            enquiryFormDetails.setServiceLocation(enquiryFormPojo.getServiceLocation());
            enquiryFormDetails.setSourceOfEnquiry(enquiryFormPojo.getSourceOfEnquiry());
            enquiryFormDetails.setEnquiryNo(enquiryFormPojo.getEnquiryNo());
            enquiryFormDetails.setEnquiryDate(enquiryFormPojo.getEnquiryDate());
            enquiryFormDetails.setOthers(enquiryFormPojo.getOthers());
            enquiryFormDetails.setUser(enquiryFormPojo.getUser());
            if(enquiryFormPojo.getId()==null) {
                enquiryFormDetails.setAssignstatus("Assign");
            }
            enquiryFormDetails.setEnquiryForm(enquiryForm);
            enquiryFormDetailsRepository.save(enquiryFormDetails);
            Gson gson = new Gson();
            List<EnquiryFormPojo> enquiryFormPojoList = new ArrayList<>();
            Type type = new TypeToken<List<EnquiryFormPojo>>(){}.getType();
            enquiryFormPojoList = gson.fromJson(enquiryFormPojo.getPhoneNumber(),type);
            if(StringUtils.pathEquals(enquiryFormPojo.getType(),"save")){
                List<Map<String,Object>> mapList = new ArrayList<>();
                Type type1 = new TypeToken<List<Map<String,Object>>>(){}.getType();
                mapList = gson.fromJson(enquiryForm.getTypeOfEnquiry(),type1);
                Map<String,String>  map = new HashMap<>();
                Type type2 = new TypeToken<Map<String,String>>(){}.getType();
                for (Map<String,Object> m :mapList){
                    map = gson.fromJson(m.get("details").toString(),type2);
                    System.out.println(map);
                }
                for (EnquiryFormPojo enquiryFormPojo1:enquiryFormPojoList) {
                    sendsms(enquiryFormPojo1.getPhoneNumber(), enquiryForm.getEnquiryDate(), enquiryForm.getFirstName(),map.get("dateOfServicehv"));
                }
               List<Mail> emailServerMail = mailRepository.findAll();
                if (emailServerMail.size()>0) {
                    String toemail = enquiryFormPojo.getEmail();
                    String subject = "Welcome To Anthyesti";
                    String body = "Thank you for contacting Anthyesti Funeral Services Pvt. Ltd. Your order has been initiated for ambulance with the below services \n"+
                            "\n * Date Of Service : " + map.get("dateOfServicehv")+
                            "\n * Time Of Service : " + map.get("timeOfServicehv")+
                            "\n * Cost Of Service (INR) : " +map.get("costOfServicehv")+
                            "\n * Decoration cost : " +map.get("decorationCosthv")+
                            "\n * Funeral Helper cost: " +map.get("funeralHelperCosthv")+
                            "\n * PickUp Address :" +map.get("pickupAddresshv")+
                            "\n * Floor No: " +map.get("floorNohv")+
                            "\n * Service Lift Available  : " +map.get("serviceLifthv")+
                            "\n * Stopover Address : " +map.get("stopOverAddresshv")+
                            "\n * Destination Address: "+map.get("destinationAddresshv")+
                            "\n * Client  Name: "+map.get("clientfirstNamehv")+
                            "\n * Client Contact: "+map.get("clientphoneNumberhv")+
                            "\n * Assistance Name: "+map.get("assistanceDetailshv")+
                            "\n * Assistance Contact: "+map.get("assistanceContacthv")+
                            "\nPlease note additional charges of 200 will be levied after 1 hour of waiting."+
                            "\nCancellation charges 25% on total amount.";
                    MailService.sendMailWithAttachment(emailServerMail.get(0), toemail, emailServerMail.get(0).getUserName(), subject, body.toString(), "", null);
                }
            }
            return enquiryForm;
        }else {
            return null;
        }
    }
    public BasePojo getPaginatedEnquiry(String status, BasePojo basePojo, String searchText,String userName) {
        List<EnquiryForm> list = new ArrayList<>();
        basePojo.setPageSize(paginatedConstants);
        Sort sort = new Sort(new Sort.Order(Sort.Direction.DESC, "id"));
        if (basePojo.isLastPage() == true) {
            List<EnquiryForm> list1 = new ArrayList<>();
            if(StringUtils.pathEquals(userName,"admin")) {
                if (!org.apache.commons.lang3.StringUtils.isEmpty(searchText)) {
                    list1 = enquiryFormRepository.findAllByFirstNameContaining(searchText);
                } else {
                    list1 = enquiryFormRepository.findAllBy();
                }
            }else {
                if (!org.apache.commons.lang3.StringUtils.isEmpty(searchText)) {
                    list1 = enquiryFormRepository.findAllByFirstNameContainingAndUser(searchText,userName);
                } else {
                    list1 = enquiryFormRepository.findByUser(userName);
                }
            }
            int size = list1.size() % paginatedConstants;
            int pageNo = list1.size() / paginatedConstants;
            if (size != 0) {
                basePojo.setPageNo(pageNo);
            } else {
                basePojo.setPageNo(pageNo - 1);
            }
            sort = new Sort(new Sort.Order(Sort.Direction.DESC, "id"));
        }
        if (org.apache.commons.lang3.StringUtils.isEmpty(status)) {
            status = "Active";
        }
        EnquiryForm enquiryForm = new EnquiryForm();
        Pageable pageable = new PageRequest(basePojo.getPageNo(), basePojo.getPageSize(), sort);
        if (basePojo.isNextPage() == true || basePojo.isFirstPage() == true) {
            sort = new Sort(new Sort.Order(Sort.Direction.ASC, "id"));
        }
        if(StringUtils.pathEquals(userName,"admin")) {
            if (!org.apache.commons.lang3.StringUtils.isEmpty(searchText)) {
                enquiryForm = enquiryFormRepository.findFirstByFirstNameContaining(searchText, sort);
                list = enquiryFormRepository.findAllByFirstNameContaining(searchText, pageable);
            } else {
                enquiryForm = enquiryFormRepository.findFirstBy(sort);
                list = enquiryFormRepository.findAllBy(pageable);
            }
        }else {
            if (!org.apache.commons.lang3.StringUtils.isEmpty(searchText)) {
                enquiryForm = enquiryFormRepository.findFirstByFirstNameContainingAndUser(searchText,userName, sort);
                list = enquiryFormRepository.findAllByFirstNameContainingAndUser(searchText,userName, pageable);
            } else {
                enquiryForm = enquiryFormRepository.findFirstByUser(userName,sort);
                list = enquiryFormRepository.findAllByUser(userName,pageable);
            }
        }
        if (list.contains(enquiryForm)) {
            basePojo.setStatus(true);
        } else {
            basePojo.setStatus(false);
        }
        List<EnquiryFormPojo> PojoList = HiposMapper.mapEnquiryFormEntityToPojo(list);
        basePojo = calculatePagination(basePojo, PojoList.size());
        basePojo.setList(PojoList);
        return basePojo;
    }
    public BasePojo getPaginatedClients(String type, BasePojo basePojo, String searchText,String userName,String status) {
        List<EnquiryForm> list = new ArrayList<>();
        basePojo.setPageSize(paginatedConstants);
        Sort sort = new Sort(new Sort.Order(Sort.Direction.DESC, "id"));
        if (basePojo.isLastPage() == true) {
            List<EnquiryForm> list1 = new ArrayList<>();
            if(StringUtils.pathEquals(userName,"admin")) {
                if (!org.apache.commons.lang3.StringUtils.isEmpty(searchText)) {
                    list1 = enquiryFormRepository.findAllByFirstNameContaining(searchText);
                } else {
                    list1 = enquiryFormRepository.findAllByStatus(status);
                }
            }else {
                if (!org.apache.commons.lang3.StringUtils.isEmpty(searchText)) {
                    list1 = enquiryFormRepository.findAllByFirstNameContainingAndUserAndStatus(searchText,userName,status);
                } else {
                    list1 = enquiryFormRepository.findByUserAndStatus(userName,status);
                }
            }
            int size = list1.size() % paginatedConstants;
            int pageNo = list1.size() / paginatedConstants;
            if (size != 0) {
                basePojo.setPageNo(pageNo);
            } else {
                basePojo.setPageNo(pageNo - 1);
            }
            sort = new Sort(new Sort.Order(Sort.Direction.DESC, "id"));
        }
        EnquiryForm enquiryForm = new EnquiryForm();
        Pageable pageable = new PageRequest(basePojo.getPageNo(), basePojo.getPageSize(), sort);
        if (basePojo.isNextPage() == true || basePojo.isFirstPage() == true) {
            sort = new Sort(new Sort.Order(Sort.Direction.ASC, "id"));
        }
        if(StringUtils.pathEquals(userName,"admin")) {
            if (!org.apache.commons.lang3.StringUtils.isEmpty(searchText)) {
                enquiryForm = enquiryFormRepository.findFirstByFirstNameContainingAndStatus(searchText, status,sort);
                list = enquiryFormRepository.findAllByFirstNameContainingAndStatus(searchText,status, pageable);
            } else {
                enquiryForm = enquiryFormRepository.findFirstByStatus(status,sort);
                list = enquiryFormRepository.findAllByStatus(status,pageable);
            }
        }else {
            if (!org.apache.commons.lang3.StringUtils.isEmpty(searchText)) {
                enquiryForm = enquiryFormRepository.findFirstByFirstNameContainingAndUserAndStatus(searchText,userName, status,sort);
                list = enquiryFormRepository.findAllByFirstNameContainingAndUserAndStatus(searchText,userName, status,pageable);
            } else {
                enquiryForm = enquiryFormRepository.findFirstByUserAndStatus(userName,status,sort);
                list = enquiryFormRepository.findAllByUserAndStatus(userName,status,pageable);
            }
        }
        if (list.contains(enquiryForm)) {
            basePojo.setStatus(true);
        } else {
            basePojo.setStatus(false);
        }
        List<EnquiryFormPojo> PojoList = HiposMapper.mapEnquiryFormEntityToPojo(list);
        basePojo = calculatePagination(basePojo, PojoList.size());
        basePojo.setList(PojoList);
        return basePojo;
    }

    public EnquiryForm confirmEnquiry(Long id){
        EnquiryForm enquiryForm = enquiryFormRepository.findAllById(id);
        enquiryForm.setStatus("Success");
        enquiryFormRepository.save(enquiryForm);
        return enquiryForm;
    }

    public EnquiryFormDetails saveEnqFormAddCall(EnquiryFormPojo enquiryFormPojo){
        EnquiryFormDetails enquiryFormDetails = new EnquiryFormDetails();
        EnquiryForm enquiryForm  = enquiryFormRepository.findAllById(enquiryFormPojo.getId());
            enquiryFormDetails.setAddress1(enquiryFormPojo.getAddress1());
            enquiryFormDetails.setAddress2(enquiryFormPojo.getAddress2());
            enquiryFormDetails.setCallerLocation(enquiryFormPojo.getCallerLocation());
            enquiryFormDetails.setCountry(enquiryFormPojo.getCountry());
            enquiryFormDetails.setState(enquiryFormPojo.getState());
            enquiryFormDetails.setCity(enquiryFormPojo.getCity());
            enquiryFormDetails.setCallStatus(enquiryFormPojo.getCallStatus());
            enquiryFormDetails.setFirstName(enquiryFormPojo.getFirstName());
            enquiryFormDetails.setLastName(enquiryFormPojo.getLastName());
            enquiryFormDetails.setPhoneNumber(enquiryFormPojo.getPhoneNumber());
            enquiryFormDetails.setTypeOfEnquiry(enquiryFormPojo.getTypeOfEnquiry());
            enquiryFormDetails.setServiceType(enquiryFormPojo.getServiceType());
            enquiryFormDetails.setZipcode(enquiryFormPojo.getZipcode());
            enquiryFormDetails.setEmail(enquiryFormPojo.getEmail());
            enquiryFormDetails.setCallinfo(enquiryFormPojo.getCallinfo());
            enquiryFormDetails.setServiceTypeDetails(enquiryFormPojo.getServiceTypeDetails());
            enquiryFormDetails.setSpecialRequirements(enquiryFormPojo.getSpecialRequirements());
            enquiryFormDetails.setCallStatusDetails(enquiryFormPojo.getCallStatusDetails());
            enquiryFormDetails.setServiceLocation(enquiryFormPojo.getServiceLocation());
            enquiryFormDetails.setSourceOfEnquiry(enquiryFormPojo.getSourceOfEnquiry());
            enquiryFormDetails.setEnquiryNo(enquiryFormPojo.getEnquiryNo());
            enquiryFormDetails.setEnquiryDate(enquiryFormPojo.getEnquiryDate());
            enquiryFormDetails.setOthers(enquiryFormPojo.getOthers());
            enquiryFormDetails.setZipcode(enquiryFormPojo.getZipcode());
            enquiryFormDetails.setSpecialRequirements(enquiryFormPojo.getSpecialRequirements());
            enquiryFormDetails.setServiceTypeDetails(enquiryFormPojo.getServiceTypeDetails());
            enquiryFormDetails.setServiceType(enquiryFormPojo.getServiceType());
            enquiryFormDetails.setUser(enquiryFormPojo.getUser());
            enquiryFormDetails.setAssignstatus("Assign");
            enquiryFormDetails.setEnquiryForm(enquiryForm);
            enquiryFormDetailsRepository.save(enquiryFormDetails);
            return enquiryFormDetails;
    }




    public City saveCity(CityPojo cityPojo) {
        City city = new City();
        if (cityPojo.getCityId() != null) {
            city = cityRepository.findAllByStateIdAndCountryIdAndCityNameAndCityIdNotIn(cityPojo.getStateId(),cityPojo.getCountryId(),cityPojo.getCityName(), cityPojo.getCityId());
        } else {
            city = cityRepository.findAllByStateIdAndCountryIdAndCityName(cityPojo.getStateId(),cityPojo.getCountryId(),cityPojo.getCityName());
        }
        if (city == null) {
            City cities = HiposMapper.mapCityPojoToEntity(cityPojo);
            cityRepository.save(cities);
            return cities;
        } else {
            return null;
        }
    }
    public CallStatusMaster saveCallStatus(CallStatusMasterPojo callStatusMasterPojo) {
        CallStatusMaster callStatusMaster = new CallStatusMaster();
        if (callStatusMasterPojo.getId() != null) {
            callStatusMaster = callStatusRepository.findAllByNameAndIdNotIn(callStatusMasterPojo.getName(),callStatusMasterPojo.getId());
        } else {
            callStatusMaster = callStatusRepository.findAllByName(callStatusMasterPojo.getName());
        }
        if (callStatusMaster == null) {
            callStatusMaster = HiposMapper.mapPojoToEntity(callStatusMasterPojo);
            callStatusRepository.save(callStatusMaster);
            return callStatusMaster;
        } else {
            return null;
        }
    }


    public List<CityPojo> getCityList() {
        List<City> cityList = new ArrayList<>();
        cityList = cityRepository.findAllByStatus("Active");
        List<CityPojo> cityPojoList = ObjectMapperUtils.mapAll(cityList,CityPojo.class);
        return  cityPojoList;
    }
    @Transactional
    public EnqSource saveEnquirySource(EnqSourcePojo enqSourcePojo) {
        EnqSource source = new EnqSource();
        if (enqSourcePojo.getEnqSourceId() != null) {
            source = enqSourceRepository.findAllBySourceNameAndEnqSourceIdNotIn(enqSourcePojo.getSourceName(),enqSourcePojo.getEnqSourceId());
        } else {
            source = enqSourceRepository.findBySourceName(enqSourcePojo.getSourceName());
        }
        if (source == null) {
            source = HiposMapper.mapEnqPojoToEnity(enqSourcePojo);
            enqSourceRepository.save(source);
            return source;
        } else {
            return null;
        }
    }
    public List<EnqSourcePojo> getenqSourceList(String status) {
        List<EnqSource> paymentModeList = new ArrayList<>();
        paymentModeList = enqSourceRepository.findAllByStatus(status);
        List<EnqSourcePojo> paymentModePojos = ObjectMapperUtils.mapAll(paymentModeList, EnqSourcePojo.class);
        for (EnqSourcePojo paymentModePojo : paymentModePojos) {
            EnqSource paymentMode = enqSourceRepository.findByEnqSourceId(paymentModePojo.getEnqSourceId());
            if (paymentMode != null) {
                paymentModePojo.setSourceName(paymentMode.getSourceName());
            }
        }
        return paymentModePojos;
    }
    @Transactional
    public ServiceLocation saveServiceLocation(ServiceLocationPojo serviceLocationPojo) {
        ServiceLocation source = new ServiceLocation();
        if (serviceLocationPojo.getSerlocId() != null) {
            source = serviceLocationRepository.findAllByServicelNameAndSerlocIdNotIn(serviceLocationPojo.getServicelName(),serviceLocationPojo.getSerlocId());
        } else {
            source = serviceLocationRepository.findByServicelName(serviceLocationPojo.getServicelName());
        }
        if (source == null) {
            source = HiposMapper.mapLocationServicePojoToEnity(serviceLocationPojo);
            serviceLocationRepository.save(source);
            return source;
        } else {
            return null;
        }
    }
    public List<ServiceLocationPojo> getServiceLocationList(String status) {
        List<ServiceLocation> serviceLocations = new ArrayList<>();
        serviceLocations = serviceLocationRepository.findAllByStatus(status);
        List<ServiceLocationPojo> paymentModePojos = ObjectMapperUtils.mapAll(serviceLocations, ServiceLocationPojo.class);
        for (ServiceLocationPojo paymentModePojo : paymentModePojos) {
            ServiceLocation paymentMode = serviceLocationRepository.findBySerlocId(paymentModePojo.getSerlocId());
            if (paymentMode != null) {
                paymentModePojo.setServicelName(paymentMode.getServicelName());
            }
        }
        return paymentModePojos;
    }
    public List<TypeOfEnquiryPojo> getTypeOfEnquiryList() {
        List<TypeOfEnquiry> typeOfEnquiryList = new ArrayList<>();
        typeOfEnquiryList = typeOfEnquiryRepository.findAllByStatus("Active");
        List<TypeOfEnquiryPojo> typeOfEnquiryPojos = ObjectMapperUtils.mapAll(typeOfEnquiryList,TypeOfEnquiryPojo.class);
        return  typeOfEnquiryPojos;
    }
    public  List<ServiceTypePojo> getServiceTypeList(String type) {
        List<ServiceType> serviceTypeList = serviceTypeRepository.findAllByTypeOfEnquiry(type);
        List<ServiceTypePojo> serviceTypePojos = ObjectMapperUtils.mapAll(serviceTypeList,ServiceTypePojo.class);
        return  serviceTypePojos;
    }
    public  List<ServiceTypePojo> getAllServiceTypeList() {
        List<ServiceType> serviceTypeList = serviceTypeRepository.findAllBy();
        List<ServiceTypePojo> serviceTypePojos = ObjectMapperUtils.mapAll(serviceTypeList,ServiceTypePojo.class);
        return  serviceTypePojos;
    }
    public List<UserRolePojo> getUserRoleList() {
        List<UserRole> userRoleList = new ArrayList<>();
        userRoleList = userRoleRepository.findAllByRoleStatus("Active");
        List<UserRolePojo> userRolePojoList = ObjectMapperUtils.mapAll(userRoleList,UserRolePojo.class);
        return  userRolePojoList;
    }
    public Mail createSaveMailDetails(MailDTO saveMailDetails) {
        Mail mail = new Mail();
        if(saveMailDetails.getId()!=null){
            mail = mailRepository.findAllByUserNameAndIdNotIn(saveMailDetails.getUserName(),saveMailDetails.getId());
        }else {
            mail = mailRepository.findByUserName(saveMailDetails.getUserName());
        }
        if(mail==null){
           mail= HiposMapper.MapPojoToEntity(saveMailDetails);
            mailRepository.save(mail);
            return mail;
        }else {
            return null;
        }
    }
    public TypeOfEnquiry saveTypeOfEnquiry(TypeOfEnquiryPojo typeOfEnquiryPojo) {
        TypeOfEnquiry typeOfEnquiry = new TypeOfEnquiry();
        if(typeOfEnquiryPojo.getId()!=null){
            typeOfEnquiry = typeOfEnquiryRepository.findAllByNameAndIdNotIn(typeOfEnquiryPojo.getName(),typeOfEnquiryPojo.getId());
        }else {
            typeOfEnquiry = typeOfEnquiryRepository.findAllByName(typeOfEnquiryPojo.getName());
        }
        if(typeOfEnquiry==null){
            typeOfEnquiry= HiposMapper.MapPojoToEntity(typeOfEnquiryPojo);
            typeOfEnquiryRepository.save(typeOfEnquiry);
            return typeOfEnquiry;
        }else {
            return null;
        }
    }
    public List<MailDTO> getMailList() {
        List<Mail> list = new ArrayList<>();
        list = mailRepository.findAll();
        List<MailDTO> mailDTOList = HiposMapper.mapMailEntityToPojo(list);
        return mailDTOList;
    }
    public MailDTO editMail(String name) {
        Mail mail = mailRepository.findByUserName(name);
        List<Mail> mails = new ArrayList<>();
        mails.add(mail);
        MailDTO mailDTO = HiposMapper.mapMailEntityToPojo(mails).get(0);
        return mailDTO;
    }
    public boolean deleteCity(CityPojo details) {
        cityRepository.delete(details.getCityId());
        return  true;
    }
    public BasePojo getpaginatedcitylist(String status, BasePojo basePojo, String searchText) {
        List<City> list = new ArrayList<>();
        basePojo.setPageSize(paginatedConstants);
        Sort sort = new Sort(new Sort.Order(Sort.Direction.DESC, "cityId"));
        if (basePojo.isLastPage() == true) {
            List<City> list1 = new ArrayList<>();
            if (!org.apache.commons.lang3.StringUtils.isEmpty(searchText)) {
                list1 = cityRepository.findAllByCityNameContainingAndStatus(searchText, status);
            } else {
                list1 = cityRepository.findAllByStatus(status);
            }
            int size = list1.size() % paginatedConstants;
            int pageNo = list1.size() / paginatedConstants;
            if (size != 0) {
                basePojo.setPageNo(pageNo);
            } else {
                basePojo.setPageNo(pageNo - 1);
            }
            sort = new Sort(new Sort.Order(Sort.Direction.ASC, "cityId"));
        }
        if (org.apache.commons.lang3.StringUtils.isEmpty(status)) {
            status = "Active";
        }
        City qualification = new City();
        Pageable pageable = new PageRequest(basePojo.getPageNo(), basePojo.getPageSize(), sort);
        if (basePojo.isNextPage() == true || basePojo.isFirstPage() == true) {
            sort = new Sort(new Sort.Order(Sort.Direction.ASC, "cityId"));
        }
        if (!org.apache.commons.lang3.StringUtils.isEmpty(searchText)) {
            qualification = cityRepository.findFirstByCityNameContainingAndStatus(searchText, status, sort);
            list = cityRepository.findAllByCityNameContainingAndStatus(searchText, status, pageable);
        } else {
            qualification = cityRepository.findFirstByStatus(status, sort);
            list = cityRepository.findAllByStatus(status, pageable);
        }
        if (list.contains(qualification)) {
            basePojo.setStatus(true);
        } else {
            basePojo.setStatus(false);
        }
        List<CityPojo> PojoList = HiposMapper.mapCityEntityToPojo(list);
        for(CityPojo s : PojoList){
            Country country = countryRepository.findAllByCountryName(s.getCountryName());
                State state = stateRepository.findAllByStateName(s.getStateName());
            if(state!=null) {
                s.setStateName(state.getStateName());
                s.setStateId(state.getStateId());
            }
            if(country!=null) {
                s.setCountryName(country.getCountryName());
                s.setCountryId(country.getCountryId());
            }
        }
        basePojo = calculatePagination(basePojo, PojoList.size());
        basePojo.setList(PojoList);
        return basePojo;
    }

 public BasePojo getPaginatedUserList(String status, BasePojo basePojo, String searchText,String name) {
        List<User> list = new ArrayList<>();
        basePojo.setPageSize(paginatedConstants);
        Sort sort = new Sort(new Sort.Order(Sort.Direction.DESC, "userId"));
        if (basePojo.isLastPage() == true) {
            List<User> list1 = new ArrayList<>();
            if (!org.apache.commons.lang3.StringUtils.isEmpty(searchText)) {
                list1 = userRepository.findAllByUserNameContainingAndStatus(searchText, status);
            } else {
                list1 = userRepository.findAllByStatus(status);
            }
            int size = list1.size() % paginatedConstants;
            int pageNo = list1.size() / paginatedConstants;
            if (size != 0) {
                basePojo.setPageNo(pageNo);
            } else {
                basePojo.setPageNo(pageNo - 1);
            }
            sort = new Sort(new Sort.Order(Sort.Direction.ASC, "userId"));
        }
        if (org.apache.commons.lang3.StringUtils.isEmpty(status)) {
            status = "Active";
        }
        User qualification = new User();
        Pageable pageable = new PageRequest(basePojo.getPageNo(), basePojo.getPageSize(), sort);
        if (basePojo.isNextPage() == true || basePojo.isFirstPage() == true) {
            sort = new Sort(new Sort.Order(Sort.Direction.ASC, "userId"));
        }
        if (!org.apache.commons.lang3.StringUtils.isEmpty(searchText)) {
            qualification = userRepository.findFirstByUserNameContainingAndStatusAndParent(searchText, status, sort,name);
            list = userRepository.findAllByUserNameContainingAndStatusAndParent(searchText, status, pageable,name);
        } else {
            qualification = userRepository.findFirstByStatusAndParent(status, sort,name);
            list = userRepository.findAllByStatusAndParent(status, pageable,name);
        }
        if (list.contains(qualification)) {
            basePojo.setStatus(true);
        } else {
            basePojo.setStatus(false);
        }
        List<UserPojo> PojoList = HiposMapper.mapUserEntityToPojo(list);
        basePojo = calculatePagination(basePojo, PojoList.size());
        basePojo.setList(PojoList);
        return basePojo;
    }
    public BasePojo getcountrypagelist(String status, BasePojo basePojo, String searchText) {
        List<Country> list = new ArrayList<>();
        basePojo.setPageSize(paginatedConstants);
        Sort sort = new Sort(new Sort.Order(Sort.Direction.DESC, "countryId"));
        if (basePojo.isLastPage() == true) {
            List<Country> list1 = new ArrayList<>();
            if (!org.apache.commons.lang3.StringUtils.isEmpty(searchText)) {
                list1 = countryRepository.findAllByCountryNameContainingAndStatus(searchText, status);
            } else {
                list1 = countryRepository.findAllByStatus(status);
            }
            int size = list1.size() % paginatedConstants;
            int pageNo = list1.size() / paginatedConstants;
            if (size != 0) {
                basePojo.setPageNo(pageNo);
            } else {
                basePojo.setPageNo(pageNo - 1);
            }
            sort = new Sort(new Sort.Order(Sort.Direction.DESC, "countryId"));
        }
        if (org.apache.commons.lang3.StringUtils.isEmpty(status)) {
            status = "Active";
        }
        Country qualification = new Country();
        Pageable pageable = new PageRequest(basePojo.getPageNo(), basePojo.getPageSize(), sort);
        if (basePojo.isNextPage() == true || basePojo.isFirstPage() == true) {
            sort = new Sort(new Sort.Order(Sort.Direction.ASC, "countryId"));
        }
        if (!org.apache.commons.lang3.StringUtils.isEmpty(searchText)) {
            qualification = countryRepository.findFirstByCountryNameContainingAndStatus(searchText, status, sort);
            list = countryRepository.findAllByCountryNameContainingAndStatus(searchText, status, pageable);
        } else {
            qualification = countryRepository.findFirstByStatus(status, sort);
            list = countryRepository.findAllByStatus(status, pageable);
        }
        if (list.contains(qualification)) {
            basePojo.setStatus(true);
        } else {
            basePojo.setStatus(false);
        }
        List<CountryPojo> PojoList = HiposMapper.mapcountryEntityToPojo(list);
        basePojo = calculatePagination(basePojo, PojoList.size());
        basePojo.setList(PojoList);
        return basePojo;
    }
    public BasePojo getpaginatedSupplier(String status, BasePojo basePojo, String searchText) {
        List<Supplier> list = new ArrayList<>();
        basePojo.setPageSize(paginatedConstants);
        Sort sort = new Sort(new Sort.Order(Sort.Direction.DESC, "id"));
        if (basePojo.isLastPage() == true) {
            List<Supplier> list1 = new ArrayList<>();
            if (!org.apache.commons.lang3.StringUtils.isEmpty(searchText)) {
                list1 = supplierRepository.findAllBySupplierNameContainingAndStatus(searchText, status);
            } else {
                list1 = supplierRepository.findAllByStatus(status);
            }
            int size = list1.size() % paginatedConstants;
            int pageNo = list1.size() / paginatedConstants;
            if (size != 0) {
                basePojo.setPageNo(pageNo);
            } else {
                basePojo.setPageNo(pageNo - 1);
            }
            sort = new Sort(new Sort.Order(Sort.Direction.DESC, "id"));
        }
        if (org.apache.commons.lang3.StringUtils.isEmpty(status)) {
            status = "Active";
        }
        Supplier supplier = new Supplier();
        Pageable pageable = new PageRequest(basePojo.getPageNo(), basePojo.getPageSize(), sort);
        if (basePojo.isNextPage() == true || basePojo.isFirstPage() == true) {
            sort = new Sort(new Sort.Order(Sort.Direction.ASC, "id"));
        }
        if (!org.apache.commons.lang3.StringUtils.isEmpty(searchText)) {
            supplier = supplierRepository.findFirstBySupplierNameContainingAndStatus(searchText, status, sort);
            list = supplierRepository.findAllBySupplierNameContainingAndStatus(searchText, status, pageable);
        } else {
            supplier = supplierRepository.findFirstByStatus(status, sort);
            list = supplierRepository.findAllByStatus(status, pageable);
        }
        if (list.contains(supplier)) {
            basePojo.setStatus(true);
        } else {
            basePojo.setStatus(false);
        }
        List<SupplierPojo> PojoList = HiposMapper.mapsupplierEntityToPojo(list);
        basePojo = calculatePagination(basePojo, PojoList.size());
        basePojo.setList(PojoList);
        return basePojo;
    }
    public BasePojo getpaginatedServiceType(String status, BasePojo basePojo, String searchText) {
        List<ServiceType> list = new ArrayList<>();
        basePojo.setPageSize(paginatedConstants);
        Sort sort = new Sort(new Sort.Order(Sort.Direction.DESC, "id"));
        if (basePojo.isLastPage() == true) {
            List<ServiceType> list1 = new ArrayList<>();
            if (!org.apache.commons.lang3.StringUtils.isEmpty(searchText)) {
                list1 = serviceTypeRepository.findAllByServiceTypeContaining(searchText);
            } else {
                list1 = serviceTypeRepository.findAllBy();
            }
            int size = list1.size() % paginatedConstants;
            int pageNo = list1.size() / paginatedConstants;
            if (size != 0) {
                basePojo.setPageNo(pageNo);
            } else {
                basePojo.setPageNo(pageNo - 1);
            }
            sort = new Sort(new Sort.Order(Sort.Direction.DESC, "id"));
        }
        if (org.apache.commons.lang3.StringUtils.isEmpty(status)) {
            status = "Active";
        }
        ServiceType serviceType = new ServiceType();
        Pageable pageable = new PageRequest(basePojo.getPageNo(), basePojo.getPageSize(), sort);
        if (basePojo.isNextPage() == true || basePojo.isFirstPage() == true) {
            sort = new Sort(new Sort.Order(Sort.Direction.ASC, "id"));
        }
        if (!org.apache.commons.lang3.StringUtils.isEmpty(searchText)) {
            serviceType = serviceTypeRepository.findFirstByServiceTypeContaining(searchText, sort);
            list = serviceTypeRepository.findAllByServiceTypeContaining(searchText, pageable);
        } else {
            serviceType = serviceTypeRepository.findFirstBy(sort);
            list = serviceTypeRepository.findAllBy(pageable);
        }
        if (list.contains(serviceType)) {
            basePojo.setStatus(true);
        } else {
            basePojo.setStatus(false);
        }
        List<ServiceTypePojo> PojoList = HiposMapper.mapServiceTypeEntityToPojo(list);
        basePojo = calculatePagination(basePojo, PojoList.size());
        basePojo.setList(PojoList);
        return basePojo;
    }
//    public BasePojo getpaginatedPopup(String status, BasePojo basePojo, String searchText) {
//        List<Popup> list = new ArrayList<>();
//        basePojo.setPageSize(paginatedConstants);
//        Sort sort = new Sort(new Sort.Order(Sort.Direction.DESC, "id"));
//        if (basePojo.isLastPage() == true) {
//            List<Popup> list1 = new ArrayList<>();
//            if (!org.apache.commons.lang3.StringUtils.isEmpty(searchText)) {
//                list1 = popupRepository.findAllByPopupNameContaining(searchText);
//            } else {
//                list1 = popupRepository.findAllBy();
//            }
//            int size = list1.size() % paginatedConstants;
//            int pageNo = list1.size() / paginatedConstants;
//            if (size != 0) {
//                basePojo.setPageNo(pageNo);
//            } else {
//                basePojo.setPageNo(pageNo - 1);
//            }
//            sort = new Sort(new Sort.Order(Sort.Direction.DESC, "id"));
//        }
//        if (org.apache.commons.lang3.StringUtils.isEmpty(status)) {
//            status = "Active";
//        }
//        ServiceType serviceType = new ServiceType();
//        Pageable pageable = new PageRequest(basePojo.getPageNo(), basePojo.getPageSize(), sort);
//        if (basePojo.isNextPage() == true || basePojo.isFirstPage() == true) {
//            sort = new Sort(new Sort.Order(Sort.Direction.ASC, "id"));
//        }
//        if (!org.apache.commons.lang3.StringUtils.isEmpty(searchText)) {
//            serviceType = serviceTypeRepository.findFirstByServiceTypeContaining(searchText, sort);
//            list = serviceTypeRepository.findAllByServiceTypeContaining(searchText, pageable);
//        } else {
//            serviceType = serviceTypeRepository.findFirstBy(sort);
//            list = serviceTypeRepository.findAllBy(pageable);
//        }
//        if (list.contains(serviceType)) {
//            basePojo.setStatus(true);
//        } else {
//            basePojo.setStatus(false);
//        }
//        List<ServiceTypePojo> PojoList = HiposMapper.mapServiceTypeEntityToPojo(list);
//        basePojo = calculatePagination(basePojo, PojoList.size());
//        basePojo.setList(PojoList);
//        return basePojo;
//    }
    public BasePojo getpaginatedTypeOfEnquiry(String status, BasePojo basePojo, String searchText) {
        List<TypeOfEnquiry> list = new ArrayList<>();
        basePojo.setPageSize(paginatedConstants);
        Sort sort = new Sort(new Sort.Order(Sort.Direction.DESC, "id"));
        if (basePojo.isLastPage() == true) {
            List<TypeOfEnquiry> list1 = new ArrayList<>();
            if (!org.apache.commons.lang3.StringUtils.isEmpty(searchText)) {
                list1 = typeOfEnquiryRepository.findAllByNameContainingAndStatus(searchText, status);
            } else {
                list1 = typeOfEnquiryRepository.findAllByStatus(status);
            }
            int size = list1.size() % paginatedConstants;
            int pageNo = list1.size() / paginatedConstants;
            if (size != 0) {
                basePojo.setPageNo(pageNo);
            } else {
                basePojo.setPageNo(pageNo - 1);
            }
            sort = new Sort(new Sort.Order(Sort.Direction.DESC, "id"));
        }
        if (org.apache.commons.lang3.StringUtils.isEmpty(status)) {
            status = "Active";
        }
        TypeOfEnquiry typeOfEnquiry = new TypeOfEnquiry();
        Pageable pageable = new PageRequest(basePojo.getPageNo(), basePojo.getPageSize(), sort);
        if (basePojo.isNextPage() == true || basePojo.isFirstPage() == true) {
            sort = new Sort(new Sort.Order(Sort.Direction.ASC, "id"));
        }
        if (!org.apache.commons.lang3.StringUtils.isEmpty(searchText)) {
            typeOfEnquiry = typeOfEnquiryRepository.findFirstByNameContainingAndStatus(searchText, status, sort);
            list = typeOfEnquiryRepository.findAllByNameContainingAndStatus(searchText, status, pageable);
        } else {
            typeOfEnquiry = typeOfEnquiryRepository.findFirstByStatus(status, sort);
            list = typeOfEnquiryRepository.findAllByStatus(status, pageable);
        }
        if (list.contains(typeOfEnquiry)) {
            basePojo.setStatus(true);
        } else {
            basePojo.setStatus(false);
        }
        List<TypeOfEnquiryPojo> PojoList = HiposMapper.mapTypeEntityToPojo(list);
        basePojo = calculatePagination(basePojo, PojoList.size());
        basePojo.setList(PojoList);
        return basePojo;
    }



    public Boolean deleteCountry(CountryPojo details) {
        countryRepository.delete(details.getCountryId());
        return true;
    }

    public BasePojo calculatePagination(BasePojo basePojo, int size) {
        if (basePojo.isLastPage() == true) {
            basePojo.setFirstPage(false);
            basePojo.setNextPage(true);
            basePojo.setPrevPage(false);
        } else if (basePojo.isFirstPage() == true) {
            basePojo.setLastPage(false);
            basePojo.setNextPage(false);
            basePojo.setPrevPage(true);
            if (basePojo.isStatus() == true) {
                basePojo.setLastPage(true);
                basePojo.setNextPage(true);
            }
        } else if (basePojo.isNextPage() == true) {
            basePojo.setLastPage(false);
            basePojo.setFirstPage(false);
            basePojo.setPrevPage(false);
            basePojo.setNextPage(false);
            if (basePojo.isStatus() == true) {
                basePojo.setLastPage(true);
                basePojo.setNextPage(true);
            }
        } else if (basePojo.isPrevPage() == true) {
            basePojo.setLastPage(false);
            basePojo.setFirstPage(false);
            basePojo.setNextPage(false);
            basePojo.setPrevPage(false);
            if (basePojo.isStatus() == true) {
                basePojo.setPrevPage(true);
                basePojo.setFirstPage(true);
            }
        }
        if (size == 0) {
            basePojo.setLastPage(true);
            basePojo.setFirstPage(true);
            basePojo.setNextPage(true);
            basePojo.setPrevPage(true);
        }
        return basePojo;
    }
    public State saveState(StatePojo statePojo) {
        State state = new State();
        if (statePojo.getStateId() != null) {
            state = stateRepository.findAllByStateNameAndStateIdNotIn(statePojo.getStateName(), statePojo.getStateId());
        } else {
            state = stateRepository.findAllByStateName(statePojo.getStateName());

        }
        if (state == null) {
            state = HiposMapper.MapStateEntityToPojo(statePojo);
            if(!StringUtils.isEmpty(statePojo.getCountryName())) {
                Country country = countryRepository.findAllByCountryName(statePojo.getCountryName());
                state.setCountryId(country.getCountryId());
            }else {
                state.setCountryId(statePojo.getCountryId());
            }
            stateRepository.save(state);
            return state;
        } else {
            return null;
        }
    }
    public Currency saveCurrency(CurrencyPojo currencyPojo) {
        Currency currency = new Currency();
        if (currencyPojo.getCurrencyId() != null) {
            currency = currencyRepository.findAllByCurrencyNameAndCurrencyIdNotIn(currencyPojo.getCurrencyName(), currencyPojo.getCurrencyId());
        } else {
            currency = currencyRepository.findAllByCurrencyName(currencyPojo.getCurrencyName());
        }
        if (currency == null) {
            currency = HiposMapper.mapPojoToEntity(currencyPojo);
            currencyRepository.save(currency);
            return currency;
        } else {
            return null;
        }
    }
    public void deleteState(Long id) {
        stateRepository.delete(stateRepository.findAllByStateId(id));
    }


    public BasePojo getPaginatedState(String status, BasePojo basePojo, String searchText) {
        List<State> list = new ArrayList<>();
        basePojo.setPageSize(paginatedConstants);
        Sort sort = new Sort(new Sort.Order(Sort.Direction.DESC, "stateId"));
        if (basePojo.isLastPage() == true) {
            List<State> list1 = new ArrayList<>();
            if (!org.apache.commons.lang3.StringUtils.isEmpty(searchText)) {
                list1 = stateRepository.findAllByStateNameContainingAndStatus(searchText, status);
            } else {
                list1 = stateRepository.findAllByStatus(status);
            }
            int size = list1.size() % paginatedConstants;
            int pageNo = list1.size() / paginatedConstants;
            if (size != 0) {
                basePojo.setPageNo(pageNo);
            } else {
                basePojo.setPageNo(pageNo - 1);
            }
            sort = new Sort(new Sort.Order(Sort.Direction.DESC, "stateId"));
        }
        if (org.apache.commons.lang3.StringUtils.isEmpty(status)) {
            status = "Active";
        }
        State qualification = new State();
        Pageable pageable = new PageRequest(basePojo.getPageNo(), basePojo.getPageSize(), sort);
        if (basePojo.isNextPage() == true || basePojo.isFirstPage() == true) {
            sort = new Sort(new Sort.Order(Sort.Direction.ASC, "stateId"));
        }
        if (!org.apache.commons.lang3.StringUtils.isEmpty(searchText)) {
            qualification = stateRepository.findFirstByStateNameContainingAndStatus(searchText, status, sort);
            list = stateRepository.findAllByStateNameContainingAndStatus(searchText, status, pageable);
        } else {
            qualification = stateRepository.findFirstByStatus(status, sort);
            list = stateRepository.findAllByStatus(status, pageable);
        }
        if (list.contains(qualification)) {
            basePojo.setStatus(true);
        } else {
            basePojo.setStatus(false);
        }
        List<StatePojo> PojoList = HiposMapper.mapEntityToPojo(list);
        for (StatePojo statePojo : PojoList) {
            Country country = countryRepository.findAllByCountryName(statePojo.getCountryName());
           if(country!=null) {
               statePojo.setCountryName(country.getCountryName());
           }
        }
        basePojo = calculatePagination(basePojo, PojoList.size());
        basePojo.setList(PojoList);
        return basePojo;
    }
    public BasePojo getPaginationCurrencyList(String status, BasePojo basePojo, String searchText) {
        List<Currency> list = new ArrayList<>();
        basePojo.setPageSize(paginatedConstants);
        Sort sort = new Sort(new Sort.Order(Sort.Direction.DESC, "currencyId"));
        if (basePojo.isLastPage() == true) {
            List<Currency> list1 = new ArrayList<>();
            if (!org.apache.commons.lang3.StringUtils.isEmpty(searchText)) {
                list1 = currencyRepository.findAllByCurrencyNameContainingAndStatus(searchText, status);
            } else {
                list1 = currencyRepository.findAllByStatus(status);
            }
            int size = list1.size() % paginatedConstants;
            int pageNo = list1.size() / paginatedConstants;
            if (size != 0) {
                basePojo.setPageNo(pageNo);
            } else {
                basePojo.setPageNo(pageNo - 1);
            }
            sort = new Sort(new Sort.Order(Sort.Direction.DESC, "currencyId"));
        }
        if (org.apache.commons.lang3.StringUtils.isEmpty(status)) {
            status = "Active";
        }
        Currency currency = new Currency();
        Pageable pageable = new PageRequest(basePojo.getPageNo(), basePojo.getPageSize(), sort);
        if (basePojo.isNextPage() == true || basePojo.isFirstPage() == true) {
            sort = new Sort(new Sort.Order(Sort.Direction.ASC, "currencyId"));
        }
        if (!org.apache.commons.lang3.StringUtils.isEmpty(searchText)) {
            currency = currencyRepository.findFirstByCurrencyNameContainingAndStatus(searchText, status, sort);
            list = currencyRepository.findAllByCurrencyNameContainingAndStatus(searchText, status, pageable);
        } else {
            currency = currencyRepository.findFirstByStatus(status, sort);
            list = currencyRepository.findAllByStatus(status, pageable);
        }
        if (list.contains(currency)) {
            basePojo.setStatus(true);
        } else {
            basePojo.setStatus(false);
        }
        List<CurrencyPojo> PojoList = HiposMapper.mapCurrencyEntityToPojo(list);
//        for (CurrencyPojo statePojo : PojoList) {
//            Country country = countryRepository.findAllByCountryName(statePojo.getCountryName());
//           if(country!=null) {
//               statePojo.setCountryName(country.getCountryName());
//           }
//        }
        basePojo = calculatePagination(basePojo, PojoList.size());
        basePojo.setList(PojoList);
        return basePojo;
    }







    public List<StatePojo> getStateList() {
        List<State> stateList = new ArrayList<>();
        stateList = stateRepository.findAllByStatus("Active");
        List<StatePojo> statePojos = ObjectMapperUtils.mapAll(stateList, StatePojo.class);
        for (StatePojo statePojo : statePojos) {
            Country country = countryRepository.findAllByCountryId(statePojo.getCountryId());
            if (country != null) {
                statePojo.setCountryName(country.getCountryName());
            }
        }
        return statePojos;
    }

    public String generateEnquiryNo() {
        String enquiryFormNo = null;
        List<EnquiryForm> enquiryForm = enquiryFormRepository.findAll();
        if (enquiryForm.size() == 0) {
            enquiryFormNo = "ENQ001";
        } else {
            String form = enquiryForm.get(enquiryForm.size() - 1).getEnquiryNo();
            String[] splitForm = form.split("ENQ");
            int formno = Integer.parseInt(splitForm[1]);
            formno = formno + 1;
            enquiryFormNo = String.format("ENQ" + "%03d", formno);
        }
        return enquiryFormNo;
    }
    public List<State> getcountrybasedList(String country) {
        if(!(StringUtils.isEmpty(country)|| org.apache.commons.lang3.StringUtils.equalsIgnoreCase(country,"undefined"))){

        List<State> stateList = new ArrayList<>();
        List<StatePojo> stateList1 = new ArrayList<>();

        stateList = stateRepository.findAllByCountryId(Long.valueOf(country));
        return stateList;
        }
        return null;
    }

    public  String CheckUrlAvailability(String slug)throws Exception{
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("slug",slug);
        String url = readDomainName() + "/Crm/checkslug";
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json");
   HttpEntity<String> entity = new HttpEntity<String>(jsonObject.toString(), headers);
        ResponseEntity<String> responseEntity = restTemplate.exchange(url, HttpMethod.POST, entity, String.class);
        String jsonString = responseEntity.getBody();
        return jsonString;

    }
    public List<City> getcitybasedlist(String state) {
        if(!(StringUtils.isEmpty(state)|| org.apache.commons.lang3.StringUtils.equalsIgnoreCase(state,"undefined"))){
        List<City> cityLists = new ArrayList<>();
        List<StatePojo> stateList1 = new ArrayList<>();

        cityLists = cityRepository.findByCityId(Long.valueOf(state));
//
        return cityLists;}
        return null;
    }
    public List<CountryPojo> getCountryList() {
        List<Country> countryList = new ArrayList<>();
        countryList = countryRepository.findAllByStatus("Active");
        List<CountryPojo> countryPojoList = ObjectMapperUtils.mapAll(countryList, CountryPojo.class);
        return countryPojoList;
    }
    public List<CreatePagePojo> getCreatePageList() {
        List<CreatePage> createPageList = new ArrayList<>();
        createPageList = createPageRepository.findAll();
        List<CreatePagePojo> createPagePojoList = ObjectMapperUtils.mapAll(createPageList, CreatePagePojo.class);
        return createPagePojoList;
    }
    public List<CreatePagePojo> getCreatePageL() {
        String tableName = null;
        List<CreatePagePojo> createPagePojoList = new ArrayList<>();
        List<CreatePage> createPageList = createPageRepository.findAllByModuleNameNotNullAndSubmoduleNameNullAndPageNameNull();
        createPagePojoList = ObjectMapperUtils.mapAll(createPageList, CreatePagePojo.class);
        for (CreatePagePojo createPagePojo :createPagePojoList){
            createPagePojo.setTableName(createPagePojo.getModuleName());
       }
        List<CreatePage> submoduleList = createPageRepository.findAllByModuleNameNotNullAndSubmoduleNameNotNullAndPageNameNull();
       createPagePojoList = ObjectMapperUtils.mapAll(submoduleList, CreatePagePojo.class);
        for (CreatePagePojo createPagePojo :createPagePojoList){
            createPagePojo.setTableName(createPagePojo.getSubmoduleName());
        }
       List<CreatePage> pageList = createPageRepository.findAllByModuleNameNotNullAndSubmoduleNameNotNullAndPageNameNotNull();
        createPagePojoList = ObjectMapperUtils.mapAll(pageList, CreatePagePojo.class);
        for (CreatePagePojo createPagePojo :createPagePojoList){
            createPagePojo.setTableName(createPagePojo.getPageName());
        }
        List<CreatePage> pageList1 = createPageRepository.findAllByModuleNameNotNullAndSubmoduleNameNullAndPageNameNotNull();
        createPagePojoList = ObjectMapperUtils.mapAll(pageList1, CreatePagePojo.class);
        for (CreatePagePojo createPagePojo :createPagePojoList){
            createPagePojo.setTableName(createPagePojo.getPageName());
        }
        return createPagePojoList;
    }
    public List<String> getModule() {
        List<CreatePage> createPageList = new ArrayList<>();
        createPageList = createPageRepository.findAll();
        List<CreatePagePojo> createPagePojoList = ObjectMapperUtils.mapAll(createPageList, CreatePagePojo.class);
        Collection<String> list = new ArrayList<>();
        for(CreatePagePojo createPagePojo :createPagePojoList){
            list.add(createPagePojo.getModuleName());
        }
        List<String> coStringList = list.stream().distinct().collect(Collectors.toList());
        List<String> stringList = createPagePojoList.stream().distinct().map(m->m.getModuleName()).collect(Collectors.toList());
        System.out.println(stringList);
        return coStringList;

    }

    public PopupPojo getPopupDetails(String popup){
        PopupPojo popupPojo = new PopupPojo();
        Popup popup1 = popupRepository.findAllByPopupName(popup);
        popupPojo.setDetails(popup1.getDetails());
        return popupPojo;
    }
    public CreatePagePojo getCreatePageListBasedOnModule(String module){
        List<CreatePage> createPageList = createPageRepository.findAllByModuleNameAndSubmoduleNameNullAndPageNameNull(module);
        if(createPageList.size()==0){
            createPageList = createPageRepository.findAllBySubmoduleNameAndPageNameNull(module);
            if (createPageList.size()==0){
                createPageList = createPageRepository.findByPageName(module);
            }
        }
        CreatePagePojo createPagePojo = new CreatePagePojo();
        if (createPageList.size()>0) {
            createPagePojo.setId(createPageList.get(0).getId());
            createPagePojo.setColumns(createPageList.get(0).getColumns());
            createPagePojo.setDetails(createPageList.get(0).getDetails());
            createPagePojo.setModuleName(createPageList.get(0).getModuleName());
            return createPagePojo;
        }else {
            return createPagePojo;
        }
    }
    public List<Map<String,Object>>  getFieldsBasedOnModule(String name){
        List<CreatePage> createPageList = createPageRepository.findAllByModuleNameAndSubmoduleNameNullAndPageNameNull(name);
        if(createPageList.size()==0){
            createPageList = createPageRepository.findAllBySubmoduleNameAndPageNameNull(name);
            if (createPageList.size()==0){
                createPageList = createPageRepository.findByPageName(name);
            }
        }
        List<Map<String,Object>> maps = new ArrayList<>();
        Gson gson = new Gson();
        Type type = new TypeToken<List<Map<String,Object>>>(){}.getType();
        if(createPageList.size()>0) {
            maps = gson.fromJson(createPageList.get(0).getDetails(), type);
        }
        return maps;
    }
    public List<String> getForeignkeyvalues(String moduleName,String feildName) throws Exception {
        List<Map<String, Object>> totalList = new ArrayList<Map<String, Object>>();
        Class.forName("com.mysql.jdbc.Driver");
        String db_url = dataBaseCreds.getDB_URL();
        String database = db_url.substring(db_url.lastIndexOf("/") + 1, db_url.indexOf("?"));
        Statement stmt = null;
        Connection con = DriverManager.getConnection(db_url,
                dataBaseCreds.getDB_USERNAME(),
                dataBaseCreds.getDB_PASSWORD());
        stmt = con.createStatement();
        String getList = " SELECT " + feildName + " From " + database + "." + moduleName.replaceAll("[^a-zA-Z]+","");
        ResultSet dependentResult = stmt.executeQuery(getList);
        ResultSetMetaData searchResultMetaData = dependentResult.getMetaData();
        int columnCount = searchResultMetaData.getColumnCount();
        List<String> stringList = new ArrayList<>();
        while (dependentResult.next()) {
            Map<String, Object> val = new LinkedHashMap<String, Object>();
            for (int i = 1; i <= columnCount; i++) {
                val.put(searchResultMetaData.getColumnLabel(i), dependentResult.getObject(i));
                stringList.add( dependentResult.getObject(i).toString());
            }
            totalList.add(val);
        }
        return stringList;
    }

    public List<CurrencyPojo> getCurrencyList() {
        List<Currency> currencyList = new ArrayList<>();
        currencyList = currencyRepository.findAllByStatus("Active");
        List<CurrencyPojo> currencyPojoList = ObjectMapperUtils.mapAll(currencyList, CurrencyPojo.class);
        return currencyPojoList;
    }


    public  List<Map<String, Object>> editFormPage(String tableName, Long id) throws Exception {
        Class.forName("com.mysql.jdbc.Driver");
        String db_url = dataBaseCreds.getDB_URL();
        String database = db_url.substring(db_url.lastIndexOf("/") + 1, db_url.indexOf("?"));
        Statement stmt = null;
        Connection con = DriverManager.getConnection(db_url,
                dataBaseCreds.getDB_USERNAME(),
                dataBaseCreds.getDB_PASSWORD());
        String result = "SELECT * FROM " + database + "." + tableName + "  WHERE id=" + id;
        System.out.println(result);
        stmt = con.createStatement();
        ResultSet rs = stmt.executeQuery(result);
        ResultSetMetaData metaData = rs.getMetaData();
        int columnCount = metaData.getColumnCount();
        List<Map<String, Object>> arrayList = new ArrayList<>();
        List<Map<String,Object>> maps = new ArrayList<>();
        while (rs.next()) {
            Map<String, Object> columns = new LinkedHashMap<String, Object>();

            for (int i = 1; i <= columnCount; i++) {
                columns.put(metaData.getColumnLabel(i), rs.getObject(i));
            }
            arrayList.add(columns);
        }
            maps = getFieldsBasedOnModule(tableName);
        for (Map<String,Object> objectMap:maps){
            objectMap.put("values",arrayList.get(0).get(objectMap.get("field")));
        }
        Map<String,Object> stringMap = new HashMap<>();
        stringMap.put("id",arrayList.get(0).get("id"));
        maps.add(stringMap);
        return maps;
    }
    public static boolean tableExist(Connection conn, String tableName) throws Exception {
        boolean tExists = false;
        try (ResultSet rs = conn.getMetaData().getTables(null, null, tableName.replaceAll("[^a-zA-Z]+",""), null)) {
            while (rs.next()) {
                String tName = rs.getString("TABLE_NAME");
                if (tName != null && tName.equals(tableName)) {
                    tExists = true;
                    break;
                }
            }
        }
        return tExists;
    }

    public CreatePagePojo editCreatePage(Long id){
        CreatePagePojo createPagePojo = new CreatePagePojo();
        CreatePage createPage = createPageRepository.findOne(id);
        createPagePojo.setId(createPage.getId());
        createPagePojo.setModuleName(createPage.getModuleName());
        createPagePojo.setPageName(createPage.getPageName());
        createPagePojo.setSubmoduleName(createPage.getSubmoduleName());
        createPagePojo.setDetails(createPage.getDetails());
        createPagePojo.setColumns(createPage.getColumns());
        return createPagePojo;
    }
    public EnquiryFormPojo editEnquiry(Long id) {
        EnquiryFormPojo enquiryFormPojo = new EnquiryFormPojo();
        EnquiryForm enquiryForm = enquiryFormRepository.findOne(id);
        enquiryFormPojo.setId(enquiryForm.getId());
        enquiryFormPojo.setFirstName(enquiryForm.getFirstName());
        enquiryFormPojo.setLastName(enquiryForm.getLastName());
        enquiryFormPojo.setCallerLocation(enquiryForm.getCallerLocation());
        enquiryFormPojo.setPhoneNumber(enquiryForm.getPhoneNumber());
        enquiryFormPojo.setTypeOfEnquiry(enquiryForm.getTypeOfEnquiry());
        enquiryFormPojo.setServiceType(enquiryForm.getServiceType());
        enquiryFormPojo.setServiceTypeDetails(enquiryForm.getServiceTypeDetails());
        enquiryFormPojo.setAddress1(enquiryForm.getAddress1());
        enquiryFormPojo.setAddress2(enquiryForm.getAddress2());
        enquiryFormPojo.setZipcode(enquiryForm.getZipcode());
        enquiryFormPojo.setEmail(enquiryForm.getEmail());
        enquiryFormPojo.setCallStatus(enquiryForm.getCallStatus());
        enquiryFormPojo.setCallinfo(enquiryForm.getCallinfo());
        enquiryFormPojo.setCountry(enquiryForm.getCountry());
        enquiryFormPojo.setState(enquiryForm.getState());
        enquiryFormPojo.setCity(enquiryForm.getCity());
        enquiryFormPojo.setSpecialRequirements(enquiryForm.getSpecialRequirements());
        enquiryFormPojo.setCallStatusDetails(enquiryForm.getCallStatusDetails());
        enquiryFormPojo.setEnquiryDate(enquiryForm.getEnquiryDate());
        enquiryFormPojo.setEnquiryNo(enquiryForm.getEnquiryNo());
        enquiryFormPojo.setSourceOfEnquiry(enquiryForm.getSourceOfEnquiry());
        enquiryFormPojo.setServiceLocation(enquiryForm.getServiceLocation());
        enquiryFormPojo.setOthers(enquiryForm.getOthers());
        enquiryFormPojo.setUser(enquiryForm.getUser());
        enquiryFormPojo.setAssignstatus(enquiryForm.getAssignstatus());
        return enquiryFormPojo;
    }
    public Agency savenewAgency(AgencyPojo agencyPojo){
        Agency agency = new Agency();
        if (agencyPojo.getAgId() != null) {
            agency = agencyRepository.findByAgencyNameAndAgIdNotIn(agencyPojo.getAgencyName(),agencyPojo.getAgId());
        } else {
            agency = agencyRepository.findByAgencyName(agencyPojo.getAgencyName());

        }
        if (agency == null) {
            agency = HiposMapper.MapAgencyToEntity(agencyPojo);
            agencyRepository.save(agency);
            User user=new User();
            User user1 =new User();
            if(agencyPojo.getAgencyName()!=null){
                user1 = userRepository.findAllByUserName(agencyPojo.getAgencyName());
            }
            if(user1==null) {
                user.setPasswordUser(agencyPojo.getAgPassword());
                user.setUserName(agencyPojo.getUserName());
                user.setAgencyId(agency.getAgId());
                user.setUserRole(agencyPojo.getRoleName());
                user.setCountry(agencyPojo.getCountry());
                user.setState(agencyPojo.getState());
                user.setFirstName(agencyPojo.getAgencyName());
                user.setCity(agencyPojo.getCity());
                user.setEmail(agencyPojo.getEmail());
                user.setPhone(agencyPojo.getAgPhone());
                user.setAddress(agencyPojo.getAgencyAddress());
                user.setParent(agencyPojo.getParent());
                user.setZipCode(agencyPojo.getZipCode());
                UserRole userRole = userRoleRepository.findByRoleName(agencyPojo.getRoleName());
                user.setUserAccessRights(userRole.getUserAccessRights());
                if(!StringUtils.isEmpty(userRole.getPermissions())) {
                    user.setPermissions(userRole.getPermissions());
                }
                userRepository.save(user);
            }
            return agency;
        } else {
            return null;
        }
    }
//    public List<AgencyPojo> getagencyListBasedOnFranchise(String userName) {
//        User user = userRepository.findAllByUserName(userName);
//        List<Agency> agencyList = new ArrayList<>();
//        if(user.getFranId()!=null){
//            agencyList = agencyRepository.findAllByFranName(String.valueOf(user.getFranId()));
//        }else if(StringUtils.isEmpty(user.getParent())){
//            agencyList = agencyRepository.findAll();
//        }
//        List<AgencyPojo> agencyList1 = HiposMapper.mapagencyEntityToPojo(agencyList);
//        return agencyList1;
//    }

    public List<AgencyPojo> getAgencyList(){
        List<Agency> agencyList = agencyRepository.findAll();
        List<AgencyPojo> agencyList1 = HiposMapper.mapagencyEntityToPojo(agencyList);
        return agencyList1;
    }
    public List<CallStatusMasterPojo> getCallStatusList(){
        List<CallStatusMaster> callStatusMasterList = callStatusRepository.findAll();
        List<CallStatusMasterPojo> callStatusMasterPojoList = HiposMapper.mapCallStatusEntityToPojo(callStatusMasterList);
        return callStatusMasterPojoList;
    }
    public List<PopupPojo> getPopupList(){
        List<Popup> popupList = popupRepository.findAll();
        List<PopupPojo> popupPojos = HiposMapper.mapPopupEntityToPojo(popupList);
        return popupPojos;
    }
    public EnquiryFormDetailsPojo AddCallEnquiry(Long id) {
        EnquiryFormDetailsPojo enquiryFormDetailsPojo = new EnquiryFormDetailsPojo();
        EnquiryFormDetails enquiryFormDetails = new EnquiryFormDetails();
        List<EnquiryFormDetails> enquiryFormDetailsList = enquiryFormDetailsRepository.findAllByEnquiryFormId(id);
        enquiryFormDetails = enquiryFormDetailsList.get(enquiryFormDetailsList.size()-1);
            enquiryFormDetailsPojo.setId(enquiryFormDetails.getId());
            enquiryFormDetailsPojo.setCountry(enquiryFormDetails.getCountry());
            enquiryFormDetailsPojo.setState(enquiryFormDetails.getState());
            enquiryFormDetailsPojo.setCity(enquiryFormDetails.getCity());
            enquiryFormDetailsPojo.setFirstName(enquiryFormDetails.getFirstName());
            enquiryFormDetailsPojo.setLastName(enquiryFormDetails.getLastName());
            enquiryFormDetailsPojo.setCallerLocation(enquiryFormDetails.getCallerLocation());
            enquiryFormDetailsPojo.setEmail(enquiryFormDetails.getEmail());
            enquiryFormDetailsPojo.setSpecialRequirements(enquiryFormDetails.getSpecialRequirements());
            enquiryFormDetailsPojo.setPhoneNumber(enquiryFormDetails.getPhoneNumber());
            enquiryFormDetailsPojo.setAddress1(enquiryFormDetails.getAddress1());
            enquiryFormDetailsPojo.setAddress2(enquiryFormDetails.getAddress2());
            enquiryFormDetailsPojo.setCallinfo(enquiryFormDetails.getCallinfo());
            enquiryFormDetailsPojo.setCallStatus(enquiryFormDetails.getCallStatus());
            enquiryFormDetailsPojo.setEnquiryDate(enquiryFormDetails.getEnquiryDate());
            enquiryFormDetailsPojo.setEnquiryNo(enquiryFormDetails.getEnquiryNo());
            enquiryFormDetailsPojo.setSourceOfEnquiry(enquiryFormDetails.getSourceOfEnquiry());
            enquiryFormDetailsPojo.setTypeOfEnquiry(enquiryFormDetails.getTypeOfEnquiry());
            enquiryFormDetailsPojo.setServiceType(enquiryFormDetails.getServiceType());
            enquiryFormDetailsPojo.setServiceLocation(enquiryFormDetails.getServiceLocation());
            enquiryFormDetailsPojo.setServiceTypeDetails(enquiryFormDetails.getServiceTypeDetails());
            enquiryFormDetailsPojo.setEnquiryForm(enquiryFormDetails.getEnquiryForm());
            enquiryFormDetailsPojo.setZipcode(enquiryFormDetails.getZipcode());
            enquiryFormDetailsPojo.setEnqformId(enquiryFormDetails.getEnquiryForm().getId());
//        }
        return enquiryFormDetailsPojo;
    }
    public List<EnquiryFormPojo> getEnquiryFormList(String user) {
        List<EnquiryForm> enquiryFormList = enquiryFormRepository.findAllByUser(user);
        if(StringUtils.pathEquals(user,"admin")){
            enquiryFormList = enquiryFormRepository.findAll();
        }
        List<EnquiryFormPojo> enquiryFormPojoList = ObjectMapperUtils.mapAll(enquiryFormList, EnquiryFormPojo.class);
        return enquiryFormPojoList;
    }


    public  List<Map<String, Object>> getFormList(String tablename) throws Exception{
        List<CreatePage> createPageList = createPageRepository.findAllByModuleNameAndSubmoduleNameNullAndPageNameNull(tablename.toLowerCase());
        if(createPageList.size()==0){
            createPageList = createPageRepository.findAllBySubmoduleNameAndPageNameNull(tablename.toLowerCase());
            if (createPageList.size()==0){
                createPageList = createPageRepository.findByPageName(tablename.toLowerCase());
            }
        }
        List<Map<String, Object>> rows = new ArrayList<Map<String, Object>>();
        Class.forName("com.mysql.jdbc.Driver");
        String db_url = dataBaseCreds.getDB_URL();
        String database = db_url.substring(db_url.lastIndexOf("/") + 1, db_url.indexOf("?"));
        Statement stmt = null;
        Connection con = DriverManager.getConnection(db_url,
                dataBaseCreds.getDB_USERNAME(),
                dataBaseCreds.getDB_PASSWORD());
        stmt = con.createStatement();

        if(createPageList.size()>0) {
            String getList = " SELECT * FROM  " + database + "." + tablename.replaceAll("[^a-zA-Z]+","");
            ResultSet rs = stmt.executeQuery(getList);
            ResultSetMetaData metaData = rs.getMetaData();
            int columnCount = metaData.getColumnCount();

            while (rs.next()) {
                Map<String, Object> columns = new LinkedHashMap<String, Object>();

                for (int i = 1; i <= columnCount; i++) {
                    columns.put(metaData.getColumnLabel(i), rs.getObject(i));
                }
                rows.add(columns);
            }
        }
        return rows;
    }
    @Transactional
    public Service saveServiceDetails(ServicePojo servicePojo) {
        Service service =null;
        if (servicePojo.getsId() != null) {
            service = serviceRepository.findAllByNameAndSIdNotIn(servicePojo.getName(),servicePojo.getsId());
        } else {
            service = serviceRepository.findAllByName(servicePojo.getName());
        }
        if (service == null) {
            service = HiposMapper.mapServicePojoToEnity(servicePojo);
            serviceRepository.save(service);
            return service;
        } else {
            return null;
        }
    }

    public UserPojo  userValidate(UserPojo sassUserPojo) {
        UserPojo userPojo = new UserPojo();
        AgencyPojo agencyPojo = new AgencyPojo();
        User user = userRepository.findAllByUserNameAndPasswordUser(sassUserPojo.getUserName(),sassUserPojo.getPasswordUser());
        if (user != null) {
            userPojo.setUserName(user.getUserName());
            userPojo.setPasswordUser(user.getPasswordUser());
            userPojo.setReTypePswd(user.getReTypePswd());
            userPojo.setStatus1("true");
            return userPojo;
        }
        return null;
    }
    public User saveUser(UserPojo userPojo){
        User user = new User();
        if (userPojo.getUserId()!= null) {
            user = userRepository.findAllByFirstNameAndUserIdNotIn(userPojo.getUserName(),userPojo.getUserId());
        } else {
            user = userRepository.findAllByFirstName(userPojo.getUserName());

        }
        if (user == null) {
            if(userPojo.getParent()!=null){

                user=userRepository.findAllByUserName(userPojo.getParent());
                userPojo.setFranId(user.getFranId());
                userPojo.setAgencyId(user.getAgencyId());
            }
            user = HiposMapper.MapPojoToEntity(userPojo);

            UserRole userRole = userRoleRepository.findByRoleName(userPojo.getUserRole());
            user.setUserAccessRights(userRole.getUserAccessRights());
            if(!StringUtils.isEmpty(userRole.getPermissions())) {
                user.setPermissions(userRole.getPermissions());
            }
            userRepository.save(user);
            return user;
        } else {
            return null;
        }
    }


    public List<ServicePojo> getServiceList(String search) {
        List<Service> list = new ArrayList<>();
        if (org.apache.commons.lang3.StringUtils.isEmpty(search)) {
            list = serviceRepository.findAll();
        } else {
            list = serviceRepository.findByName(search);
        }
        List<ServicePojo> servicePojos = HiposMapper.mapServiceEntityToPojo(list);
        return servicePojos;
    }
    public List<SchDocumentPojo> getDocumentList(String search) {
        List<SchDocument> list = new ArrayList<>();
        if (org.apache.commons.lang3.StringUtils.isEmpty(search)) {
            list = schDocumentRepository.findAll();
        } else {
            list = schDocumentRepository.findByDocumentName(search);
        }
        List<SchDocumentPojo> servicePojos = HiposMapper.mapSchDocumnetEntityToPojo(list);
        return servicePojos;
    }
    public List<UserPojo> getUserAssignedList(String user) {
        List<User> list = new ArrayList<>();
            list = userRepository.findAllByParent(user);
        List<UserPojo> userPojos = HiposMapper.mapUserEntityToPojo(list);
        return userPojos;
    }
    public List<UserPojo> getUserListBasedOnParent(String userName) {
        List<User> userList = userRepository.findByUserName(userName);
        List<UserPojo> userPojos = new ArrayList<>();
        for (User user :userList){
            if(StringUtils.isEmpty(user.getParent())){
                userList = userRepository.findAll();
                userPojos = HiposMapper.mapUserEntityToPojo(userList);
            }else {
                List<User> list = userRepository.findAllByParentOrUserName(userName,userName);
                 userPojos = HiposMapper.mapUserEntityToPojo(list);
            }
        }
        return userPojos;
    }




    public List<UserPojo> getUserList(String search) {
        List<User> list = new ArrayList<>();
        if (org.apache.commons.lang3.StringUtils.isEmpty(search)) {
            list = userRepository.findAll();
        } else {
            list = userRepository.findByFirstName(search);
        }
        List<UserPojo> userPojos = HiposMapper.mapUserEntityToPojo(list);
        return userPojos;
    }
    public String sendsms( String contact,String appDate,String appUser,String Date) throws IOException {
        String sentance ="Thank you for contacting Anthyesti Funeral Services Pvt. Ltd. Your order has been initiated for ambulance with the below services"+
        "Date Of Service :"+Date;
//        "Time Of Service :"+ ;
        SmsServer smsServer = new SmsServer();
        smsServer=smsServerRepository.findOne(1L);
        if(smsServer!=null) {
            URL url = new URL( smsServer.getSmsURL() + "?method=sms" + "&api_key=" + smsServer.getApiKey() + "&to=" + contact + "&sender=" + smsServer.getSenderId() + "&message=" + sentance);
            URLConnection conn = url.openConnection();
            conn.getInputStream();
        }
        return null;
    }




    public GeneralSettings SaveGeneralSettings(SettingsPojo details) throws Exception {
        GeneralSettings general = null;
        byte byteArray[];
        String fileName = FileSystemOperations.getImagesDirItem() + File.separator + details.getCompanyName() + ".png";
        List<GeneralSettings> list = settingsRepository.findAll();
        if (list.size() > 0) {
            details.setId(list.get(0).getId());
        }
        if (!org.apache.commons.lang3.StringUtils.isEmpty(details.getAttachFile()) && details.getAttachFile().contains("data:image")) {
            try {
                FileOutputStream fos = new FileOutputStream(fileName);
                byteArray = org.apache.commons.codec.binary.Base64.decodeBase64(details.getAttachFile().split(",")[1]);
                fos.write(byteArray);
                fos.flush();
                fos.close();
                details.setAttachFile(fileName);
            } catch (Exception e) {
                e.printStackTrace();
            }
        } else if (details.getId() != null) {
            GeneralSettings settings = settingsRepository.findById(details.getId());
            Path sourceDirectory = Paths.get(settings.getAttachFile());
            Path targetDirectory = Paths.get(fileName);
//            Files.copy(sourceDirectory, targetDirectory);
            details.setAttachFile(settings.getAttachFile());
        }

        general = HiposMapper.mapSettingsPojoToEntity(details);
        general.setAttachFile(details.getAttachFile());
        settingsRepository.save(general);
        return general;
    }

    public GeneralSettings getGeneralSettingsDetailsList()  {
        GeneralSettings general = null;
        general = settingsRepository.findById(Long.valueOf("1"));
        if (general != null) {
            if (!org.apache.commons.lang3.StringUtils.isEmpty(general.getAttachFile())) {
                if (!general.getAttachFile().equalsIgnoreCase("")) {
                    String imageLocation = FileSystemOperations.getImagesDirItem() + File.separator + general.getCompanyName() + ".png";

                    String fileDirectory = File.separator;
                    if (fileDirectory.equals("\\"))//Windows OS
                        imageLocation = imageLocation.substring(imageLocation.indexOf("\\image")).replaceAll("\\\\", "/");
                    else//Linux or MAC
                        imageLocation = imageLocation.substring(imageLocation.indexOf("/image"));
                    general.setAttachFile(imageLocation);
                }
            }
        }
        return general;
    }

public String sendRenewalsms( String contact,String RestaurantName,String expirydate) throws IOException {
    String sentance ="Hii"+" "+RestaurantName+" "+"your subscription will expire on "+expirydate;
    SmsServer smsServer = new SmsServer();
    smsServer=smsServerRepository.findOne(1L);
    if(smsServer!=null) {
        URL url = new URL( smsServer.getSmsURL() + "?method=sms" + "&api_key=" + smsServer.getApiKey() + "&to=" + contact + "&sender=" + smsServer.getSenderId() + "&message=" + sentance);
        URLConnection conn = url.openConnection();
        conn.getInputStream();
    }
    return null;
}



    public List<ServicePojo> CategoryBasedOnService(String categoryId) {
        List<Service> services = serviceRepository.findAllByCategories(categoryId);
        List<ServicePojo> servicePojoList = HiposMapper.mapServiceEntityToPojo(services);
           return servicePojoList;
    }
    public List<StatePojo> getCountryState(Long countryId) {
        Country country = countryRepository.findAllByCountryId(countryId);
            List<State> list = stateRepository.findByCountryName(country.getCountryName());
        List<StatePojo> stateList = HiposMapper.mapEntityToPojo(list);
        return stateList;

    }

    public List<CityPojo> getStateCity(Long stateId) {
        State state = stateRepository.findAllByStateId(stateId);
        List<City> cityList=new ArrayList<>();
            cityList = cityRepository.findByStateName(state.getStateName());
        List<CityPojo> city = HiposMapper.mapCityEntityToPojo(cityList);
        return city;
    }
    public String generateAGENNo() {
        String enquiryFormNo = null;
        List<Agency> enquiryForm = agencyRepository.findAll();
        if (enquiryForm.size() == 0) {
            enquiryFormNo = "AGEN001";
        } else {
            String form = enquiryForm.get(enquiryForm.size() - 1).getAgencyCode();
            String[] splitForm = form.split("AGEN");
            int formno = Integer.parseInt(splitForm[1]);
            formno = formno + 1;
            enquiryFormNo = String.format("AGEN" + "%03d", formno);
        }
        return enquiryFormNo;
    }
    public UserRole saveRole(UserRolePojo userRolePojo) {
        UserRole userRole = new UserRole();
        if (userRolePojo.getRoleId() != null) {
            userRole = userRoleRepository.findByRoleNameAndRoleIdNotIn(userRolePojo.getRoleName(),userRolePojo.getRoleId());
        } else {
            userRole = userRoleRepository.findByRoleName(userRolePojo.getRoleName());

        }
        if (userRole == null) {
            userRole = HiposMapper.MapUserRolePojoToEntity(userRolePojo);
            userRoleRepository.save(userRole);
            return userRole;
        } else {
            return null;
        }

    }
    public BasePojo getPaginatedUserRoleList(String status, BasePojo basePojo, String searchText) {
        List<UserRole> list = new ArrayList<>();
        basePojo.setPageSize(paginatedConstants);
        Sort sort = new Sort(new Sort.Order(Sort.Direction.DESC, "roleId"));
        if (basePojo.isLastPage() == true) {
            List<UserRole> list1 = new ArrayList<>();
            if (!org.apache.commons.lang3.StringUtils.isEmpty(searchText)) {
                list1 = userRoleRepository.findByRoleStatusAndRoleNameContaining(status, searchText);
            } else {
                list1 = userRoleRepository.findAllByRoleStatus(status);
            }
            int size = list1.size() % paginatedConstants;
            int pageNo = list1.size() / paginatedConstants;
            if (size != 0) {
                basePojo.setPageNo(pageNo);
            } else {
                basePojo.setPageNo(pageNo - 1);
            }
            sort = new Sort(new Sort.Order(Sort.Direction.DESC, "roleId"));
        }
        if (org.apache.commons.lang3.StringUtils.isEmpty(status)) {
            status = "Active";
        }
        UserRole qualification = new UserRole();
        Pageable pageable = new PageRequest(basePojo.getPageNo(), basePojo.getPageSize(), sort);
        if (basePojo.isNextPage() == true || basePojo.isFirstPage() == true) {
            sort = new Sort(new Sort.Order(Sort.Direction.ASC, "roleId"));
        }
        if (!org.apache.commons.lang3.StringUtils.isEmpty(searchText)) {
            qualification = userRoleRepository.findFirstByRoleNameContainingAndRoleStatus(searchText, status, sort);
            list = userRoleRepository.findAllByRoleNameContainingAndRoleStatus(searchText, status, pageable);
        } else {
            qualification = userRoleRepository.findFirstByRoleStatus(status, sort);
            list = userRoleRepository.findByRoleStatus(status, pageable);
        }
        if (list.contains(qualification)) {
            basePojo.setStatus(true);
        } else {
            basePojo.setStatus(false);
        }
        List<UserRolePojo> PojoList = HiposMapper.mapRolePojotoentity(list);
        basePojo = calculatePagination(basePojo, PojoList.size());
        basePojo.setList(PojoList);
        return basePojo;
    }
    public UserRole getUserAccountSetupObj(long userId) {
        UserRole userRole = userRoleRepository.findAllByRoleId(userId);
        return userRole;
    }
    public UserAccessRightsDTO retrieveEditUserAccessRightsByNameOrCode(UserRole userAccObj) {
        UserAccessRights userAccessRights = userAccessRightsRepository.findOne(userAccObj.getUserAccessRights().getId());
        UserAccessRightsDTO accessRightsDTO=ObjectMapperUtils.map(userAccessRights,UserAccessRightsDTO.class);
        accessRightsDTO.setId(userAccessRights.getId());
        return accessRightsDTO;
    }

    public UserAccessRightsDTO createSaveUserAccessRights(UserAccessRightsDTO saveAccessRights,Long id) {
        UserAccessRightsDTO userAccessRights = saveUserAccessRights(saveAccessRights,id);
        return userAccessRights;
    }

    public EnquiryForm assignToUser(String name,Long id){
        EnquiryForm enquiryForm = enquiryFormRepository.findAllById(id);
        enquiryForm.setUser(name);
        enquiryForm.setAssignstatus("Assigned");
        enquiryFormRepository.save(enquiryForm);
    return enquiryForm;
    }
    public UserPojo getUserObject(String name){
        UserPojo userPojo = new UserPojo();
        User user = userRepository.findAllByUserName(name);
        userPojo.setUserId(user.getUserId());
        userPojo.setUserName(user.getUserName());
        userPojo.setPermissions(user.getPermissions());
        userPojo.setUserAccessRights(user.getUserAccessRights());
        return userPojo;
    }


    public UserAccessRightsDTO saveUserAccessRights(UserAccessRightsDTO saveUserAccountSetupDetails,Long id) {
        try {
            UserRole userRole = userRoleRepository.findAllByRoleId(id);
//            UserAccountSetup userAccountSetup = userAccountSetupRepository.findOne(Integer.parseInt(saveUserAccountSetupDetails.getUserAccountSetupID()));
            UserAccessRights userAccessRights = userAccessRightsRepository.findOne(userRole.getUserAccessRights().getId());
            userAccessRights.setHr(saveUserAccountSetupDetails.isHr());
            userAccessRights.setOrderList(saveUserAccountSetupDetails.isOrderList());
            userAccessRights.setRestaurant(saveUserAccountSetupDetails.isRestaurant());
            userAccessRights.setEnqAdd(saveUserAccountSetupDetails.isEnqAdd());
            userAccessRights.setEnqAssign(saveUserAccountSetupDetails.isEnqAssign());
            userAccessRights.setEnqDelete(saveUserAccountSetupDetails.isEnqDelete());
            userAccessRights.setEnqMore(saveUserAccountSetupDetails.isEnqMore());
            userAccessRights.setCreatepage(saveUserAccountSetupDetails.isCreatepage());
            userAccessRights.setModule(saveUserAccountSetupDetails.isModule());
            userAccessRights.setSubmodule(saveUserAccountSetupDetails.isSubmodule());
            userAccessRights.setCurrency(saveUserAccountSetupDetails.isCurrency());
            userAccessRights.setEmailServer(saveUserAccountSetupDetails.isEmailServer());
            userAccessRights.setSmsServer(saveUserAccountSetupDetails.isSmsServer());
            userAccessRights.setTypeOfEnq(saveUserAccountSetupDetails.isTypeOfEnq());
            userAccessRights.setSourceOfEnq(saveUserAccountSetupDetails.isSourceOfEnq());
            userAccessRights.setServiceType(saveUserAccountSetupDetails.isServiceType());
            userAccessRights.setServiceLocation(saveUserAccountSetupDetails.isServiceLocation());
            userAccessRights.setSupplier(saveUserAccountSetupDetails.isSupplier());
            userAccessRights.setCallStatus(saveUserAccountSetupDetails.isCallStatus());
            userAccessRights.setEnqEdit(saveUserAccountSetupDetails.isEnqEdit());
            userAccessRights.setEnqConfirmEnquiry(saveUserAccountSetupDetails.isEnqConfirmEnquiry());
            userAccessRights.setEnqAddcall(saveUserAccountSetupDetails.isEnqAddcall());
            userAccessRights.setEnqUpload(saveUserAccountSetupDetails.isEnqUpload());
            userAccessRights.setServices(saveUserAccountSetupDetails.isServices());
            userAccessRights.setClient(saveUserAccountSetupDetails.isClient());
            userAccessRights.setReports(saveUserAccountSetupDetails.isReports());
            userAccessRights.setAgencyMaster(saveUserAccountSetupDetails.isAgencyMaster());
            userAccessRights.setLists(saveUserAccountSetupDetails.isLists());
            userAccessRights.setMasters(saveUserAccountSetupDetails.isMasters());
            userAccessRights.setUsers(saveUserAccountSetupDetails.isUsers());
            userAccessRights.setSettings(saveUserAccountSetupDetails.isSettings());
            userAccessRights.setCountry(saveUserAccountSetupDetails.isCountry());
            userAccessRights.setState(saveUserAccountSetupDetails.isState());
            userAccessRights.setCity(saveUserAccountSetupDetails.isCity());
            userAccessRights.setCurrency(saveUserAccountSetupDetails.isCurrency());
            userAccessRights.setPayment(saveUserAccountSetupDetails.isPayment());
            userAccessRights.setService(saveUserAccountSetupDetails.isService());
            userAccessRights.setProduct(saveUserAccountSetupDetails.isProduct());
            userAccessRights.setUserRole(saveUserAccountSetupDetails.isUserRole());
            userAccessRights.setActivity(saveUserAccountSetupDetails.getActivity());
            userAccessRights.setFranchise(saveUserAccountSetupDetails.isFranchise());
            userAccessRights.setInvoice(saveUserAccountSetupDetails.isInvoice());
            userAccessRights.setRemark(saveUserAccountSetupDetails.isRemark());
            userAccessRights.setAppointment(saveUserAccountSetupDetails.isAppointment());
            userAccessRights.setSelectbox(saveUserAccountSetupDetails.isSelectbox());
            userAccessRights.setMoreDetails(saveUserAccountSetupDetails.isMoreDetails());
            userAccessRights.setConfiguration(saveUserAccountSetupDetails.isConfiguration());
            userAccessRights.setAddClient(saveUserAccountSetupDetails.isAddClient());
            userAccessRights.setExcel(saveUserAccountSetupDetails.isExcel());
            userAccessRights.setDataimport(saveUserAccountSetupDetails.isDataimport());
            userAccessRights.setResRemarks(saveUserAccountSetupDetails.isResRemarks());
            userAccessRights.setTaskCompletion(saveUserAccountSetupDetails.isTaskCompletion());
            userAccessRights.setListingpage(saveUserAccountSetupDetails.isListingpage());


            userAccessRightsRepository.save(userAccessRights);
        } catch (HibernateException e) {
            e.printStackTrace();
        }
        return saveUserAccountSetupDetails;
    }

//    public void download(OutputStream outputStream,Long id){
//        Restaurant restaurant = restaurantRepository.findAllByRid(id);
//        if(restaurant.getFile()!=null){
//
//        }
//    };


    public UserAccessRights addUserAccessRights(UserRolePojo userRolePojo){
        UserAccessRights userAccessRights=new UserAccessRights();
        userAccessRights.setHr(true);
        userAccessRights.setServices(true);
        userAccessRights.setRestaurant(true);
        userAccessRights.setEnqUpload(true);
        userAccessRights.setEnqDelete(true);
        userAccessRights.setEnqAdd(true);
        userAccessRights.setEnqAssign(true);
        userAccessRights.setEnqMore(true);
        userAccessRights.setOrderList(true);
        userAccessRights.setLists(true);
        userAccessRights.setUsers(true);
        userAccessRights.setMasters(true);
        userAccessRights.setSettings(true);
        userAccessRights.setCurrency(true);
        userAccessRights.setCity(true);
        userAccessRights.setTypeOfEnq(true);
        userAccessRights.setServiceLocation(true);
        userAccessRights.setServiceType(true);
        userAccessRights.setEmailServer(true);
        userAccessRights.setSmsServer(true);
        userAccessRights.setCallStatus(true);
        userAccessRights.setSupplier(true);
        userAccessRights.setSourceOfEnq(true);
        userAccessRights.setCountry(true);
        userAccessRights.setPayment(true);
        userAccessRights.setProduct(true);
        userAccessRights.setService(true);
        userAccessRights.setUserRole(true);
        userAccessRights.setCurrency(true);
        userAccessRights.setClient(true);
        userAccessRights.setReports(true);
        userAccessRights.setAgencyMaster(true);
        userAccessRights.setFranchise(true);
        userAccessRights.setAppointment(true);
        userAccessRights.setRemark(true);
        userAccessRights.setInvoice(true);
        userAccessRights.setSelectbox(true);
        userAccessRights.setMoreDetails(true);
        userAccessRights.setConfiguration(true);
        userAccessRights.setAddClient(true);
        userAccessRights.setDataimport(true);
        userAccessRights.setExcel(true);
        userAccessRights.setTaskCompletion(true);
        userAccessRights.setResRemarks(true);
        userAccessRights.setListingpage(true);
        userAccessRights.setActivity(userRolePojo.getUserAccessRights().getActivity());

        userAccessRightsRepository.save(userAccessRights);
        return  userAccessRights;
    }

    @Transactional
    public UserRole createSaveUserAccountSetupDetails(UserRolePojo userRolePojo) throws Exception {
        UserRole userRole = new UserRole();
        userRole.setRoleName(userRolePojo.getRoleName());
        userRole.setRoleStatus(userRolePojo.getRoleStatus());
        UserAccessRights userAccessRights = new UserAccessRights();
        userAccessRights.setHr(true);
        userAccessRights.setSettings(true);
        userAccessRights.setUsers(true);
        userAccessRights.setOrderList(true);
        userAccessRights.setServices(true);
        userAccessRights.setRestaurant(true);
        userAccessRights.setEnqAssign(true);
        userAccessRights.setEnqAdd(true);
        userAccessRights.setEnqMore(true);
        userAccessRights.setCreatepage(true);
        userAccessRights.setSubmodule(true);
        userAccessRights.setModule(true);
        userAccessRights.setTypeOfEnq(true);
        userAccessRights.setServiceLocation(true);
        userAccessRights.setServiceType(true);
        userAccessRights.setEmailServer(true);
        userAccessRights.setSmsServer(true);
        userAccessRights.setCallStatus(true);
        userAccessRights.setSupplier(true);
        userAccessRights.setSourceOfEnq(true);
        userAccessRights.setEnqDelete(true);
        userAccessRights.setEnqUpload(true);
        userAccessRights.setMasters(true);
        userAccessRights.setLists(true);
        userAccessRights.setCountry(true);
        userAccessRights.setState(true);
        userAccessRights.setCity(true);
        userAccessRights.setCurrency(true);
        userAccessRights.setProduct(true);
        userAccessRights.setPayment(true);
        userAccessRights.setService(true);
        userAccessRights.setUserRole(true);
        userAccessRights.setClient(true);
        userAccessRights.setReports(true);
        userAccessRights.setAgencyMaster(true);
        userAccessRights.setFranchise(true);
        userAccessRights.setAppointment(true);
        userAccessRights.setRemark(true);
        userAccessRights.setInvoice(true);
        userAccessRights.setMoreDetails(true);
        userAccessRights.setSelectbox(true);
        userAccessRights.setDataimport(true);
        userAccessRights.setExcel(true);
        userAccessRights.setAddClient(true);
        userAccessRights.setConfiguration(true);
        userAccessRights.setTaskCompletion(true);
        userAccessRights.setResRemarks(true);
        userAccessRights.setListingpage(true);
        if(userRolePojo.getRoleId()!=null){
            userRole=userRoleRepository.findAllByRoleId(userRolePojo.getRoleId());
            userRole.setRoleName(userRolePojo.getRoleName());
            userRole.setRoleStatus(userRolePojo.getRoleStatus());
            userRole.setRoleId(userRolePojo.getRoleId());
            userRole.setUserAccessRights(userRolePojo.getUserAccessRights());

        }
        if (userRolePojo.getUserAccessRights() != null) {
            userAccessRights.setActivity(userRolePojo.getUserAccessRights().getActivity());
        }
        userAccessRightsRepository.save(userAccessRights);
        userRole.setUserAccessRights(userAccessRights);
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
        Gson gson= new Gson();
        userRole.setPermissions(gson.toJson(allCreatePageMap));
        userRoleRepository.save(userRole);
        return userRole;
    }

    public UserAccessRights saveOrUpDateUserAccessRights(UserRolePojo userRolePojo) {
        UserAccessRights userAccessRights = new UserAccessRights();
        try {
            UserAccessRights saveUserAccountSetupDetails = userAccessRightsRepository.findOne(1L);
            if(saveUserAccountSetupDetails==null){
                saveUserAccountSetupDetails=addUserAccessRights(userRolePojo);
                UserRole userAccountSetup=userRoleRepository.findOne(1L);
                userAccountSetup.setUserAccessRights(saveUserAccountSetupDetails);
                userRoleRepository.save(userAccountSetup);
            }
            UserAccessRightsDTO userAccessRightdto=ObjectMapperUtils.map(saveUserAccountSetupDetails,UserAccessRightsDTO.class);
            userAccessRights=ObjectMapperUtils.map(userAccessRightdto,UserAccessRights.class);
            userAccessRights.setUserAccountSetupID(userRolePojo.getRoleName());
            userAccessRightsRepository.save(userAccessRights);
        } catch (HibernateException e) {
            e.printStackTrace();
        }
        return userAccessRights;
    }


    public UserRolePojo retrieveEditUserAccessRightsByNameOrCode(Long id) {
        UserRole userRole = userRoleRepository.findAllByRoleId(id);
        UserRolePojo userPojo = new UserRolePojo();
        userPojo.setUserAccessRights(userRole.getUserAccessRights());
        userPojo.setRoleName(userRole.getRoleName());
        userPojo.setRoleStatus(userRole.getRoleStatus());
        userPojo.setRoleId(userRole.getRoleId());
//        UserAccessRights userAccessRights = new UserAccessRights();
//        userAccessRights.setHr(true);
//        userRole.setUserAccessRights(userAccessRights);
//        userRoleRepository.save(userRole);
//        UserAccessRights userAccessRights = userAccessRightsRepository.findAllById(userRole.getUserAccessRights().getId());
//        UserAccessRightsDTO accessRightsDTO=ObjectMapperUtils.map(userAccessRights,UserAccessRightsDTO.class);
        return userPojo;
    }



    public DiscountPojo saveOffer(DiscountPojo discountPojo){
        String url ="";
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json");
        HttpEntity<String> entity = new HttpEntity<String>(discountPojo.toString(), headers);
        ResponseEntity<String> responseEntity = restTemplate.exchange(url, HttpMethod.POST, entity, String.class);
        String jsonString = responseEntity.getBody();
        return discountPojo;
    }



    public String sendSms(String phoneNumber,String message) {
        try{
            SmsServer smsServer=smsServerRepository.findOne(1L);
            URL url = new URL(smsServer.getSmsURL() + "?method=sms" + "&api_key=" + smsServer.getApiKey() + "&to=" + phoneNumber + "&sender=" + smsServer.getSenderId() + "&message=" + message);
            URLConnection conn = url.openConnection();
            conn.getInputStream();
        }catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }


    public List<SmsServerPojo> getSmsServerList() {
        List<SmsServer> list = smsServerRepository.findAll();
        List<SmsServerPojo> smsServerDTOList = HiposMapper.mapSMSServerEntityToPojo(list);
        return smsServerDTOList;
    }
    public SmsServer saveSMSDetails(SmsServerPojo smsServerDTO) {
        SmsServer smsServer = HiposMapper.mapSMSServerPojoToEntity(smsServerDTO);
        smsServerRepository.save(smsServer);
        return smsServer;
    }
    public List<SmsServerPojo> editSMSDetails() {
        List<SmsServer> smsServer = new ArrayList<>();
        smsServer = smsServerRepository.findAll();
        List<SmsServerPojo> smsServerList = HiposMapper.mapSMSServerEntityToPojo(smsServer);
        return smsServerList;
    }
    public void deleteSMSDetails(Long id) {
        smsServerRepository.delete(id);
    }


    public void zipFiles(String folderToZip, String zipName)throws Exception {
        zipFolder(Paths.get(folderToZip), Paths.get(zipName));
    }
    private void zipFolder(Path sourceFolderPath, Path zipPath) throws Exception {
        ZipOutputStream zos = new ZipOutputStream(new FileOutputStream(zipPath.toFile()));
        Files.walkFileTree(sourceFolderPath, new SimpleFileVisitor<Path>() {
            public FileVisitResult visitFile(Path file, BasicFileAttributes attrs) throws IOException {
                zos.putNextEntry(new ZipEntry(sourceFolderPath.relativize(file).toString()));
                Files.copy(file, zos);
                zos.closeEntry();
                return FileVisitResult.CONTINUE;
            }
        });
        zos.close();
    }



    public static String readDomainName() throws IOException {
        Properties prop = new Properties();
        InputStream in = null;
        try {
            in = HiposService.class.getClassLoader().getResourceAsStream("application.properties");
            prop.load(in);
            in.close();
        } catch (Exception e) {
        } finally {
            in.close();
        }
        return prop.getProperty("rlite_web");
    }
    public static String readQRDomainName() throws IOException {
        Properties prop = new Properties();
        InputStream in = null;
        try {
            in = HiposService.class.getClassLoader().getResourceAsStream("application.properties");
            prop.load(in);
            in.close();
        } catch (Exception e) {
        } finally {
            in.close();
        }
        return prop.getProperty("restaurantQrUrl");
    }
    public String getcuisines() throws Exception {
        JSONObject jsonObject = new JSONObject();
        System.out.println(jsonObject);
        String url = readDomainName() + "/Crm/getcuisines";
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json");
        HttpEntity<String> entity = new HttpEntity<String>( headers);
        ResponseEntity<String> responseEntity = restTemplate.exchange(url, HttpMethod.GET, entity, String.class);
        String jsonString = responseEntity.getBody();
        return jsonString;
    }

    public String getvarietyList() throws Exception{
        String url = readDomainName() + "/Crm/varietyList";
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json");
        HttpEntity<String> entity = new HttpEntity<String>( headers);
        ResponseEntity<String> responseEntity = restTemplate.exchange(url, HttpMethod.POST, entity, String.class);
        String jsonString = responseEntity.getBody();
        return jsonString;
    }
    public String getTypeList() throws Exception{
        String url = readDomainName() + "/Crm/typelist";
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json");
        HttpEntity<String> entity = new HttpEntity<String>( headers);
        ResponseEntity<String> responseEntity = restTemplate.exchange(url, HttpMethod.POST, entity, String.class);
        String jsonString = responseEntity.getBody();
        return jsonString;
    }
    public String getSubTypeList(String type) throws Exception{
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("type_name",type);
        String url = readDomainName() + "/Crm/subtypeList";
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json");
        HttpEntity<String> entity = new HttpEntity<String>(jsonObject.toString(), headers);
        ResponseEntity<String> responseEntity = restTemplate.exchange(url, HttpMethod.POST, entity, String.class);
        String jsonString = responseEntity.getBody();
        return jsonString;
    }

    public String getClientServiceList() throws Exception {
        JSONObject jsonObject = new JSONObject();
        System.out.println(jsonObject);
        String url = readDomainName() + "/Crm/services";
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json");
        HttpEntity<String> entity = new HttpEntity<String>( headers);
        ResponseEntity<String> responseEntity = restTemplate.exchange(url, HttpMethod.GET, entity, String.class);
        String jsonString = responseEntity.getBody();
        return jsonString;
    }
    public String getOrderFacilityList() throws Exception {
        JSONObject jsonObject = new JSONObject();
        System.out.println(jsonObject);
        String url = readDomainName() + "/Crm/getorder_facility";
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json");
        HttpEntity<String> entity = new HttpEntity<String>( headers);
        ResponseEntity<String> responseEntity = restTemplate.exchange(url, HttpMethod.GET, entity, String.class);
        String jsonString = responseEntity.getBody();
        return jsonString;
    }
    public String getcountrywebList() throws Exception {
        JSONObject jsonObject = new JSONObject();
        System.out.println(jsonObject);
        String url = readDomainName() + "/Crm/getcountry";
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json");
        HttpEntity<String> entity = new HttpEntity<String>( headers);
        ResponseEntity<String> responseEntity = restTemplate.exchange(url, HttpMethod.GET, entity, String.class);
        String jsonString = responseEntity.getBody();
        return jsonString;
    }
    public String getStatewebList(String countryId) throws Exception {
        JSONObject jsonObject = new JSONObject();
        System.out.println(jsonObject);
        String url = readDomainName() + "/Crm/getstates?country_id="+ countryId;
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json");
        HttpEntity<String> entity = new HttpEntity<String>( headers);
        ResponseEntity<String> responseEntity = restTemplate.exchange(url, HttpMethod.GET, entity, String.class);
        String jsonString = responseEntity.getBody();
        return jsonString;
    }
    public String getCitywebList(String stateId) throws Exception {
        JSONObject jsonObject = new JSONObject();
        System.out.println(jsonObject);
        String url = readDomainName() + "/Crm/getcity?state_id="+ stateId;
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json");
        HttpEntity<String> entity = new HttpEntity<String>( headers);
        ResponseEntity<String> responseEntity = restTemplate.exchange(url, HttpMethod.GET, entity, String.class);
        String jsonString = responseEntity.getBody();
        return jsonString;
    }
    public String getLocationwebList(String cityId) throws Exception {
        JSONObject jsonObject = new JSONObject();
        System.out.println(jsonObject);
        String url = readDomainName() + "/Crm/getlocation?city_id="+ cityId;
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json");
        HttpEntity<String> entity = new HttpEntity<String>( headers);
        ResponseEntity<String> responseEntity = restTemplate.exchange(url, HttpMethod.GET, entity, String.class);
        String jsonString = responseEntity.getBody();
        return jsonString;
    }
    public String getDiscountwebList() throws Exception {
        JSONObject jsonObject = new JSONObject();
        System.out.println(jsonObject);
        String url = readDomainName() + "/Crm/discount";
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json");
        HttpEntity<String> entity = new HttpEntity<String>( headers);
        ResponseEntity<String> responseEntity = restTemplate.exchange(url, HttpMethod.GET, entity, String.class);
        String jsonString = responseEntity.getBody();
        return jsonString;
    }
    public String getRestypewebList() throws Exception {
        JSONObject jsonObject = new JSONObject();
        System.out.println(jsonObject);
        String url = readDomainName() + "/Crm/getresttype";
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json");
        HttpEntity<String> entity = new HttpEntity<String>(headers);
        ResponseEntity<String> responseEntity = restTemplate.exchange(url, HttpMethod.GET, entity, String.class);
        String jsonString = responseEntity.getBody();
        return jsonString;
    }
    public String gettagswebList() throws Exception {
        JSONObject jsonObject = new JSONObject();
        System.out.println(jsonObject);
        String url = readDomainName() + "/Crm/gettags";
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json");
        HttpEntity<String> entity = new HttpEntity<String>(headers);
        ResponseEntity<String> responseEntity = restTemplate.exchange(url, HttpMethod.GET, entity, String.class);
        String jsonString = responseEntity.getBody();
        return jsonString;
    }



    public static BaseFont getcustomfont() {
        String relativeWebPath = "fonts/arial.ttf";
        return FontFactory.getFont("arial", BaseFont.IDENTITY_H, BaseFont.EMBEDDED, 0.8f, com.lowagie.text.Font.NORMAL, java.awt.Color.BLACK).getBaseFont();
    }




    public SchDocument savedocument(SchDocumentPojo documentPojo){
        SchDocument document = null;
        if(documentPojo.getId()!=null){
            document = schDocumentRepository.findAllByDocumentNameAndIdNotIn(documentPojo.getDocumentName(),documentPojo.getId());
        }else {
            document = schDocumentRepository.findAllByDocumentName(documentPojo.getDocumentName());
        }
        if(document==null){
            document = HiposMapper.mapSchDocumnetPojoToEntity(documentPojo);
            schDocumentRepository.save(document);
            return document;
        }
        else {
            return null;
        }
    }


    public String getAllCategoryList(String restCode,String restConnectId) throws Exception {
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("Restaurant_id", restCode);
        jsonObject.put("location_connect_id", restConnectId);
        System.out.println(jsonObject);
        String url = readDomainName() + "/Litecall/Allcategorylist";
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json");
        HttpEntity<String> entity = new HttpEntity<String>(jsonObject.toString(), headers);
        ResponseEntity<String> responseEntity = restTemplate.exchange(url, HttpMethod.POST, entity, String.class);
        String jsonString = responseEntity.getBody();
        return jsonString;
    }
    public String restLogin(String email,String contact) throws Exception {
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("username", email);
        jsonObject.put("password", contact);
        System.out.println(jsonObject);
        String url = readDomainName() + "/Crm/RestLogin";
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json");
        HttpEntity<String> entity = new HttpEntity<String>(jsonObject.toString(), headers);
        ResponseEntity<String> responseEntity = restTemplate.exchange(url, HttpMethod.POST, entity, String.class);
        String jsonString = responseEntity.getBody();
        return jsonString;
    }
    public String getAllItemList(String searchText,String restCode,String restConnectId) throws Exception {
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("Restaurant_id", restCode);
        jsonObject.put("location_connect_id", restConnectId);
        System.out.println(jsonObject);
        String url = readDomainName() + "/Itemcreator/itemcreatorlist?searchText="+searchText;
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json");
        HttpEntity<String> entity = new HttpEntity<String>(jsonObject.toString(), headers);
        ResponseEntity<String> responseEntity = restTemplate.exchange(url, HttpMethod.POST, entity, String.class);
        String jsonString = responseEntity.getBody();
        return jsonString;
    }
    public String getAllShiftList(String restCode,String restConnectId) throws Exception {
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("Restaurant_id", restCode);
        jsonObject.put("location_connect_id", restConnectId);
        System.out.println(jsonObject);
        String url = readDomainName() + "/Litecall/AllshiftList";
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json");
        HttpEntity<String> entity = new HttpEntity<String>(jsonObject.toString(), headers);
        ResponseEntity<String> responseEntity = restTemplate.exchange(url, HttpMethod.POST, entity, String.class);
        String jsonString = responseEntity.getBody();
        return jsonString;
    }

        public String saveList(ItemCategoryPojo categoryPojo,String restCode,String restConnectId)throws Exception{
            JSONObject jsonObject = new JSONObject();
            List<Map<String,Object>> stringListMap = new ArrayList<>();
            List<Map<String,String>> stringList = new ArrayList<>();
            Type type = new TypeToken<List<Map<String,Object>>>(){}.getType();
            Type type1 = new TypeToken<List<Map<String,String>>>(){}.getType();
            Gson gson = new Gson();
            stringListMap = gson.fromJson(categoryPojo.getList(),type);
            for (Map<String,Object> map:stringListMap){
                stringList = gson.fromJson(gson.toJson(map.get("multipleChoiceList")),type1);
                for (Map<String,String> stringMap:stringList){
                    if (stringMap.get("description")==null){
                        stringMap.put("description","");
                    }
                }
                map.put("multipleChoiceList",stringList);
            }
            jsonObject.put("rest_Code",restCode);
            jsonObject.put("connect_Id",restConnectId);
            jsonObject.put("list",gson.toJson(stringListMap));
            String url = readDomainName() + "/Itemcreator/itemcreatorimport";
            RestTemplate restTemplate = new RestTemplate();
            HttpHeaders headers = new HttpHeaders();
            headers.add("Content-Type", "application/json");
            HttpEntity<String> entity = new HttpEntity<String>(jsonObject.toString(), headers);
            ResponseEntity<String> responseEntity = restTemplate.exchange(url, HttpMethod.POST, entity, String.class);
            String jsonString1 = responseEntity.getBody();
            return jsonString1;
    }

    public String saveMenuCategory(CategoryPojo categoryPojo, String restCode,String restConnectId)throws Exception{
            JSONObject jsonObject = new JSONObject();
            jsonObject.put("Restaurant_id",restCode);
            jsonObject.put("location_connect_id",restConnectId);
            jsonObject.put("name",categoryPojo.getCategoryName());
            if(StringUtils.isEmpty(categoryPojo.getDescription())){
                jsonObject.put("description", "");
            }
            else {
                jsonObject.put("description", categoryPojo.getDescription());
            }
            jsonObject.put("image","");
            jsonObject.put("code",restCode);
            jsonObject.put("category_id","");
            if (org.apache.commons.lang3.StringUtils.equalsIgnoreCase(categoryPojo.getStatus(), "Active")) {
                categoryPojo.setStatus("1");
            } else {
                categoryPojo.setStatus("0");
            }
            jsonObject.put("status",categoryPojo.getStatus());
            String url = readDomainName() + "/Litecall/saveCategory";
            RestTemplate restTemplate = new RestTemplate();
            HttpHeaders headers = new HttpHeaders();
            headers.add("Content-Type", "application/json");
            HttpEntity<String> entity = new HttpEntity<String>(jsonObject.toString(), headers);
            ResponseEntity<String> responseEntity = restTemplate.exchange(url, HttpMethod.POST, entity, String.class);
            String jsonString1 = responseEntity.getBody();
            return jsonString1;
    }
    public String saveShiftTime(CategoryPojo categoryPojo, String restCode,String restConnectId)throws Exception{
            JSONObject jsonObject = new JSONObject();
            jsonObject.put("rest_id",restCode);
            jsonObject.put("location_connect_id",restConnectId);
            jsonObject.put("days",categoryPojo.getDays());
            jsonObject.put("from_time",categoryPojo.getFromTime());
            jsonObject.put("to_time",categoryPojo.getToTime());
            jsonObject.put("openingtype",categoryPojo.getOpeningStatus());
            jsonObject.put("shift_names",categoryPojo.getShiftname());
            if (org.apache.commons.lang3.StringUtils.equalsIgnoreCase(categoryPojo.getStatus(), "Active")) {
                categoryPojo.setStatus("1");
            } else {
                categoryPojo.setStatus("0");
            }
            jsonObject.put("status",categoryPojo.getStatus());
            String url = readDomainName() + "/Crm/importtimming";
            RestTemplate restTemplate = new RestTemplate();
            HttpHeaders headers = new HttpHeaders();
            headers.add("Content-Type", "application/json");
            HttpEntity<String> entity = new HttpEntity<String>(jsonObject.toString(), headers);
            ResponseEntity<String> responseEntity = restTemplate.exchange(url, HttpMethod.POST, entity, String.class);
            String jsonString1 = responseEntity.getBody();
            return jsonString1;
    }


    public String webClick(String phone){
        String url ="http://calite.ozonetel.com/c2capi.html?apiKey="+"sdafsdf"+"&username="+"RAJ"+"&number="+phone+"&did="+"";
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json");
        HttpEntity<String> entity = new HttpEntity<String>(headers);
        ResponseEntity<String> responseEntity = restTemplate.exchange(url, HttpMethod.POST, entity, String.class);
        String jsonString1 = responseEntity.getBody();
        return jsonString1;
    }


    public CallDetails getCallDetails(CallDetailsPojo callDetailsPojo){
        CallDetails callDetails = new CallDetails();
        callDetails.setUcid(callDetailsPojo.getUCID());
        callDetails.setCalledNo(callDetailsPojo.getCalledNo());
        callDetails.setAudioRecordingURL(callDetailsPojo.getAudioRecordingURL());
        callDetails.setCallDuration(callDetailsPojo.getCallDuration());
        callDetails.setCallerId(callDetailsPojo.getCallerID());
        callDetails.setCallStartTime(callDetailsPojo.getCallStartTime());
        callDetails.setCallStatus(callDetailsPojo.getCallStatus());
        callDetails.setCallType(callDetailsPojo.getCallType());
        callDetails.setDepartment(callDetailsPojo.getDepartment());
        callDetails.setDialedNumber(callDetailsPojo.getDialedNumber());
        callDetails.setDialStartTime(callDetailsPojo.getDialStartTime());
        callDetails.setExtn(callDetailsPojo.getExtn());
        callDetails.setDisconnectType(callDetailsPojo.getDisconnectType());
        callDetailsRepository.save(callDetails);
        return callDetails;
    }
}
