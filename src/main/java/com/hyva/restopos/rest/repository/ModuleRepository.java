package com.hyva.restopos.rest.repository;

import com.hyva.restopos.rest.entities.Module;
import org.bouncycastle.math.raw.Mod;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ModuleRepository extends JpaRepository<Module,Long> {
    Module findAllByModuleNameAndIdNotIn(String name,Long id);
    Module findAllByModuleName(String name);
    Module findAllById(Long id);
    List<Module> findAllByStatus(String status);
}
