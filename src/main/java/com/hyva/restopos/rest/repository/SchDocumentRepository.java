package com.hyva.restopos.rest.repository;

import com.hyva.restopos.rest.entities.SchDocument;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SchDocumentRepository extends JpaRepository<SchDocument,Long> {
    SchDocument findAllByDocumentNameAndIdNotIn(String name,Long id);
   SchDocument  findAllByDocumentName(String name);
   List<SchDocument>  findByDocumentName(String name);
    List<SchDocument> findAllByStatus(String status);
//    List<SchDocument> findAllByAcademicyearAndStatus(AcademicYearMaster academicYearMaster,String status);


}
