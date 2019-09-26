package com.netcracker.sd3.backend.controller;

import com.netcracker.sd3.backend.service.GlobalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/global")
public class GlobalController {

    public GlobalService globalService;

    @Autowired
    public GlobalController(GlobalService globalService){this.globalService = globalService;}

    @DeleteMapping
    public String deleteAlll()
    {
        return globalService.deleteAll();
    }
}
