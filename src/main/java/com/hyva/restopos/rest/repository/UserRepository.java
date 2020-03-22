package com.hyva.restopos.rest.repository;

import com.hyva.restopos.rest.entities.User;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User,Long> {
    User findAllByUserNameAndPasswordUser(String  userName, String Password);
   User  findAllByFirstName(String  name);
   List<User>  findAllByParent(String  name);
   List<User> findAllByParentOrUserName(String parent,String firstname);
   List<User> findByFirstName(String  name);
    List<User> findByUserName(String name);
     User findAllByUserName(String name);
     User findAllByPhone(String phoneNum);
    User findAllByFirstNameAndUserIdNotIn(String name,Long id);

    List<User>  findAllByUserNameContainingAndStatus(String name,String status);
    List<User>findAllByStatus(String status);
    User findFirstByUserNameContainingAndStatusAndParent(String name, String status, Sort sort,String parentName);
    List<User>findAllByUserNameContainingAndStatusAndParent(String name, String status, Pageable pageable,String parentName);
    User findFirstByStatusAndParent(String status,Sort sort,String name);
   List<User>  findAllByStatusAndParent(String status,Pageable pageable,String name);
}