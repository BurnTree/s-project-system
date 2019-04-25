package com.netcracker.projectsystem.demo.service.impl;

import com.netcracker.projectsystem.demo.models.ProjectModel;
import com.netcracker.projectsystem.demo.service.ProjectService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class ProjectServiceImpl implements ProjectService {

    @Value("${backend.server.url}")
    private String backendServerUrl;

    @Override
    public List<ProjectModel> getAll() {
        return null;/*todo: getall*/
    }

    @Override
    public ProjectModel findById(long id) {
        return null;/*todo: find by id*/
    }

    @Override
    public ProjectModel save(ProjectModel project) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.postForEntity(backendServerUrl+"/api/project", project, ProjectModel.class).getBody();

    }
}
