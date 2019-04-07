package com.netcracker.sd3.backend.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "role", schema = "projectdatabase", catalog = "")
public class RoleEntity {
    private int idRole;
    private String nameRole;

    @Id
    @Column(name = "idRole")
    public int getIdRole() {
        return idRole;
    }

    public void setIdRole(int idRole) {
        this.idRole = idRole;
    }

    @Basic
    @Column(name = "NameRole")
    public String getNameRole() {
        return nameRole;
    }

    public void setNameRole(String nameRole) {
        this.nameRole = nameRole;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        RoleEntity that = (RoleEntity) o;
        return idRole == that.idRole &&
                Objects.equals(nameRole, that.nameRole);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idRole, nameRole);
    }
}
