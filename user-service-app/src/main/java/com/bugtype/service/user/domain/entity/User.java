package com.bugtype.service.user.domain.entity;

import lombok.*;

import javax.persistence.*;

@Builder
@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "user")
public class User {
    @Id // PK
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto_increment
    private long id;

    @Column(nullable = false, unique = true, length = 30)
    private String userId;

    @Column(nullable = false, length = 100)
    private String name;

    @Column(nullable = false, length = 100)
    @Setter()
    private String password;
}