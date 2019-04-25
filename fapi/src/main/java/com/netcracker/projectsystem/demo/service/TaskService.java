package com.netcracker.projectsystem.demo.service;

import com.netcracker.projectsystem.demo.models.TaskModel;
import javafx.concurrent.Task;

import java.util.List;
import java.util.Optional;

public interface TaskService {
    List<TaskModel> getAll();
    TaskModel findById(long id);
    TaskModel save(TaskModel task);
}
