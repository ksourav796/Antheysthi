package com.hyva.restopos.rest.repository;

import com.hyva.restopos.rest.entities.EnqSource;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EnqSourceRepository extends JpaRepository<EnqSource,Long> {
    EnqSource findBySourceName(String name);
    EnqSource findByEnqSourceId(Long id);
    EnqSource findAllBySourceNameAndEnqSourceIdNotIn(String name, Long id);
    List<EnqSource> findAllByStatus(String status);

}