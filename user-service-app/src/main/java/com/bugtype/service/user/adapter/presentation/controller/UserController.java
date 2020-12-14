package com.bugtype.service.user.adapter.presentation.controller;

import com.bugtype.service.user.application.service.UserService;
import com.bugtype.service.user.domain.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/v1")
public class UserController {

    @Autowired
    private final UserService userService;

    @GetMapping(value = "/users")
    public List<User> findAllUser() {
        return userService.findAll();
    }

    @PostMapping(value = "/users")
    public ResponseEntity save(@RequestBody @Valid UserParam userParam) {
        User user = User.builder()
                .userId(userParam.getEmail())
                .name(userParam.getName())
                .password(userParam.getPassword())
                .build();
        userService.save(user);

        // TODO: response template
        return ResponseEntity.ok("{}");

    }
}