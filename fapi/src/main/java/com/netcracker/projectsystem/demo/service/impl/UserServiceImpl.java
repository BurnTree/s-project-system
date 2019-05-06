package com.netcracker.projectsystem.demo.service.impl;

import com.netcracker.projectsystem.demo.models.UsersModel;
import com.netcracker.projectsystem.demo.service.UserService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.*;

@Service("userService")
public class UserServiceImpl implements UserService, UserDetailsService {

    @Value("${backend.server.url}")
    private String backendServerUrl;

    @Override
    public UsersModel save(UsersModel user) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.postForEntity(backendServerUrl+"/api/user", user, UsersModel.class).getBody();
    }

    @Override
    public List<UsersModel> getAll() {
        RestTemplate restTemplate = new RestTemplate();
        UsersModel[] users = restTemplate.getForObject(backendServerUrl + "/api/user/all",UsersModel[].class);
        return users == null ? Collections.emptyList() : Arrays.asList(users);
    }

    @Override
    public UsersModel findById(long id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(backendServerUrl + "/api/user/" + id, UsersModel.class);
    }

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        UsersModel user = findByLogin(s);
        if (user == null) {
            throw new UsernameNotFoundException("Invalid username or password.");
        }
        return new org.springframework.security.core.userdetails.User(user.getSign().getLogin(), user.getSign().getPassword(), getAuthority(user));
    }

    @Override
    public UsersModel findByLogin(String login) {
        RestTemplate restTemplate = new RestTemplate();
        UsersModel user = restTemplate.getForObject(backendServerUrl + "/api/user/login/" + login, UsersModel.class);
        return user;
    }

    private Set<SimpleGrantedAuthority> getAuthority(UsersModel user) {
        Set<SimpleGrantedAuthority> authorities = new HashSet<>();
        authorities.add(new SimpleGrantedAuthority("ROLE_" + user.getRole()));
        return authorities;
    }
}
