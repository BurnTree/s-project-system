package com.netcracker.sd3.backend.service.impl;

import com.netcracker.sd3.backend.entity.Sign;
import com.netcracker.sd3.backend.entity.UsersEntity;
import com.netcracker.sd3.backend.repositories.SignRepository;
import com.netcracker.sd3.backend.repositories.UserRepository;
import com.netcracker.sd3.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;
    @Autowired
    SignRepository signRepository;

    @Override
    public UsersEntity addUser(UsersEntity user) {
        Sign sign = signRepository.save(user.getSign());
        user.setSign(sign);
        UsersEntity nUser = userRepository.save(user);

        return nUser;
    }

    @Override
    public UsersEntity getByName(String name) {
        return userRepository.findByName(name);
    }

    @Override
    public UsersEntity findById(Long id) {
        UsersEntity user = userRepository.findById(id).get();
        Sign sign = signRepository.findById(user.getSign().getId()).get();
        user.setSign(sign);
        return user;
    }

    @Override
    public Iterable<UsersEntity> getAll() {
        return userRepository.findAll();
    }

    @Override
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}