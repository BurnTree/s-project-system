package com.netcracker.projectsystem.demo.service.impl;

import com.netcracker.projectsystem.demo.models.UsersModel;
import com.netcracker.projectsystem.demo.service.UserService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class UserServiceImpl implements UserService {

    @Value("${backend.server.url}")
    private String backendServerUrl;

    @Override
    public UsersModel save(UsersModel user) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.postForEntity(backendServerUrl+"/api/user", user, UsersModel.class).getBody();
    }
}
