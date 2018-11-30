package com.example.demo.Service;

import com.example.demo.Entity.Artical;

import java.util.List;

public interface ArticalService {
    /***
     * 获取所有文章
     * @return List
     *
     */
    List<Artical> getList();

    Artical getArtical(Integer id);

    void delete(Integer id);
}
