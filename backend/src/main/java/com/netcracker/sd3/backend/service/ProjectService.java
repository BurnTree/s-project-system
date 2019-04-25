package com.netcracker.sd3.backend.service;

import com.netcracker.sd3.backend.entity.Project;

import java.util.List;
import java.util.Optional;

public interface ProjectService {
    Project addProject(Project project);
    Optional<Project> findById(Long id);
    List<Project> getAll();
    void deleteProject(Long id);
}
