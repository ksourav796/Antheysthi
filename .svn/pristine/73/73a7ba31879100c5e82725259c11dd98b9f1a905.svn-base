package com.hyva.restopos.rest.Hiposservice;

import com.hyva.restopos.rest.entities.Mail;

import org.apache.commons.lang3.StringUtils;
import org.springframework.messaging.MessagingException;

import javax.activation.DataHandler;
import javax.activation.DataSource;
import javax.activation.FileDataSource;
import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;
import java.io.File;
import java.io.UnsupportedEncodingException;
import java.util.Date;
import java.util.List;
import java.util.Properties;

public class MailService {
    /**
     *
     * @param fromMailProps mail Server Config Properties
     * @param toEmail
     * @param subject
     * @param attachment   The Disk path of attachment
     * @param fileName   Attachment sent with this name if it is null or blank it is extracted from path of the file
     * @return
     * @throws MessagingException
     * @throws UnsupportedEncodingException
     */
    public static String sendMailWithAttachment(final Mail fromMailProps, String toEmail, String senderName,
                                                String subject, String message, String contentType,
                                                byte[] attachment) throws UnsupportedEncodingException, javax.mail.MessagingException {

        MimeMessage mimeMessage = getMimeMessage(fromMailProps);

        mimeMessage.setFrom(new InternetAddress(fromMailProps.getUserName(), senderName));

        mimeMessage.setReplyTo(InternetAddress.parse(fromMailProps.getUserName(), false));

        mimeMessage.setSubject(subject, "UTF-8");

        mimeMessage.setSentDate(new Date());

        Multipart multipart = new MimeMultipart();
        BodyPart messageBody = new MimeBodyPart();
        messageBody.setText(message);

        // Second part is attachment
//        if(fileName!=null){
//        for(String fileNames:fileName) {
//            BodyPart messageBodyPart = new MimeBodyPart();
//            messageBodyPart.setText(message);
//            File file=new File(fileNames);
//            DataSource source = new FileDataSource(file.getAbsoluteFile());
//            messageBodyPart.setDataHandler(new DataHandler(source));
//            messageBodyPart.setFileName(file.getAbsoluteFile().toString());
//            multipart.addBodyPart(messageBodyPart);
//        }}
        multipart.addBodyPart(messageBody);

        mimeMessage.addRecipients(Message.RecipientType.CC, InternetAddress.parse(toEmail, false));
        mimeMessage.setContent(multipart);

        Transport.send(mimeMessage);

        return null;
    }
//    public static String sendMailWithAttachment1(final Mail fromMailProps, String toEmail, String senderName,
//                                                String subject, String mmm, String contentType,
//                                                byte[] attachment,List<String> fileName) throws UnsupportedEncodingException, javax.mail.MessagingException {
//
//        MimeMessage message = getMimeMessage(fromMailProps);
//
//
//// Set Subject: header field
//        message.setSubject("Hiii,Welcome To Eatinng");
//
//// This mail has 2 part, the BODY and the embedded image
//        MimeMultipart multipart = new MimeMultipart("related");
//
//// first part (the html)
//        BodyPart messageBodyPart = new MimeBodyPart();
//        String htmlText = "<H1>Hello</H1><img src=\"cid:image\">";
//        messageBodyPart.setContent(htmlText, "text/html");
//// add it
//        multipart.addBodyPart(messageBodyPart);
//
//// second part (the image)
//        messageBodyPart = new MimeBodyPart();
//        for(String aaa:fileName) {
//            DataSource fds = new FileDataSource(
//                    aaa);
//            messageBodyPart.setDataHandler(new DataHandler(fds));
//        }
//
//
//        messageBodyPart.setHeader("Content-ID", "<image>");
//        message.addRecipients(Message.RecipientType.CC, InternetAddress.parse(toEmail, false));
//
//// add image to the multipart
//        multipart.addBodyPart(messageBodyPart);
//
//// put everything together
//        message.setContent(multipart);
//// Send message
//        Transport.send(message);
//
//        System.out.println("Sent message successfully....");
//        return null;
//
//    }
public static String sendMailWithAttachment1(final Mail fromMailProps, String toEmail, String senderName,
                                             String subject, String mmm, String contentType,
                                             byte[] attachment,List<String> fileName) throws UnsupportedEncodingException, javax.mail.MessagingException {

// Sender's email ID needs to be mentioned
    String from = fromMailProps.getUserName();
    String pass =fromMailProps.getPassword();
// Recipient's email ID needs to be mentioned.
    String to = toEmail;
    String host = fromMailProps.getSmtpHost();
    String port = fromMailProps.getPort();

// Get system properties
    Properties properties = System.getProperties();
// Setup mail server
    properties.put("mail.smtp.starttls.enable", "true");
    properties.put("mail.smtp.host", host);
    properties.put("mail.smtp.user", from);
    properties.put("mail.smtp.password", pass);
    properties.put("mail.smtp.port", port);
    properties.put("mail.smtp.auth", "true");
    Session session = Session.getDefaultInstance(properties);
    try{
        MimeMessage message = new MimeMessage(session);

        message.setFrom(new InternetAddress(from));

        message.addRecipient(Message.RecipientType.TO,
                new InternetAddress(to));
        message.setSubject(subject);
        MimeMultipart multipart = new MimeMultipart("related");
        BodyPart messageBody = new MimeBodyPart();
        String htmlText = "<H1>Hello</H1><img src=\"cid:image\">";
        messageBody.setText(mmm);
        messageBody.setContent(htmlText, "text/html");
        multipart.addBodyPart(messageBody);
        messageBody = new MimeBodyPart();
        DataSource fds = new FileDataSource(fileName.get(0));
        messageBody.setDataHandler(new DataHandler(fds));


        messageBody.setHeader("Content-ID", "<image>");
        message.addRecipients(Message.RecipientType.CC, InternetAddress.parse(toEmail, false));

// add image to the multipart
        multipart.addBodyPart(messageBody);

// put everything together
        message.setContent(multipart);
// Second part is attachment
// if(fileName!=null){
// for(String fileNames:fileName) {
// BodyPart messageBodyPart = new MimeBodyPart();
// messageBodyPart.setText(mmm);
// File file=new File(fileNames);
// DataSource source = new FileDataSource(file.getAbsoluteFile());
// messageBodyPart.setDataHandler(new DataHandler(source));
// messageBodyPart.setFileName(file.getAbsoluteFile().toString());
// multipart.addBodyPart(messageBodyPart);
// }}
// multipart.addBodyPart(messageBody);
// message.setText("This is actual message");
        Transport transport = session.getTransport("smtp");
        transport.connect(host, from, pass);
        message.addRecipients(Message.RecipientType.CC, InternetAddress.parse(toEmail, false));
        message.setContent(multipart);
        transport.sendMessage(message, message.getAllRecipients());
        transport.close();
        System.out.println("Sent message successfully....");
    }catch (MessagingException mex) {
        mex.printStackTrace();
    }
    return null;
}
    private static MimeMessage getMimeMessage(final Mail fromMailProps){
        Properties props = new Properties();
        props.put("mail.smtp.host", fromMailProps.getSmtpHost()); //SMTP Host
        props.put("mail.smtp.port", fromMailProps.getPort()); //TLS Port
        props.put("mail.smtp.auth", "true"); //enable authentication
        props.put("mail.smtp.starttls.enable", "true"); //enable STARTTLS
        props.put("mail.smtp.ssl.trust", "*");

        //create Authenticator object to pass in Session.getInstance argument
        Authenticator auth = new Authenticator() {
            //override the getPasswordAuthentication method
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(fromMailProps.getUserName(), fromMailProps.getPassword());
            }
        };
        Session session = Session.getInstance(props, auth);

        MimeMessage msg = new MimeMessage(session);
        return msg;
    }
}
