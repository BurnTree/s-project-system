package com.netcracker.projectsystem.demo.models;

public class UsersModel {
    private long idUsers;
    private String firstName;
    private String secondName;
    private SignModel sign;
    private RoleModel role;

    public long getIdUsers() {
        return idUsers;
    }

    public void setIdUsers(long idUsers) {
        this.idUsers = idUsers;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getSecondName() {
        return secondName;
    }

    public void setSecondName(String secondName) {
        this.secondName = secondName;
    }

    public SignModel getSign() {
        return sign;
    }

    public void setSign(SignModel sign) {
        this.sign = sign;
    }

    public RoleModel getRole() {
        return role;
    }

    public void setRole(RoleModel role) {
        this.role = role;
    }

}
