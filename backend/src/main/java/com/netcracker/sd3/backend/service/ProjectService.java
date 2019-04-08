package com.netcracker.sd3.backend.service;

import com.netcracker.sd3.backend.entity.ProjectEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

public interface ProjectService {
    ProjectEntity addProject(ProjectEntity project);
    Optional<ProjectEntity> findById(Long id);
    List<ProjectEntity> getAll();
    void deleteProject(Long id);
}
