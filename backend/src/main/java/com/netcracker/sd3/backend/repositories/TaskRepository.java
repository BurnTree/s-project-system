package com.netcracker.sd3.backend.repositories;

import com.netcracker.sd3.backend.entity.Task;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends CrudRepository<Task,Long> {
}
