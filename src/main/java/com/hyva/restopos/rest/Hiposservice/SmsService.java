/**
 * Created by harshitha on 18/06/06.
 */
package com.hyva.restopos.rest.Hiposservice;


import com.hyva.restopos.rest.entities.Restaurant;
import com.hyva.restopos.rest.entities.SmsServer;
import com.hyva.restopos.rest.repository.SMSServerRepository;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.URL;
import java.net.URLConnection;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;


@Service
public class SmsService {
    @Autowired
    SMSServerRepository smsServerRepository;

    public String sendSms(String phoneNumber, String message) {
        try {
            List<SmsServer> smsServers = new ArrayList<>();
            smsServers = smsServerRepository.findAll();
            if (smsServers.size() > 0) {
                SmsServer smsServer = smsServers.get(0);
                URL url = new URL(smsServer.getSmsURL() + "?method=sms" + "&api_key=" + smsServer.getApiKey() + "&to=" + phoneNumber + "&sender=" + smsServer.getSenderId() + "&message=" + message);
                URLConnection conn = url.openConnection();
                conn.getInputStream();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
}
