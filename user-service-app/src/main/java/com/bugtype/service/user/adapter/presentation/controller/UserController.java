package com.bugtype.service.user.adapter.presentation.controller;

import com.bugtype.service.user.adapter.dto.UserDto;
import com.bugtype.service.user.application.service.UserService;
import com.bugtype.service.user.domain.entity.User;
import com.bugtype.service.user.application.service.DomainUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
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
    public User save(@RequestBody @Valid UserDto userDto) {
        User user = User.builder()
                .userId(userDto.getEmail())
                .name(userDto.getName())
                .password(userDto.getPassword())
                .build();
        return userService.save(user);

    }
}