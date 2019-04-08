package com.netcracker.sd3.backend.service;

import com.netcracker.sd3.backend.entity.TaskEntity;

import java.util.List;
import java.util.Optional;

public interface TaskService {
    TaskEntity addTask(TaskEntity task);
    Optional<TaskEntity> findById(Long id);
    List<TaskEntity> getAll();
    void deleteTask(Long id);
}
