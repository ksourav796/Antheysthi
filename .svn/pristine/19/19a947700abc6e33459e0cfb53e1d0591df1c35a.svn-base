package com.hyva.restopos.rest.repository;

import com.hyva.restopos.rest.entities.Mail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MailRepository extends JpaRepository<Mail,Long> {
    Mail findByUserName(String name);
    Mail findAllByUserNameAndIdNotIn(String name,Long id);
    Mail findAllByUserName(String name);
}
