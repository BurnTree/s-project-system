package com.netcracker.projectsystem.demo.service;

import com.netcracker.projectsystem.demo.models.UsersModel;

import java.util.List;

public interface UserService {
    List<UsersModel> getAll();
    UsersModel findById(long id);
    UsersModel save(UsersModel user);
    UsersModel findByLogin(String login);
}
