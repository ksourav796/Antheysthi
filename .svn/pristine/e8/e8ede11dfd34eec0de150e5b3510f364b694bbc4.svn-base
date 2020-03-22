package com.hyva.restopos.rest.pojo;

import com.hyva.restopos.rest.entities.UserAccessRights;
import lombok.Data;

import javax.persistence.OneToOne;

@Data
public class UserRolePojo {
    private Long roleId;
    private String roleName;
    private String roleStatus;
    @OneToOne
    private UserAccessRights userAccessRights;

    public UserAccessRights getUserAccessRights() {
        return userAccessRights;
    }

    public void setUserAccessRights(UserAccessRights userAccessRights) {
        this.userAccessRights = userAccessRights;
    }

    public Long getRoleId() {
        return roleId;
    }

    public void setRoleId(Long roleId) {
        this.roleId = roleId;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    public String getRoleStatus() {
        return roleStatus;
    }

    public void setRoleStatus(String roleStatus) {
        this.roleStatus = roleStatus;
    }


}
