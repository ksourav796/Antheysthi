package com.hyva.restopos.rest.pojo;

import lombok.Data;

import java.util.List;
import java.util.Map;

@Data
public class newItemPojo {
    private String name;
    private double Price;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return Price;
    }

    public void setPrice(double price) {
        Price = price;
    }
}
