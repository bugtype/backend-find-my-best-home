package com.bugtype.service.auth.domain.entity;

import lombok.*;

import javax.persistence.*;

@Builder
@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "user")
public class Token {
    @Id // PK
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto_increment
    private long id;

    @Column(nullable = false, unique = true, length = 30)
    private String token;

    @Column(nullable = false, length = 100)
    private String expired;

    @Column(nullable = false, length = 100)
    @Setter()
    private String password;
}