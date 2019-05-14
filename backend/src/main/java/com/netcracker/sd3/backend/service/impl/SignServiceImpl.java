package com.netcracker.sd3.backend.service.impl;

import com.netcracker.sd3.backend.entity.Sign;
import com.netcracker.sd3.backend.repositories.SignRepository;
import com.netcracker.sd3.backend.service.SignService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;

public class SignServiceImpl implements SignService {

    private SignRepository signRepository;


    @Autowired
    public SignServiceImpl(SignRepository signRepository) {
        this.signRepository = signRepository;
    }

    @Override
    public Optional<Sign> findByLogin(String login) {
        return signRepository.findByLogin(login);
    }
}
