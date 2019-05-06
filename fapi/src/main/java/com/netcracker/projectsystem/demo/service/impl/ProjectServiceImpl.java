package com.netcracker.projectsystem.demo.service.impl;

import com.netcracker.projectsystem.demo.models.ProjectModel;
import com.netcracker.projectsystem.demo.service.ProjectService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service
public class ProjectServiceImpl implements ProjectService {

    @Value("${backend.server.url}")
    private String backendServerUrl;

    @Override
    public List<ProjectModel> getAll() {
        RestTemplate restTemplate = new RestTemplate();
        ProjectModel[] projectModels = restTemplate.getForObject(backendServerUrl + "/api/project/all",ProjectModel[].class);
        return projectModels == null ? Collections.emptyList() : Arrays.asList(projectModels);
    }

    @Override
    public ProjectModel findById(long id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(backendServerUrl + "/api/project/" + id, ProjectModel.class);
    }

    @Override
    public ProjectModel save(ProjectModel project) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.postForEntity(backendServerUrl+"/api/project", project, ProjectModel.class).getBody();

    }
}
