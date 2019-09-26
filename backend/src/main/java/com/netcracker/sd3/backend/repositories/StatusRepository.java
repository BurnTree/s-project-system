package com.netcracker.sd3.backend.repositories;

import com.netcracker.sd3.backend.entity.Status;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StatusRepository extends CrudRepository<Status,Long> {
}
