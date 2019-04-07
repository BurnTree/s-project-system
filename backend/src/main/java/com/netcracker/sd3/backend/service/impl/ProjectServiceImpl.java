package com.netcracker.sd3.backend.service.impl;

import com.netcracker.sd3.backend.repositories.ProjectRepository;
import com.netcracker.sd3.backend.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectServiceImpl implements ProjectService {
    @Autowired
    ProjectRepository projectRepository;
}
