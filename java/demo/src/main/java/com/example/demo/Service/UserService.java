package com.example.demo.Service;

import com.example.demo.Entity.User;

import java.util.List;
import java.util.Map;

public interface UserService {
    List<User> getUserList();

    void add(User user);

    void delete(Integer id);

    User update(User user);

    void register(User user);

    void login();

}
