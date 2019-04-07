package com.netcracker.sd3.backend.service.impl;

import com.netcracker.sd3.backend.repositories.TaskRepository;
import com.netcracker.sd3.backend.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaskServiceImpl implements TaskService {
    @Autowired
    TaskRepository taskRepository;
}
