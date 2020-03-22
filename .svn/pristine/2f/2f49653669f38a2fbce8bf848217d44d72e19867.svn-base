package com.hyva.restopos.rest.entities;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
public class Subscriptions implements Serializable {


  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long subscriptionId;
  private String subscriptionName;
  private String validity;
  private String status;
  private String subscriptionFor;
  private String users;
  private String companies;
  private double actualPrice;
  private double offerPrice;
  private String version;
  private String permission;
  private String addonPermission;
  private String applicationurl;
  private String application;

  public String getApplication() {
    return application;
  }

  public void setApplication(String application) {
    this.application = application;
  }

  public String getApplicationurl() {
    return applicationurl;
  }

  public void setApplicationurl(String applicationurl) {
    this.applicationurl = applicationurl;
  }

  public Long getSubscriptionId() {
    return subscriptionId;
  }

  public void setSubscriptionId(Long subscriptionId) {
    this.subscriptionId = subscriptionId;
  }

  public String getSubscriptionName() {
    return subscriptionName;
  }

  public void setSubscriptionName(String subscriptionName) {
    this.subscriptionName = subscriptionName;
  }

  public String getValidity() {
    return validity;
  }

  public void setValidity(String validity) {
    this.validity = validity;
  }

  public String getStatus() {
    return status;
  }

  public void setStatus(String status) {
    this.status = status;
  }

  public String getSubscriptionFor() {
    return subscriptionFor;
  }

  public void setSubscriptionFor(String subscriptionFor) {
    this.subscriptionFor = subscriptionFor;
  }

  public String getUsers() {
    return users;
  }

  public void setUsers(String users) {
    this.users = users;
  }

  public String getCompanies() {
    return companies;
  }

  public void setCompanies(String companies) {
    this.companies = companies;
  }

  public double getActualPrice() {
    return actualPrice;
  }

  public void setActualPrice(double actualPrice) {
    this.actualPrice = actualPrice;
  }

  public double getOfferPrice() {
    return offerPrice;
  }

  public void setOfferPrice(double offerPrice) {
    this.offerPrice = offerPrice;
  }

  public String getVersion() {
    return version;
  }

  public void setVersion(String version) {
    this.version = version;
  }

  public String getPermission() {
    return permission;
  }

  public void setPermission(String permission) {
    this.permission = permission;
  }

  public String getAddonPermission() {
    return addonPermission;
  }

  public void setAddonPermission(String addonPermission) {
    this.addonPermission = addonPermission;
  }
}
