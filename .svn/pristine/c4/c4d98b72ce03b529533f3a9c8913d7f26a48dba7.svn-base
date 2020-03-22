package com.hyva.restopos.rest.repository;

import com.hyva.restopos.rest.entities.UserRole;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRoleRepository extends JpaRepository<UserRole,Long> {
    UserRole findByRoleNameAndRoleIdNotIn(String name, Long id);
    UserRole findByRoleName(String name);
    UserRole findAllByRoleId(Long id);
    List<UserRole> findAllByRoleStatus(String status);
    List  <UserRole> findByRoleStatusAndRoleNameContaining(String status, String name);
//    UserRole findByDeductionId(Long id);
    UserRole findFirstByRoleStatus(String status, Sort sort);
    List<UserRole> findByRoleStatus(String status, Pageable pageable);
    UserRole findFirstByRoleNameContainingAndRoleStatus(String name, String status, Sort sort);
    List<UserRole> findAllByRoleNameContainingAndRoleStatus(String name, String status, Pageable pageable);
//    List<UserRole> findAllByDeductionNameContainingAndStatus(String name, String status);

}
