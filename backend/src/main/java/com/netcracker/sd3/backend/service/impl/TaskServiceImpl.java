package com.netcracker.sd3.backend.service.impl;

import com.netcracker.sd3.backend.entity.Status;
import com.netcracker.sd3.backend.entity.Task;
import com.netcracker.sd3.backend.repositories.TaskRepository;
import com.netcracker.sd3.backend.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class TaskServiceImpl implements TaskService {
    @Autowired
    TaskRepository taskRepository;

    @Override
    public Task addTask(Task task) {
        task.setCreateDate(new Date());
        Status status = new Status();
        status.setIdStatus(1);
        task.setStatus(status);
        Task newTask = taskRepository.save(task);
        return newTask;
    }

    @Override
    public Optional<Task> findById(long idTask) {
        return taskRepository.findById(idTask);
    }

    @Override
    public List<Task> getAll() {
        return (List<Task>) taskRepository.findAll();
    }

    @Override
    public void deleteTask(long id) {
        taskRepository.deleteById(id);
    }

    @Override
    public Task update(Task task) {
        if (task.getStatus().getIdStatus() == 3) {
            task.setResolvedDate(new Date());
        } else if (task.getStatus().getIdStatus() == 5) {
            task.setClosedDate(new Date());
        }
        return taskRepository.save(task);
    }
}
