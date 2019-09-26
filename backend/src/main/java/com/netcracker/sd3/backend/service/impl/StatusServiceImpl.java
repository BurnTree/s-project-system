package com.netcracker.sd3.backend.service.impl;

import com.netcracker.sd3.backend.entity.Status;
import com.netcracker.sd3.backend.repositories.StatusRepository;
import com.netcracker.sd3.backend.service.StatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StatusServiceImpl implements StatusService {

    private StatusRepository statusRepository;

    @Autowired
    public StatusServiceImpl(StatusRepository statusRepository) {
        this.statusRepository = statusRepository;
    }

    @Override
    public Iterable<Status> getAll() {
        return statusRepository.findAll();
    }
}
