package com.hyva.restopos.rest.pojo;

import lombok.Data;

import java.util.Date;
@Data
public class CallDetailsPojo {

    private String UCID;
    private String CallerID;
    private String CalledNo;
    private Date CallStartTime;
    private Date DialStartTime;
    private Date DialEndTime;
    private String DisconnectType;
    private String CallStatus;
    private int CallDuration;
    private String CallType;
    private String AudioRecordingURL;
    private String DialedNumber;
    private String Department;
    private String Extn;
}
