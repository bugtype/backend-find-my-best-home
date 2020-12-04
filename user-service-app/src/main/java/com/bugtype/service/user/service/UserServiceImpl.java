package com.bugtype.service.user.service;

import com.bugtype.service.user.dto.UserDto;
import com.bugtype.service.user.entity.User;
import com.bugtype.service.user.repo.UserJpaRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import javax.validation.Valid;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserJpaRepo userJpaRepo;

    @Autowired
    PasswordEncoder passwordEncoder;

    public List<User> findAll() {
        return userJpaRepo.findAll();
    }

    public User save(User user) {
        String encoded = passwordEncoder.encode(user.getName());
        user.setPassword(encoded);
        return userJpaRepo.save(user);
    }
}