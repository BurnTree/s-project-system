package com.netcracker.sd3.backend.service.impl;

import com.netcracker.sd3.backend.repositories.ProjectRepository;
import com.netcracker.sd3.backend.repositories.SignRepository;
import com.netcracker.sd3.backend.repositories.TaskRepository;
import com.netcracker.sd3.backend.repositories.UserRepository;
import com.netcracker.sd3.backend.service.GlobalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GlobalServiceImpl implements GlobalService {

    @Autowired
    ProjectRepository projectRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    SignRepository signRepository;
    @Autowired
    TaskRepository taskRepository;

    @Override
    public String deleteAll() {
        taskRepository.deleteAll();
        projectRepository.deleteAll();
        
        signRepository.deleteAll();
        userRepository.deleteAll();
        return "delete success";
    }
}
