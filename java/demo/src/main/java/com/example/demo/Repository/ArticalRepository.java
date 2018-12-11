package com.example.demo.Repository;

import com.example.demo.Entity.Artical;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface ArticalRepository extends JpaRepository<Artical, String> {
    Artical findById(Integer id);

    @Transactional
    @Query(value = "DELETE FROM `artical` WHERE id = ?1", nativeQuery = true)
    @Modifying
    public void deleteById(Integer id);

    @Transactional
    @Query(value = "DELETE FROM artical s WHERE s.id IN (?1)")
    @Modifying
    public void deleteByIds(List<Integer> ids);
}
