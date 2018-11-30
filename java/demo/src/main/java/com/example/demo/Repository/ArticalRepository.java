package com.example.demo.Repository;

import com.example.demo.Entity.Artical;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;

public interface ArticalRepository extends JpaRepository<Artical, String> {
    Artical findById(Integer id);

    @Modifying
    void deleteById(Integer id);
}
