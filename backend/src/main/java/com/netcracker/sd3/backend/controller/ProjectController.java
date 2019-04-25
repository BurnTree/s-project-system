package com.netcracker.sd3.backend.controller;

import com.netcracker.sd3.backend.entity.Project;
import com.netcracker.sd3.backend.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/project/")
public class ProjectController {

    public ProjectService projectService;

    @Autowired
    public ProjectController(ProjectService projectService){this.projectService = projectService;}

    @PostMapping
    public Project newProject(@RequestBody Project project){return projectService.addProject(project);}

    @GetMapping(value = "/{id}")
    public Project findProjectById(@PathVariable(name = "id") Long id){return projectService.findById(id).get();}
}
