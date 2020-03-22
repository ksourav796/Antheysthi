package com.hyva.restopos.rest.pojo;

import java.util.Date;

public class ReportsPojo {
    private Long reportsId;
    private String agencyName;
    private String restaurantName;
    private String orderId;
    private Date orderDate;
    private Date renewDate;

    public Long getReportsId() {
        return reportsId;
    }

    public void setReportsId(Long reportsId) {
        this.reportsId = reportsId;
    }

    public String getAgencyName() {
        return agencyName;
    }

    public void setAgencyName(String agencyName) {
        this.agencyName = agencyName;
    }

    public String getRestaurantName() {
        return restaurantName;
    }

    public void setRestaurantName(String restaurantName) {
        this.restaurantName = restaurantName;
    }

    public String getOrderId() {
        return orderId;
    }

    public void setOrderId(String orderId) {
        this.orderId = orderId;
    }

    public Date getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(Date orderDate) {
        this.orderDate = orderDate;
    }

    public Date getRenewDate() {
        return renewDate;
    }

    public void setRenewDate(Date renewDate) {
        this.renewDate = renewDate;
    }
}
