package com.netcracker.sd3.backend.repositories;


import java.util.List;

import com.netcracker.sd3.backend.entity.UsersEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<UsersEntity,Long> {

    @Query("select b from UsersEntity b where b.name = :name")
    UsersEntity findByName(@Param("name") String name);
}