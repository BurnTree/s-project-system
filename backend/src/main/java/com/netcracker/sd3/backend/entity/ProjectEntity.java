package com.netcracker.sd3.backend.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "project", schema = "projectdatabase", catalog = "")
public class ProjectEntity {
    private int idProject;
    private String summary;
    private String nameProject;

    @Id
    @Column(name = "idProject")
    public int getIdProject() {
        return idProject;
    }

    public void setIdProject(int idProject) {
        this.idProject = idProject;
    }

    @Basic
    @Column(name = "Summary")
    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    @Basic
    @Column(name = "NameProject")
    public String getNameProject() {
        return nameProject;
    }

    public void setNameProject(String nameProject) {
        this.nameProject = nameProject;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ProjectEntity that = (ProjectEntity) o;
        return idProject == that.idProject &&
                Objects.equals(summary, that.summary) &&
                Objects.equals(nameProject, that.nameProject);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idProject, summary, nameProject);
    }
}
