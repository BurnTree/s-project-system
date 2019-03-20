package com.netcracker.sd3.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BackController {
    @RequestMapping
    public String getBackController(){return "my back text";}
}
