package com.netcracker.sd3.backend.controller;

import com.netcracker.sd3.backend.entity.ProjectEntity;
import com.netcracker.sd3.backend.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/project/")
public class ProjectController {

    public ProjectService projectService;

    @Autowired
    public ProjectController(ProjectService projectService){this.projectService = projectService;}

    @PostMapping
    public ProjectEntity newProject(@RequestBody ProjectEntity project){return projectService.addProject(project);}

    @GetMapping(value = "/{id}")
    public ProjectEntity findProjectById(@PathVariable(name = "id") Long id){return projectService.findById(id).get();}
}
