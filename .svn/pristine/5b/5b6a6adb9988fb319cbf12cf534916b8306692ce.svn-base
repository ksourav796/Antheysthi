package com.hyva.restopos.rest.repository;

import com.hyva.restopos.rest.entities.CreatePage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CreatePageRepository extends JpaRepository<CreatePage,Long> {

    CreatePage findAllByModuleNameAndIdNotIn(String name,Long id);
    CreatePage findAllByModuleName(String name);
    List<CreatePage> findAllByModuleNameAndSubmoduleNameNullAndPageNameNull(String module);
    List<CreatePage> findAllByModuleNameNotNullAndSubmoduleNameNullAndPageNameNull();
    List<CreatePage> findAllByModuleNameNotNullAndSubmoduleNameNotNullAndPageNameNull();
    List<CreatePage> findAllByModuleNameNotNullAndSubmoduleNameNotNullAndPageNameNotNull();
    List<CreatePage> findAllByModuleNameNotNullAndSubmoduleNameNullAndPageNameNotNull();
    CreatePage findAllByPageName(String name);
    List<CreatePage> findAllByModuleNameAndSubmoduleNameNotNull(String module);
    List<CreatePage> findAllByModuleNameAndPageNameNotNull(String module);
    List<CreatePage> findAllBySubmoduleNameAndPageNameNotNull(String submodule);
    CreatePage findAllByModuleNameAndSubmoduleNameNotNullAndPageNameNotNullAndIdNotIn(String module,Long id);
    CreatePage findAllByModuleNameAndSubmoduleNameAndPageNameNotNullAndIdNotIn(String module,String submodule,Long id);
    CreatePage findAllByModuleNameAndSubmoduleNameAndPageNameAndIdNotIn(String module,String submodule,String page,Long id);
    CreatePage findAllByModuleNameAndSubmoduleNameAndPageName(String module,String submodule,String page);
    CreatePage findAllByModuleNameAndSubmoduleNameAndPageNameNotNull(String module,String submodule);
    CreatePage findAllByModuleNameAndSubmoduleNameNotNullAndPageNameNotNull(String module);
    List<CreatePage> findAllBySubmoduleNameAndPageNameNull(String name);
    List<CreatePage> findByPageName(String name);
    List<CreatePage> findAllByModuleNameAndSubmoduleNameAndPageNameNull(String name,String submodule);
}
