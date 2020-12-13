package com.bugtype.service.auth.adapter.dto;

import lombok.*;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@ToString
@Getter
//@NoArgsConstructor
//@AllArgsConstructor
public class UserDto {

    @Email
    @Size(min = 3,max = 30)
    private String email;

    @NotNull
    @Size(min = 1,max = 12)
    private String password;
}