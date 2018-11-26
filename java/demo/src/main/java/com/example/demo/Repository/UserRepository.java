package com.example.demo.Repository;

import com.example.demo.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<User, String> {
    User findById(Integer id);

    @Query(value = "delete from exercise where id =?1", nativeQuery = true)
    public void deleteById(Integer id);

}
