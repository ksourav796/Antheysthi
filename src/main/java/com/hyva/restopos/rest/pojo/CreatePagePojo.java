package com.hyva.restopos.rest.pojo;

import lombok.Data;

@Data
public class CreatePagePojo {
 private Long id;
 private String moduleName;
 private String submoduleName;
 private String pageName;
 private String columns;
 private String details;
 private String tableName;

 public String getTableName() {
  return tableName;
 }

 public void setTableName(String tableName) {
  this.tableName = tableName;
 }

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
