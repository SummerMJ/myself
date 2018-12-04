package com.example.demo.Repository;

import com.example.demo.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface UserRepository extends JpaRepository<User, String> {
    User findById(Integer id);

    @Query(value = "DELETE FROM `user` WHERE id= ?1", nativeQuery = true)
    @Modifying
    public void deleteById(Integer id);

    List<User> findByUserNameAndPassword(String userName, String password);

}
