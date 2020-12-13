package com.bugtype.service.auth.application.service;


import com.bugtype.service.auth.domain.entity.Token;

import java.util.List;

public interface AuthService {

    List<Token> findAll();

    Token save(Token token);
}
