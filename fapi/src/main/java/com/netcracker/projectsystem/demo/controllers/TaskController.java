package com.netcracker.projectsystem.demo.controllers;

import com.netcracker.projectsystem.demo.models.TaskModel;
import com.netcracker.projectsystem.demo.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
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

    @PutMapping(value = "/{id}")
    public ResponseEntity updateTask(@RequestBody TaskModel task)
    {
        taskService.update(task);
        return ResponseEntity.ok(taskService.update(task));
    }

    @RequestMapping(value = "/page", method = RequestMethod.GET)
    public ResponseEntity<Page<TaskModel>> getAllProducts(@RequestParam("page") int page,
                                                          @RequestParam("size") int size,
                                                          @RequestParam("sort") String sort){
        Page<TaskModel> task = taskService.getAllInPage(page, size, sort);
        if (task.getContent() != null) {
            return ResponseEntity.ok(task);
        }else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping(value = "/assignee",params = "user")
    public ResponseEntity getAllTask(@RequestParam(name = "user") long idUser){
        return ResponseEntity.ok(taskService.getAllByAsiignee(idUser));
    }

}
