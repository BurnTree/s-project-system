package com.netcracker.sd3.backend.repositories;

import com.netcracker.sd3.backend.entity.Sign;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SignRepository extends CrudRepository<Sign,Long> {

    Optional<Sign> findByLogin(String login);
}
