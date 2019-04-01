package com.netcracker.sd3.backend.repositories;


import java.util.List;

import com.netcracker.sd3.backend.entities.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

public interface UserRepository extends CrudRepository<User,Long>{
    List<User> findByLastName(String lastName);
}
