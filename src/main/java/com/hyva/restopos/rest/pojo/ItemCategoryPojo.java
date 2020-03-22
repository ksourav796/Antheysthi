package com.hyva.restopos.rest.pojo;

import lombok.Data;

import java.util.List;
import java.util.Map;

@Data
public class ItemCategoryPojo {
    private String list;
    private Long rid;
    private List<newItemPojo> multipleChoiceList;
    private String categoryName;

    public List<newItemPojo> getMultipleChoiceList() {
        return multipleChoiceList;
    }

    public void setMultipleChoiceList(List<newItemPojo> multipleChoiceList) {
        this.multipleChoiceList = multipleChoiceList;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public Long getRid() {
        return rid;
    }

    public void setRid(Long rid) {
        this.rid = rid;
    }

    public String getList() {
        return list;
    }

    public void setList(String list) {
        this.list = list;
    }

}
