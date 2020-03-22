package com.hyva.restopos.rest.repository;

import com.hyva.restopos.rest.entities.Popup;
import com.hyva.restopos.rest.entities.ServiceType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PopupRepository extends JpaRepository<Popup,Long> {
    Popup findAllByPopupNameAndIdNotIn(String name,Long id);
    Popup findAllByPopupName(String name);
    List<Popup> findAllByPopupNameContaining(String popupName);
    List<Popup> findAllBy();
}
