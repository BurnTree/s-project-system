package com.netcracker.sd3.backend.service.impl;

import com.netcracker.sd3.backend.entity.Role;
import com.netcracker.sd3.backend.entity.Sign;
import com.netcracker.sd3.backend.entity.UsersEntity;
import com.netcracker.sd3.backend.repositories.SignRepository;
import com.netcracker.sd3.backend.repositories.UserRepository;
import com.netcracker.sd3.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;
    @Autowired
    SignRepository signRepository;

    @Bean
    BCryptPasswordEncoder encoder() {
        return new BCryptPasswordEncoder();
    }

    @Override
    public UsersEntity addUser(UsersEntity user) {
        Sign sign = signRepository.save(user.getSign());
        sign.setPassword(encoder().encode(user.getSign().getPassword()));
        user.setSign(sign);
        UsersEntity nUser = userRepository.save(user);

        return nUser;
    }

    @Override
    public UsersEntity findById(Long id) {
        UsersEntity user = userRepository.findById(id).get();
        Sign sign = signRepository.findById(user.getSign().getId()).get();
        user.setSign(sign);
        return user;
    }


    @Override
    public UsersEntity findByLogin(String login) {
       Optional<UsersEntity> user = Optional.empty();
       Optional<Sign> sign = signRepository.findByLogin(login);
       user = userRepository.findBySign(sign.get());
       return user.get();
    }

    @Override
    public Iterable<UsersEntity> getAllByRole(long role) {
        return userRepository.findUsersEntitiesByRoleIdRole(role);
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