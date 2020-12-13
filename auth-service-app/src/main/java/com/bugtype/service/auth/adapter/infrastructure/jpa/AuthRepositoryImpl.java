package com.bugtype.service.auth.adapter.infrastructure.jpa;

import com.bugtype.service.auth.domain.entity.Token;
import com.bugtype.service.auth.domain.repository.AuthRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class AuthRepositoryImpl implements AuthRepository {

    @Autowired
    private JpaUserRepository jpaUserRepository;

    @Override
    public List<Token> findAll() {
        return jpaUserRepository.findAll();
    }

    @Override
    public Token save(Token token) {
        return jpaUserRepository.save(token);
    }
}