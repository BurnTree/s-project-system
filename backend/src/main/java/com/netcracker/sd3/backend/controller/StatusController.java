package com.netcracker.sd3.backend.controller;

import com.netcracker.sd3.backend.entity.Status;
import com.netcracker.sd3.backend.service.ProjectService;
import com.netcracker.sd3.backend.service.StatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/status")
public class StatusController {

    public StatusService statusService;

    @Autowired
    public StatusController(StatusService statusService){this.statusService = statusService;}

    @GetMapping(value = "/all")
    public Iterable<Status> getAll(){return statusService.getAll();}

}
