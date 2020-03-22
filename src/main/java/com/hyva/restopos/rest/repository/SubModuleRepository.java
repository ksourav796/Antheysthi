package com.hyva.restopos.rest.repository;

import com.hyva.restopos.rest.entities.Module;
import com.hyva.restopos.rest.entities.SubModule;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SubModuleRepository extends JpaRepository<SubModule,Long> {
    SubModule findAllByModuleNameAndSubModuleNameAndIdNotIn(String module,String name, Long id);
    SubModule findAllByModuleNameAndSubModuleName(String module,String name);
    List<SubModule> findAllByStatus(String status);
    List<SubModule> findAllByModuleName(String module);

}
