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

    void add (Artical artical);

    Artical getArtical(Integer id);

    void delete(Integer id);

    void batchDelete(List<Integer> ids);

    void update(Artical artical);
}
