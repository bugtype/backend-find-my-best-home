package com.bugtype.service.user.application.service;

import com.bugtype.service.user.domain.entity.User;
import com.bugtype.service.user.domain.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DomainUserService implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public User save(User user) {
        String encoded = passwordEncoder.encode(user.getName());
        user.setPassword(encoded);
        return userRepository.save(user);
    }
}