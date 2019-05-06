package com.netcracker.sd3.backend.controller;

import com.netcracker.sd3.backend.entity.Task;
import com.netcracker.sd3.backend.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/task")
public class TaskController {
    //todo: посмотреть сохранение
    public TaskService taskService;

    @Autowired
    public TaskController(TaskService taskService) {this.taskService = taskService; }

    @GetMapping(value = "/{id}")
    public Task findTaskById(@PathVariable(name = "id") Long id) {
        return taskService.findById(id).get();
    }

    @GetMapping(value = "/all")
    public Iterable<Task> getAll(){return taskService.getAll();}

    @PostMapping
    public Task newTask(@RequestBody Task task){ return taskService.addTask(task);}
}
