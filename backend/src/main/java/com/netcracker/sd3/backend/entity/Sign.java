package com.netcracker.sd3.backend.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
public class Sign {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String login;
    private String password;

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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Sign sign = (Sign) o;
        return id == sign.id &&
                Objects.equals(login, sign.login) &&
                Objects.equals(password, sign.password);
    }

    @Override
    public int hashCode() {
        return Objects.hash(login, password);
    }
}
