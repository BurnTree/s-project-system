package com.netcracker.projectsystem.demo.controllers;

import com.netcracker.projectsystem.demo.models.UsersModel;
import com.netcracker.projectsystem.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user/")
public class UserController {
    public UserService userService;

    @Autowired
    public UserController(UserService userService) {this.userService = userService; }

   /* @GetMapping(value = "/all")
    public ResponseEntity getAllTask(){
        return ResponseEntity.ok(userService.getAll());
    }
*/

   /*
    @GetMapping(value = "/{id}")
    public TaskModel  findTaskById(@PathVariable(name = "id") long id) {
        return taskService.findById(id);
    }
*/

    @PostMapping
    public ResponseEntity<UsersModel> saveUser(@RequestBody UsersModel user) {
        if (user != null) {
            return ResponseEntity.ok(userService.save(user));
        }
        return null;
    }
}
