package com.hyva.restopos.rest.entities;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
public class CreatePage implements Serializable{
  @Id
  @GenericGenerator(name = "native",strategy = "native")
  @GeneratedValue(strategy =GenerationType.AUTO,generator = "native")
    private Long id;
    private String moduleName;
    private String submoduleName;
    private String pageName;
  @Column(columnDefinition = "blob")
    private String columns;
    @Column(columnDefinition = "blob")
    private String details;

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getModuleName() {
    return moduleName;
  }

  public void setModuleName(String moduleName) {
    this.moduleName = moduleName;
  }

  public String getSubmoduleName() {
    return submoduleName;
  }

  public void setSubmoduleName(String submoduleName) {
    this.submoduleName = submoduleName;
  }

  public String getPageName() {
    return pageName;
  }

  public void setPageName(String pageName) {
    this.pageName = pageName;
  }

  public String getColumns() {
    return columns;
  }

  public void setColumns(String columns) {
    this.columns = columns;
  }

  public String getDetails() {
    return details;
  }

  public void setDetails(String details) {
    this.details = details;
  }
}
