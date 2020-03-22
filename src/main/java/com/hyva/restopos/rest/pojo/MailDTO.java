package com.hyva.restopos.rest.pojo;

import lombok.Data;

@Data
public class MailDTO {
    private Long id;
    private String userName;
    private String password;
    private String smtpHost;
    private String port;
    private String forMail;
    private String logoUrl;
    private String status;

}
