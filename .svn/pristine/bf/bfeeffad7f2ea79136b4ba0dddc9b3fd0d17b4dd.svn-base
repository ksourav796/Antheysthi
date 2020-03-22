package com.hyva.restopos.rest.entities;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Data
@Entity
public class Orders implements Serializable {
    @Id
    @GenericGenerator(name = "native", strategy = "native")
    @GeneratedValue(strategy = GenerationType.AUTO,generator = "native")
    private Long sassOrdersId;
    private String dis_key;
    private String companyName;
    private String companyAddress;
    private String companyEmail;
    private String companyLoginId;
    private String companyLoginPassword;
    private String customerName;
    private String customerEmail;
    private String companyPhone;
    private String companyRegistrationNo;
    private String companyGSTno;
    private String  deliveryType;//desktop r cloud
    private String  packagesSASSId;
    private String  companySubscriptionId;
    private String username;
    private String password;
    private String companyNo;
    private String language;
    private String pan;
    private Date incorpDate;
    private Long faxno;
    private String bank;
    private String paymentMethod;
    private Date paymentDate;
    private String amount;
    private String recpNo;
    private String orderId;
    private boolean activated;
    @Column(unique = true)
    private String licenceKey;
    private String  newsletter;
    private String postingStatus;
    @OneToOne
    private Subscriptions sassSubscriptionsId;
//    @OneToOne
//    private SassUser sassUserId;
    private String loginUniqueId;
    private Date loginUniqueIdExpiry;

    @OneToOne
    private Country countryId;
//    @OneToOne
//    private SassCurrency currencyId;
    private Long sassCustomer;
    @OneToOne
    private State stateId;
    private Long orderValue;
//    @OneToOne
//    private Application application;
    private String developerId;
    private String status;
    private Date createdDate;
    private Date expiryDate;
//    @OneToOne
//    private Renew renew;

}
