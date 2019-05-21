package com.netcracker.sd3.backend.controller;

import com.netcracker.sd3.backend.entity.Task;
import com.netcracker.sd3.backend.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;

@RestController
@RequestMapping("/api/task")
public class TaskController {

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

    @PutMapping(value = "{id}")
    public Task updateTask(@RequestBody Task task){return taskService.update(task);}

    @GetMapping(value = "/page")
    public Page<Task> getTaskOnPage(@RequestParam("page") int page,
                                    @RequestParam("size") int size,
                                    @RequestParam("sort") String sort,
                                    @RequestParam("direction") Sort.Direction direction) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(sort).descending());
        return taskService.getAllInPage(pageable);
    }

    @GetMapping(value = "/assigne",params = "user")
    public Iterable<Task> findByRole(@RequestParam(name = "user") long idUser) {
        return taskService.getAllByAssignee(idUser);
    }
}
