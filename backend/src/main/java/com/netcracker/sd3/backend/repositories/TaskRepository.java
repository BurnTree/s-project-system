package com.netcracker.sd3.backend.repositories;

import com.netcracker.sd3.backend.entities.Task;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends CrudRepository<Task, Long> {
}
