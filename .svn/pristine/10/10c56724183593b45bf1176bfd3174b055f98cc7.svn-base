package com.hyva.restopos.Quartz;


import com.google.gson.Gson;
import com.hyva.restopos.rest.Hiposservice.HiposService;
import com.hyva.restopos.rest.Hiposservice.MailService;
import com.hyva.restopos.rest.Hiposservice.SmsService;
import com.hyva.restopos.rest.entities.*;
import com.hyva.restopos.rest.repository.*;
import com.hyva.restopos.rest.entities.*;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.modelmapper.TypeToken;
import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.MessagingException;
import org.springframework.stereotype.Component;


import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import java.util.Map;


@Component
public class DynamicJob implements Job {
    private final Logger log = Logger.getLogger(getClass());
    @Autowired
    SchDocumentRepository schDocumentRepository;
    @Autowired
    SmsService smsService;
    @Autowired
    HiposService hiposService;
    @Override
    public void execute(JobExecutionContext jobExecutionContext){

        Map<String, Object> mergedJobDataMap = jobExecutionContext.getMergedJobDataMap().getWrappedMap();

        MailSchedulerData schedulerProps = (MailSchedulerData) mergedJobDataMap.get("jobData");
       if(schedulerProps.getDocDate()==null) {
           String sentense = "Dear Customer," + "\n Restaurant amount for  upcoming month has to be paid before the " + schedulerProps.getExpiryDate() + ". \n Ignore if you have paid already.\n\n " +
                   "\neatinng.com";

           ByteArrayOutputStream outputStream = new ByteArrayOutputStream();

       }
       }
    }

