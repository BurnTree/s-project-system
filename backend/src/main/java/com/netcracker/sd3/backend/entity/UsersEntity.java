package com.netcracker.sd3.backend.entity;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.util.Objects;

@Entity
@Table(name = "users", schema = "projectdatabase", catalog = "")
public class UsersEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idUsers;

    @NotBlank
    @Size(min=4, max=15)
    private String firstName;

    @NotBlank
    @Size(min=4, max=15)
    private String secondName;

    @OneToOne(targetEntity = Sign.class)
    private Sign sign;

    @NotNull
    @ManyToOne(targetEntity = Role.class)
    private Role role;

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

    public Role getRole() {
        return role;
    }
    public void setRole(Role role) {
        this.role = role;
    }

    public Sign getSign() {
        return sign;
    }
    public void setSign(Sign sign) {
        this.sign = sign;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UsersEntity that = (UsersEntity) o;
        return idUsers == that.idUsers &&
                Objects.equals(firstName, that.firstName) &&
                Objects.equals(secondName, that.secondName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idUsers, firstName, secondName);
    }
}
