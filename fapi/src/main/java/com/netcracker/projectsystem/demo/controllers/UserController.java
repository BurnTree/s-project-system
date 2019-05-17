package com.netcracker.projectsystem.demo.controllers;

import com.netcracker.projectsystem.demo.models.AuthToken;
import com.netcracker.projectsystem.demo.models.UsersModel;
import com.netcracker.projectsystem.demo.security.TokenProvider;
import com.netcracker.projectsystem.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/user")
public class UserController {
    public UserService userService;

    @Autowired
    public UserController(UserService userService) {this.userService = userService; }

    @GetMapping(value = "/all")
    public ResponseEntity getAllTask(){
        return ResponseEntity.ok(userService.getAll());
    }

    @GetMapping(value = "/{id}")
    public UsersModel  findTaskById(@PathVariable(name = "id") long id) {
        return userService.findById(id);
    }

    @PostMapping
    public ResponseEntity<UsersModel> saveUser(@RequestBody UsersModel user) {
        if (user != null) {
            return ResponseEntity.ok(userService.save(user));
        }
        return null;
    }

    @GetMapping(params = "login")
    public ResponseEntity findByLogin(@RequestParam(name = "login") String login) {
        UsersModel user = userService.findByLogin(login);
        return ResponseEntity.ok(user);
    }

    @GetMapping(value = "/role",params = "role")
    public ResponseEntity findByLogin(@RequestParam(name = "role") int role) {
        return ResponseEntity.ok(userService.getAllByRole(role));
    }
}
