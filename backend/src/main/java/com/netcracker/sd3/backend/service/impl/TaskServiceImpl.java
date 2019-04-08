package com.netcracker.sd3.backend.service.impl;

import com.netcracker.sd3.backend.entity.TaskEntity;
import com.netcracker.sd3.backend.repositories.TaskRepository;
import com.netcracker.sd3.backend.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskServiceImpl implements TaskService {
    @Autowired
    TaskRepository taskRepository;

    @Override
    public TaskEntity addTask(TaskEntity task) {
        TaskEntity newTask = taskRepository.save(task);
        return newTask;
    }

    @Override
    public Optional<TaskEntity> findById(Long id) {
        return taskRepository.findById(id);
    }

    @Override
    public List<TaskEntity> getAll() {
        return (List<TaskEntity>) taskRepository.findAll();
    }

    @Override
    public void deleteTask(Long id) {
        taskRepository.deleteById(id);
    }
}
