package com.netcracker.sd3.backend.controller;

import com.netcracker.sd3.backend.entity.UsersEntity;
import com.netcracker.sd3.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/api/user/")
public class UserController {
    private UserService userService;

    @Autowired
    public UserController(UserService serService) {this.userService = serService; }

    @GetMapping(value = "/all")
    public Iterable<UsersEntity> getAll() {
        return userService.getAll();
    }

    @PostMapping
    public UsersEntity saveUser(@RequestBody UsersEntity account) {
        return userService.addUser(account);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity deleteUser(@PathVariable(name = "id") Long id) {
        userService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }

}