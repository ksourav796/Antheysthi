package com.hyva.restopos.rest.pojo;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

@Data
public class CallStatusMasterPojo  {
    private Long id;
    private String name;
    private String status;
}
