package com.hyva.restopos.rest.Hiposservice;

import com.hyva.restopos.rest.entities.Restaurant;

import java.util.List;
import java.util.Map;

public class PaginatedResponsePojo {
    private boolean first;
    private boolean prev;
    private boolean next;
    private boolean last;
    private boolean status;
    //    private List<AgentPojo> agentListing;
    private Map<String,Double> doubleMap;
    private int PageNo;
    //    private List<SalesReportListResponsePojo> salesReportList;
    private List<Map> mapList;
    private double total;
    private List<Restaurant> dayEndPojos;

    public Map<String, Double> getDoubleMap() {
        return doubleMap;
    }

    public boolean isFirst() {
        return first;
    }

    public void setFirst(boolean first) {
        this.first = first;
    }

    public boolean isPrev() {
        return prev;
    }

    public void setPrev(boolean prev) {
        this.prev = prev;
    }

    public boolean isNext() {
        return next;
    }

    public void setNext(boolean next) {
        this.next = next;
    }

    public boolean isLast() {
        return last;
    }

    public void setLast(boolean last) {
        this.last = last;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public void setDoubleMap(Map<String, Double> doubleMap) {
        this.doubleMap = doubleMap;
    }

    public int getPageNo() {
        return PageNo;
    }

    public void setPageNo(int pageNo) {
        PageNo = pageNo;
    }

    public List<Map> getMapList() {
        return mapList;
    }

    public void setMapList(List<Map> mapList) {
        this.mapList = mapList;
    }

    public double getTotal() {
        return total;
    }

    public void setTotal(double total) {
        this.total = total;
    }

    public List<Restaurant> getDayEndPojos() {
        return dayEndPojos;
    }

    public void setDayEndPojos(List<Restaurant> dayEndPojos) {
        this.dayEndPojos = dayEndPojos;
    }
}
