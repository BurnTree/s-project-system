package com.netcracker.projectsystem.demo.service;

import com.netcracker.projectsystem.demo.models.TaskModel;
import javafx.concurrent.Task;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;

import java.util.List;
import java.util.Optional;

public interface TaskService {
    List<TaskModel> getAll();
    TaskModel findById(long id);
    TaskModel save(TaskModel task);
    TaskModel update(TaskModel task);
    Page<TaskModel> getAllInPage(int page, int size, String sort,Sort.Direction direction);
    List<TaskModel> getAllByAsiignee(long idUser);
}
