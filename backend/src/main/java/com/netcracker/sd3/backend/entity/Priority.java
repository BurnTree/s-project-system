package com.netcracker.sd3.backend.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "priority", schema = "projectdatabase", catalog = "")
public class Priority {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idPriority;
    private String namePriority;

    public long getIdPriority() {
        return idPriority;
    }
    public void setIdPriority(long idPriority) {
        this.idPriority = idPriority;
    }

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
        Priority that = (Priority) o;
        return idPriority == that.idPriority &&
                Objects.equals(namePriority, that.namePriority);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idPriority, namePriority);
    }
}
