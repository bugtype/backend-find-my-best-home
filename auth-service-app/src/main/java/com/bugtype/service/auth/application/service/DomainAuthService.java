package com.bugtype.service.auth.application.service;

import com.bugtype.service.auth.domain.entity.Token;
import com.bugtype.service.auth.domain.repository.AuthRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DomainAuthService implements AuthService {

    @Autowired
    private AuthRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public List<Token> findAll() {
        return userRepository.findAll();
    }

    public Token save(Token token) {
        String encoded = passwordEncoder.encode(token.getName());
        token.setPassword(encoded);
        return userRepository.save(token);
    }
}