package com.netcracker.sd3.backend.service;

import com.netcracker.sd3.backend.entity.Task;

import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface TaskService {
    Task addTask(Task task);
    Optional<Task> findById(long id);
    List<Task> getAll();
    void deleteTask(long id);
    Task update(Task task);
    Page<Task> getAllInPage(Pageable pageable);
    List<Task> getAllByAssignee(long idUser);
}
