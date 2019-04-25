package com.netcracker.sd3.backend.entity;

import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.sql.Date;
import java.util.Objects;

@Entity
@Table(name = "task", schema = "projectdatabase", catalog = "")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idTask;


    @ManyToOne(targetEntity = Project.class)
    private Project project;
    private String description;
    private Date dueData;
    private Date estimation;

    @NotNull
    @ManyToOne(targetEntity = UsersEntity.class)
    private UsersEntity assigne;
    private String ticketCode;

    //    @Temporal(TemporalType.DATE)
    private Date createDate;

    //  @Temporal(TemporalType.DATE)
    private Date updateDate;
    private String comments;
    private String attachment;


    @ManyToOne(targetEntity = Priority.class)
    private Priority priority;
    @ManyToOne(targetEntity = UsersEntity.class)
    private UsersEntity reporter;

    @NotNull
    @ManyToOne(targetEntity = Status.class)
    private Status status;

    public long getIdTask() {
        return idTask;
    }
    public void setIdTask(long idTask) {
        this.idTask = idTask;
    }

    public UsersEntity getReporter() {
        return reporter;
    }

    public void setReporter(UsersEntity reporter) {
        this.reporter = reporter;
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

    public Date getEstimation() {
        return estimation;
    }

    public void setEstimation(Date estimation) {
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

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

    public String getAttachment() {
        return attachment;
    }

    public void setAttachment(String attachment) {
        this.attachment = attachment;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public UsersEntity getAssigne() {
        return assigne;
    }

    public void setAssigne(UsersEntity assigne) {
        this.assigne = assigne;
    }

    public Priority getPriority() {
        return priority;
    }

    public void setPriority(Priority priority) {
        this.priority = priority;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Task that = (Task) o;
        return idTask == that.idTask &&
                Objects.equals(description, that.description) &&
                Objects.equals(dueData, that.dueData) &&
                Objects.equals(estimation, that.estimation) &&
                Objects.equals(assigne, that.assigne) &&
                Objects.equals(ticketCode, that.ticketCode) &&
                Objects.equals(createDate, that.createDate) &&
                Objects.equals(updateDate, that.updateDate) &&
                Objects.equals(comments, that.comments) &&
                Objects.equals(project, that.project) &&
                Objects.equals(reporter, that.reporter) &&
                Objects.equals(priority, that.priority) &&
                Objects.equals(status, that.status);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idTask, description, dueData, estimation, assigne, ticketCode, createDate, updateDate, comments, attachment, status);
    }
}
