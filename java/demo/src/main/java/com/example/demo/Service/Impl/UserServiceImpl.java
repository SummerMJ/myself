package com.example.demo.Service.Impl;

import com.example.demo.Entity.User;
import com.example.demo.Repository.UserRepository;
import com.example.demo.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
@Transactional
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;


    @Override
    public List<User> getUserList() {
        List<User> list = userRepository.findAll();
        return list;
    }

    @Override
    @CacheEvict(cacheNames = "secondlevels", allEntries = true)
    public void add(User user) {
        try {
            userRepository.save(user);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public void delete(Integer id) {
        try {
            userRepository.deleteById(id);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public User update(User user) {
        try {
            userRepository.saveAndFlush(user);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public User login(String userName, String password) {
        List<User> list = userRepository.findByUserNameAndPassword(userName, password);
        if (list != null) {
            return list.get(0);
        } else {
            return null;
        }
    }

    @Override
    public void register(User user) {

    }


}
