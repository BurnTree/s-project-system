package com.netcracker.sd3.backend.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.netcracker.sd3.backend.entity.UsersEntity;
import com.netcracker.sd3.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/user")
public class UserController {
    private UserService userService;

    @Autowired
    public UserController(UserService serService) {this.userService = serService; }

    @GetMapping(value = "/all")
    public Iterable<UsersEntity> getAll() {
        return userService.getAll();
    }

    @PostMapping
    public UsersEntity newUser(@RequestBody UsersEntity account) {
        return userService.addUser(account);
    }

    @GetMapping(value = "/{idUsers}")
    public ResponseEntity<UsersEntity> findUserById(@PathVariable(name = "idUsers") Long idUsers) {
        UsersEntity user = userService.findById(idUsers);
        return ResponseEntity.ok(user);
    }

    @GetMapping(params = "login")
    public ResponseEntity findByLogin(@RequestParam(name = "login") String login) {
        UsersEntity user = userService.findByLogin(login);
        return ResponseEntity.ok(user);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity deleteUser(@PathVariable(name = "id") Long id) {
        userService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }

}