package com.netcracker.sd3.backend.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "priority", schema = "projectdatabase", catalog = "")
public class PriorityEntity {
    private int idPriority;
    private String namePriority;

    @Id
    @Column(name = "idPriority")
    public int getIdPriority() {
        return idPriority;
    }

    public void setIdPriority(int idPriority) {
        this.idPriority = idPriority;
    }

    @Basic
    @Column(name = "NamePriority")
    public String getNamePriority() {
        return namePriority;
    }

    public void setNamePriority(String namePriority) {
        this.namePriority = namePriority;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PriorityEntity that = (PriorityEntity) o;
        return idPriority == that.idPriority &&
                Objects.equals(namePriority, that.namePriority);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idPriority, namePriority);
    }
}
