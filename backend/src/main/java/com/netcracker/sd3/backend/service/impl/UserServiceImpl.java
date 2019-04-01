package com.netcracker.sd3.backend.service.impl;

import com.netcracker.sd3.backend.repositories.UserRepository;
import com.netcracker.sd3.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;

public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;
}
