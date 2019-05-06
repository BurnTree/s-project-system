package com.netcracker.projectsystem.demo.models;

public class SignModel {

    private long id;
    private String login;
    private String password;
    private int usersIdUsers;
//todo: убрать поле idUser
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }

    public String getLogin() {
        return login;
    }
    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

    public int getUsersIdUsers() {
        return usersIdUsers;
    }
    public void setUsersIdUsers(int usersIdUsers) {
        this.usersIdUsers = usersIdUsers;
    }

    public String testGetLogin(){return "123";}
    public String testGetPassword(){return "321";}
}
