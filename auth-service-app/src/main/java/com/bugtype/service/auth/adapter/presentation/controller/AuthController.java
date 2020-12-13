package com.bugtype.service.auth.adapter.presentation.controller;

import com.bugtype.service.auth.adapter.dto.UserDto;
import com.bugtype.service.auth.application.service.AuthService;
import com.bugtype.service.auth.domain.entity.Token;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/v1")
public class AuthController {

    @Autowired
    private final AuthService authService;

    @GetMapping(value = "/users")
    public List<Token> findAllUser() {
        return authService.findAll();
    }

    @PostMapping(value = "/login")
    public Token save(@RequestBody @Valid UserDto userDto) {
        Token token = Token.builder()
                .userId(userDto.getEmail())
                .name(userDto.getName())
                .password(userDto.getPassword())
                .build();
        return authService.save(token);

    }
}