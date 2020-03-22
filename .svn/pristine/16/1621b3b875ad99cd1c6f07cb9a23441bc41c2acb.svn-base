package com.hyva.restopos.rest.entities;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.Date;

@Data
@Entity
public class CallDetails implements Serializable {
    @Id
    @GenericGenerator(name = "native", strategy = "native")
    @GeneratedValue(strategy = GenerationType.AUTO,generator = "native")
    private Long id;
    private String ucid;
    private String callerId;
    private String CalledNo;
    private Date callStartTime;
    private Date dialStartTime;
    private Date dialEndTime;
    private String disconnectType;
    private String callStatus;
    private int callDuration;
    private String CallType;
    private String audioRecordingURL;
    private String dialedNumber;
    private String department;
    private String extn;
}
