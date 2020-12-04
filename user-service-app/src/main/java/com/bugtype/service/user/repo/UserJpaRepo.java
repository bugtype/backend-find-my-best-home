package com.bugtype.service.user.repo;

import com.bugtype.service.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserJpaRepo extends JpaRepository<User, Long> {}