package com.bugtype.service.user.controller;

import com.bugtype.service.user.dto.UserDto;
import com.bugtype.service.user.entity.User;
import com.bugtype.service.user.repo.UserJpaRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/v1")
public class UserController {
    private final UserJpaRepo userJpaRepo;

    @GetMapping(value = "/users")
    public List<User> findAllUser() {
        return userJpaRepo.findAll();
    }

    @PostMapping(value = "/users")
    public User save(@RequestBody @Valid UserDto userDto) {
        User user = User.builder()
                .userId(userDto.getEmail())
                .name(userDto.getName())
                .build();
        return userJpaRepo.save(user);
    }
}