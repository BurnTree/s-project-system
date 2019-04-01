package com.netcracker.sd3.backend.entities;


import javax.persistence.*;

@Entity
@Table(name = "TASK")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String kod;
    private String assign;
}
