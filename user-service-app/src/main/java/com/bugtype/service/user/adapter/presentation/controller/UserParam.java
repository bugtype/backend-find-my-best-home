package com.bugtype.service.user.adapter.presentation.controller;

import lombok.*;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@ToString
@Getter
//@NoArgsConstructor
//@AllArgsConstructor
public class UserParam {

    @NotNull
    @Size(min = 5,max = 100)
    private String name;

    @Email
    @Size(min = 3,max = 30)
    private String email;

    @NotNull
    @Size(min = 1,max = 12)
    private String password;
}