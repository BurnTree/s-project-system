package com.netcracker.projectsystem.demo.models;

public class ProjectModel {
    private long idProject;
    private String summary;
    private String nameProject;

    public long getIdProject() {
        return idProject;
    }
    public void setIdProject(long idProject) {
        this.idProject = idProject;
    }

    public String getSummary() {
        return summary;
    }
    public void setSummary(String summary) {
        this.summary = summary;
    }

    public String getNameProject() {
        return nameProject;
    }
    public void setNameProject(String nameProject) {
        this.nameProject = nameProject;
    }

}
