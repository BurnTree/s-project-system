package com.netcracker.sd3.backend.service;

import com.netcracker.sd3.backend.entity.Sign;

import java.util.Optional;

public interface SignService {
    Optional<Sign> findByLogin(String login);
}
