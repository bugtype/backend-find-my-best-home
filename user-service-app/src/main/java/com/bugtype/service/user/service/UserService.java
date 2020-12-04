package com.bugtype.service.user.service;


import com.bugtype.service.user.entity.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
interface UserService {

    List<User> findAll();

    User save(User user);
}
