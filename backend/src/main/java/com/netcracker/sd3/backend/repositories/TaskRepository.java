package com.netcracker.sd3.backend.repositories;

import com.netcracker.sd3.backend.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<Task,Long> {

    List<Task> findTasksByAssigneIdUsers(long id);
    List<Task> findTasksByReporterIdUsers(long id);
    List<Task> findTasksByStatusIdStatus(long id);

    Long countTaskByProjectIdProject(long idProject);
}
