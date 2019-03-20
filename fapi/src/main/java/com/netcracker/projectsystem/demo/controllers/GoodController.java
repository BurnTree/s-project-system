package com.netcracker.projectsystem.demo.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GoodController {
    @RequestMapping
    public String getItsString(){return "Ho-ho-ho";}
}
