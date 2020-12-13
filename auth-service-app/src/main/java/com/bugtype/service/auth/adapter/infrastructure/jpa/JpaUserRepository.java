package com.bugtype.service.auth.adapter.infrastructure.jpa;

import com.bugtype.service.auth.domain.entity.Token;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JpaUserRepository extends JpaRepository<Token,Long> {
}
