package com.netcracker.sd3.backend.repositories;

import com.netcracker.sd3.backend.entity.ProjectEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends CrudRepository<ProjectEntity,Long> {
}
