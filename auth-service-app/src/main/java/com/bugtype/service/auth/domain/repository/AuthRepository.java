package com.bugtype.service.auth.domain.repository;


import com.bugtype.service.auth.domain.entity.Token;

import java.util.List;

public interface AuthRepository {
    List<Token> findAll();
    Token save(Token token);
}
