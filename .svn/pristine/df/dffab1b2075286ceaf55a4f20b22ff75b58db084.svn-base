package com.hyva.restopos.rest.Hiposservice;


import com.hyva.restopos.Quartz.DynamicJob;
import com.hyva.restopos.Quartz.QuartzConfiguration;
import com.hyva.restopos.rest.entities.MailSchedulerData;
import org.apache.commons.lang3.StringUtils;
import org.quartz.JobDataMap;
import org.quartz.JobKey;
import org.quartz.SchedulerException;
import org.quartz.TriggerKey;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.quartz.CronTriggerFactoryBean;
import org.springframework.scheduling.quartz.JobDetailFactoryBean;
import org.springframework.scheduling.quartz.SchedulerFactoryBean;
import org.springframework.stereotype.Component;

@Component
public class SchedulerService {
    public static final String DAILY = "DAILY";
    public static final String YEARLY = "YEARLY";
    @Autowired
    private SchedulerFactoryBean schedFactory;
    public String schedule(MailSchedulerData mailSchedulerData) {
        String scheduled = "Job is Scheduled!!";
        try {
            JobDetailFactoryBean jdfb = QuartzConfiguration.createJobDetail(DynamicJob.class);
            jdfb.setBeanName(getJobDetailName(mailSchedulerData));
            jdfb.afterPropertiesSet();
            JobDataMap jobDataMap = jdfb.getJobDataMap();
            jobDataMap.put("jobData", mailSchedulerData);
            String cronTriggerString =null;
            if(StringUtils.isEmpty(mailSchedulerData.getDocTime())){
                 cronTriggerString = createCronTrigger(mailSchedulerData);
            }
            else{
                cronTriggerString=createCronTrigger1(mailSchedulerData);
            }
            CronTriggerFactoryBean cronTrigger = QuartzConfiguration.createCronTrigger(jdfb.getObject(), cronTriggerString);
            cronTrigger.setBeanName(getTriggerName(mailSchedulerData));
            cronTrigger.afterPropertiesSet();
            unschedule(mailSchedulerData);
            //Register trigger with scheduler
            schedFactory.getScheduler().scheduleJob(jdfb.getObject(), cronTrigger.getObject());
        } catch (Exception e) {
            scheduled = "Could not schedule a job. " + e.getMessage();
        }
        return scheduled;
    }
    public String unschedule(MailSchedulerData mailSchedulerData) {
        String scheduled = "Job is Unscheduled!!";
        TriggerKey tkey = new TriggerKey(getTriggerName(mailSchedulerData));
        JobKey jkey = new JobKey(getJobDetailName(mailSchedulerData));
        try {
            schedFactory.getScheduler().unscheduleJob(tkey);
            schedFactory.getScheduler().deleteJob(jkey);
        } catch (SchedulerException e) {
            scheduled = "Error while unscheduling " + e.getMessage();
        }
        return scheduled;
    }
    private String getJobDetailName(MailSchedulerData mailSchedulerData) {
        if(StringUtils.isEmpty(mailSchedulerData.getDocDate())) {
            return mailSchedulerData.getExpiryDate() + mailSchedulerData.getCode() + "jbdtls";
        }
        else{
            return mailSchedulerData.getFranchiseId() + mailSchedulerData.getrName() + "jbdtls";
        }
    }

    private String getTriggerName(MailSchedulerData mailSchedulerData) {
        if(StringUtils.isEmpty(mailSchedulerData.getDocDate())) {
            return mailSchedulerData.getExpiryDate() + mailSchedulerData.getCode() + "trigger";
        }
        else{
            return mailSchedulerData.getFranchiseId() + mailSchedulerData.getrName() + "trigger";
        }
    }
    private String createCronTrigger(MailSchedulerData mailSchedulerData) {

        String date = String.valueOf(mailSchedulerData.getExpiryDate());
        StringBuilder space = new StringBuilder(" ");
        StringBuilder tempString = new StringBuilder("0");//seconds
        tempString.append(space);
        String[] dt = date.split(" ");
        String[] date1 = dt[0].split("-");
        String[] split = dt[1].split(":");
        tempString.append(split[1]);//appending minutes
        tempString.append(space);
        tempString.append(split[0]);//appending hours;
        tempString.append(space);
        if (mailSchedulerData.getExpiryDate()!=null) {
            tempString.append(date1[0]);//month
            tempString.append(space);
            tempString.append(date1[1]);//date
            tempString.append(space);
            tempString.append("?");
            tempString.append(space);
            tempString.append(date1[2]);//year
        }
        return tempString.toString();
    }

    private String createCronTrigger1(MailSchedulerData mailSchedulerData) {
        String scheduleType = "YEARLY";
        String time = mailSchedulerData.getDocTime();
        String date = mailSchedulerData.getDocDate();
        StringBuilder space = new StringBuilder(" ");
        StringBuilder tempString = new StringBuilder("0");//seconds
        tempString.append(space);
        String[] split = time.split(":");
        String[] date1 = date.split("-");
        tempString.append(split[1]);//appending minutes
        tempString.append(space);
        tempString.append(split[0]);//appending hours;
        tempString.append(space);
        if (scheduleType.equalsIgnoreCase(DAILY)) {
            tempString.append("1/1");//everyDay
            tempString.append(space);
            tempString.append("*");
            tempString.append(space);
            tempString.append("?");
            tempString.append(space);
            tempString.append("*");
        }else if(scheduleType.equalsIgnoreCase(YEARLY)) {
            tempString.append(date1[2]);//month
            tempString.append(space);
            tempString.append(date1[1]);//date
            tempString.append(space);
            tempString.append("?");
            tempString.append(space);
            tempString.append(date1[0]);//year
        }
        return tempString.toString();
    }



}
