package com.netcracker.projectsystem.demo.models;


import java.util.Date;

public class TaskModel {
    private long idTask;
    private String description;
    private int estimation;
    private UsersModel assigne;
    private String ticketCode;
    private Date createDate;
    private Date updateDate;
    private Date dueData;
    private Date resolvedDate;
    private Date closedDate;
    private String comments;
    private ProjectModel project;
    private UsersModel reporter;
    private PriorityModel priority;
    private StatusModel status;
    private String history;

    public long getIdTask() {
        return idTask;
    }
    public void setIdTask(long idTask) {
        this.idTask = idTask;
    }

    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }

    public Date getDueData() {
        return dueData;
    }
    public void setDueData(Date dueData) {
        this.dueData = dueData;
    }

    public int getEstimation() {
        return estimation;
    }
    public void setEstimation(int estimation) {
        this.estimation = estimation;
    }

    public String getTicketCode() {
        return ticketCode;
    }
    public void setTicketCode(String ticketCode) {
        this.ticketCode = ticketCode;
    }

    public Date getCreateDate() {
        return createDate;
    }
    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public Date getUpdateDate() {
        return updateDate;
    }
    public void setUpdateDate(Date updateDate) {
        this.updateDate = updateDate;
    }

    public Date getResolvedDate() {
        return resolvedDate;
    }

    public void setResolvedDate(Date resolvedDate) {
        this.resolvedDate = resolvedDate;
    }

    public Date getClosedDate() {
        return closedDate;
    }

    public void setClosedDate(Date closedDate) {
        this.closedDate = closedDate;
    }

    public String getComments() {
        return comments;
    }
    public void setComments(String comments) {
        this.comments = comments;
    }

    public StatusModel getStatus() {
        return status;
    }
    public void setStatus(StatusModel status) {
        this.status = status;
    }

    public PriorityModel getPriority() {
        return priority;
    }
    public void setPriority(PriorityModel priority) {
        this.priority = priority;
    }

    public ProjectModel getProject() {
        return project;
    }
    public void setProject(ProjectModel project) {
        this.project = project;
    }

    public UsersModel getReporter() {
        return reporter;
    }
    public void setReporter(UsersModel reporter) {
        this.reporter = reporter;
    }

    public UsersModel getAssigne() {
        return assigne;
    }

    public void setAssigne(UsersModel assigne) {
        this.assigne = assigne;
    }

    public String getHistory() {
        return history;
    }

    public void setHistory(String history) {
        this.history = history;
    }
}
