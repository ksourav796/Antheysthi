package com.hyva.restopos.rest.repository;

import com.hyva.restopos.rest.entities.CallStatusMaster;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CallStatusRepository extends JpaRepository<CallStatusMaster,Long> {
    CallStatusMaster findAllByNameAndIdNotIn(String name,Long id);
    CallStatusMaster findAllByName(String name);
}
