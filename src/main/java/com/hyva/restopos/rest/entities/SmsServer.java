/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hyva.restopos.rest.entities;


import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;

/**
 * @author Admin
 */
@Data
@Entity
public class SmsServer implements Serializable {

    @Id
    @GenericGenerator(name = "native", strategy = "native")
    @GeneratedValue(strategy = GenerationType.AUTO,generator = "native")
    private Long messageId;
    @Column(columnDefinition="text")
    private String smsURL;
    @Column(columnDefinition="text")
    private String apiKey;
    private String senderId;

    public Long getMessageId() {
        return messageId;
    }

    public void setMessageId(Long messageId) {
        this.messageId = messageId;
    }

    public String getSmsURL() {
        return smsURL;
    }

    public void setSmsURL(String smsURL) {
        this.smsURL = smsURL;
    }

    public String getApiKey() {
        return apiKey;
    }

    public void setApiKey(String apiKey) {
        this.apiKey = apiKey;
    }

    public String getSenderId() {
        return senderId;
    }

    public void setSenderId(String senderId) {
        this.senderId = senderId;
    }
}
