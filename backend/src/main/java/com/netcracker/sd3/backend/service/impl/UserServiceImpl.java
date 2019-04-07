package com.netcracker.sd3.backend.service.impl;

import com.netcracker.sd3.backend.entity.UsersEntity;
import com.netcracker.sd3.backend.repositories.UserRepository;
import com.netcracker.sd3.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;

    @Override
    public UsersEntity addUser(UsersEntity user) {
        UsersEntity nUser = userRepository.save(user);

        return nUser;
    }

    @Override
    public UsersEntity getByName(String name) {
        return userRepository.findByName(name);
    }

    @Override
    public List<UsersEntity> getAll() {
        return (List<UsersEntity>) userRepository.findAll();
    }

    @Override
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }


}