package com.netcracker.projectsystem.demo.controllers;

import com.netcracker.projectsystem.demo.models.ProjectModel;
import com.netcracker.projectsystem.demo.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/project/")
public class ProjectController {

    public ProjectService projectService;

    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @PostMapping
    public ResponseEntity<ProjectModel> saveProject(@RequestBody ProjectModel project) {
        if (project != null) {
            return ResponseEntity.ok(projectService.save(project));
        }
        return null;
    }
}
