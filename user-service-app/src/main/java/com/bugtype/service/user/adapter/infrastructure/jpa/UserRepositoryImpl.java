package com.bugtype.service.user.adapter.infrastructure.jpa;

import com.bugtype.service.user.domain.entity.User;
import com.bugtype.service.user.domain.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class UserRepositoryImpl implements UserRepository {

    @Autowired
    private JpaUserRepository jpaUserRepository;

    @Override
    public List<User> findAll() {
        return jpaUserRepository.findAll();
    }

    @Override
    public User save(User user) {
        return jpaUserRepository.save(user);
    }
}