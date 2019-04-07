package com.netcracker.sd3.backend.controller;

import com.netcracker.sd3.backend.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/project/")
public class ProjectController {

    public ProjectService projectService;

    @Autowired
    public ProjectController(ProjectService projectService){this.projectService = projectService;}
}
