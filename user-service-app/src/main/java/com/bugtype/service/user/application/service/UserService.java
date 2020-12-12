package com.bugtype.service.user.application.service;


import com.bugtype.service.user.domain.entity.User;

import java.util.List;

public interface UserService {

    List<User> findAll();

    User save(User user);
}
