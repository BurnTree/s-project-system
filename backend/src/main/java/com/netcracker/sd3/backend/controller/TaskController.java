package com.netcracker.sd3.backend.controller;

import com.netcracker.sd3.backend.entity.TaskEntity;
import com.netcracker.sd3.backend.repositories.TaskRepository;
import com.netcracker.sd3.backend.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/task/")
public class TaskController {

    public TaskService taskService;

    @Autowired
    public TaskController(TaskService taskService) {this.taskService = taskService; }

    @GetMapping(value = "/{id}")
    public TaskEntity findTaskById(@PathVariable(name = "id") Long id) {
        return taskService.findById(id).get();
    }

    @GetMapping(value = "/all")
    public Iterable<TaskEntity> getAll(){return taskService.getAll();}

    @PostMapping
    public TaskEntity newTask(@RequestBody TaskEntity task){ return taskService.addTask(task);}
}
