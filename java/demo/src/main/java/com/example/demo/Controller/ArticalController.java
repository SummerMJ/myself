package com.example.demo.Controller;

import com.example.demo.Entity.Artical;
import com.example.demo.Service.ArticalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@CrossOrigin
@RestController
@RequestMapping("/artical")
public class ArticalController {

    @Autowired
    private ArticalService articalService;

    @RequestMapping("getList")
    public Map<String, Object> getArticalList () {
        Map<String, Object> map = new HashMap<>();
        try {
            List<Artical> articals = articalService.getList();
            map.put("msg", "查询成功");
            map.put("code", 200);
            map.put("data", articals);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return map;
    }

}
