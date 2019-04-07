package com.netcracker.sd3.backend.service;

import com.netcracker.sd3.backend.entity.UsersEntity;
import org.springframework.stereotype.Service;

import java.util.List;

public interface UserService {
    UsersEntity addUser(UsersEntity user);
    UsersEntity getByName(String name);
    List<UsersEntity> getAll();
    void deleteUser(Long id);
}