package com.netcracker.sd3.backend.controller;

import com.netcracker.sd3.backend.repositories.TaskRepository;
import com.netcracker.sd3.backend.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/task/")
public class TaskController {

    public TaskService taskService;

    @Autowired
    public TaskController(TaskService taskService) {this.taskService = taskService; }

}
