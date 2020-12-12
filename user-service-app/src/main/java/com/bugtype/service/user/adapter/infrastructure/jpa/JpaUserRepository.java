package com.bugtype.service.user.adapter.infrastructure.jpa;

import com.bugtype.service.user.domain.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JpaUserRepository extends JpaRepository<User,Long> {
}
