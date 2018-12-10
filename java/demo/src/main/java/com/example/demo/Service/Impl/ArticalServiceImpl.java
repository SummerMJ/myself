package com.example.demo.Service.Impl;

import com.example.demo.Entity.Artical;
import com.example.demo.Repository.ArticalRepository;
import com.example.demo.Service.ArticalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArticalServiceImpl implements ArticalService {

    @Autowired
    ArticalRepository articalRepository;

    @Override
    public List<Artical> getList() {
        List<Artical> list = articalRepository.findAll();
        return list;
    }

    @Override
    public Artical getArtical(Integer id) {
        Artical artical = articalRepository.findById(id);
        return artical;
    }

    @Override
    public void delete(Integer id) {
        articalRepository.deleteById(id);
    }

    @Override
    @CacheEvict(cacheNames = "secondlevels", allEntries = true)
    public void add(Artical artical) {
        articalRepository.save(artical);
    }

    @Override
    public void update(Artical artical) {
        articalRepository.saveAndFlush(artical);
    }
}
