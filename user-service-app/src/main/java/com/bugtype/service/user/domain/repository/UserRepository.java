package com.bugtype.service.user.domain.repository;


import com.bugtype.service.user.domain.entity.User;

import java.util.List;

public interface UserRepository {
    List<User> findAll();
    User save(User user);
}
