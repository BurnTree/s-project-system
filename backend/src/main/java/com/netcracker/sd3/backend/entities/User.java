package com.netcracker.sd3.backend.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String firstName;
    private String lastName;
    private String login;

    protected User(){}
    public User(String fName, String sName, String log){
        this.firstName = fName;
        this.lastName = sName;
        this.login = log;
    }

    @Override
    public String toString() {
        return String.format(
                "Customer[id=%d, firstName='%s', lastName='%s', login='%s']",
                id, firstName, lastName, login);
    }
}
