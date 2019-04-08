package com.netcracker.sd3.backend.service.impl;

import com.netcracker.sd3.backend.entity.ProjectEntity;
import com.netcracker.sd3.backend.repositories.ProjectRepository;
import com.netcracker.sd3.backend.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProjectServiceImpl implements ProjectService {
    @Autowired
    ProjectRepository projectRepository;


    @Override
    public ProjectEntity addProject(ProjectEntity project) {
        ProjectEntity nProject = projectRepository.save(project);
        return nProject;
    }

    @Override
    public Optional<ProjectEntity> findById(Long id) {
        return projectRepository.findById(id);
    }

    @Override
    public List<ProjectEntity> getAll() {
        return (List<ProjectEntity>) projectRepository.findAll();
    }

    @Override
    public void deleteProject(Long id) {
        projectRepository.deleteById(id);
    }

}
