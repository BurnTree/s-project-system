package com.netcracker.sd3.backend.entity;

import javax.persistence.*;
import java.sql.Date;
import java.util.Objects;

@Entity
@Table(name = "task", schema = "projectdatabase", catalog = "")
public class TaskEntity {
    private int idTask;
    private String description;
    private Date dueData;
    private Date estimation;
    private String assigne;
    private String ticketCode;
    private Date createDate;
    private Date updateDate;
    private String comments;
    private String attachment;

    @Id
    @Column(name = "idTask")
    public int getIdTask() {
        return idTask;
    }

    public void setIdTask(int idTask) {
        this.idTask = idTask;
    }

    @Basic
    @Column(name = "Description")
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Basic
    @Column(name = "DueData")
    public Date getDueData() {
        return dueData;
    }

    public void setDueData(Date dueData) {
        this.dueData = dueData;
    }

    @Basic
    @Column(name = "Estimation")
    public Date getEstimation() {
        return estimation;
    }

    public void setEstimation(Date estimation) {
        this.estimation = estimation;
    }

    @Basic
    @Column(name = "Assigne")
    public String getAssigne() {
        return assigne;
    }

    public void setAssigne(String assigne) {
        this.assigne = assigne;
    }

    @Basic
    @Column(name = "TicketCode")
    public String getTicketCode() {
        return ticketCode;
    }

    public void setTicketCode(String ticketCode) {
        this.ticketCode = ticketCode;
    }

    @Basic
    @Column(name = "CreateDate")
    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    @Basic
    @Column(name = "UpdateDate")
    public Date getUpdateDate() {
        return updateDate;
    }

    public void setUpdateDate(Date updateDate) {
        this.updateDate = updateDate;
    }

    @Basic
    @Column(name = "Comments")
    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

    @Basic
    @Column(name = "Attachment")
    public String getAttachment() {
        return attachment;
    }

    public void setAttachment(String attachment) {
        this.attachment = attachment;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TaskEntity that = (TaskEntity) o;
        return idTask == that.idTask &&
                Objects.equals(description, that.description) &&
                Objects.equals(dueData, that.dueData) &&
                Objects.equals(estimation, that.estimation) &&
                Objects.equals(assigne, that.assigne) &&
                Objects.equals(ticketCode, that.ticketCode) &&
                Objects.equals(createDate, that.createDate) &&
                Objects.equals(updateDate, that.updateDate) &&
                Objects.equals(comments, that.comments) &&
                Objects.equals(attachment, that.attachment);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idTask, description, dueData, estimation, assigne, ticketCode, createDate, updateDate, comments, attachment);
    }
}
