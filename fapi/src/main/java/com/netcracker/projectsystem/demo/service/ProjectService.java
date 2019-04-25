package com.netcracker.projectsystem.demo.service;

import com.netcracker.projectsystem.demo.models.ProjectModel;

import java.util.List;

public interface ProjectService {
    List<ProjectModel> getAll();
    ProjectModel findById(long id);
    ProjectModel save(ProjectModel project);
}
