package com.netcracker.sd3.backend.repositories;


import java.util.List;
import java.util.Optional;

import com.netcracker.sd3.backend.entity.Role;
import com.netcracker.sd3.backend.entity.Sign;
import com.netcracker.sd3.backend.entity.UsersEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<UsersEntity,Long> {

    Optional<UsersEntity> findBySign(Sign sign);

    Iterable<UsersEntity> findUsersEntitiesByRoleIdRole(long id);
}