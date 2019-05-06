package com.netcracker.projectsystem.demo.controllers;

import com.netcracker.projectsystem.demo.models.TaskModel;
import com.netcracker.projectsystem.demo.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/task")
public class TaskController {

    public TaskService taskService;

    @Autowired
    public TaskController(TaskService taskService) {this.taskService = taskService; }

    @GetMapping(value = "/all")
    public ResponseEntity getAllTask(){
        return ResponseEntity.ok(taskService.getAll());
    }

    @GetMapping(value = "/{id}")
    public TaskModel  findTaskById(@PathVariable(name = "id") long id) {
        return taskService.findById(id);
    }

    @PostMapping
    public ResponseEntity<TaskModel> saveTask(@RequestBody TaskModel task) {
        if (task != null) {
            return ResponseEntity.ok(taskService.save(task));
        }
        return null;
    }
}
