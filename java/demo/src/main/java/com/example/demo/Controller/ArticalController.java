package com.example.demo.Controller;

import com.example.demo.Entity.Artical;
import com.example.demo.Service.ArticalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/artical")
public class ArticalController {

    @Autowired
    private ArticalService articalService;

    @InitBinder
    protected void initBinger(WebDataBinder binder) {
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-mm-dd hh:mm:ss");
        binder.registerCustomEditor(Date.class, new CustomDateEditor(dateFormat, true));
    }


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


    @RequestMapping(value = "getOne")
    public Map<String, Object> getOneArtical (Integer id) {
        Map<String, Object> map = new HashMap<>();
        try {
            Artical artical = articalService.getArtical(id);
            map.put("code", 200);
            map.put("success", true);
            map.put("msg", "查询成功");
            map.put("data", artical);
        } catch (Exception e) {
            e.printStackTrace();
            map.put("code", 100);
            map.put("success", false);
            map.put("data", null);
            map.put("msg", "查询失败");
        }
        return map;
    }


    @RequestMapping(value = "add", method = RequestMethod.POST)
    public Map<String, Object> addArtical (Artical artical) {
        Map<String, Object> map = new HashMap<>();
        try {
            Date date = new Date();
            SimpleDateFormat sdf = new SimpleDateFormat( "yyyy-MM-dd HH:mm:ss");
            String dateString = sdf.format(date);
            Date currTime = sdf.parse(dateString);
            artical.setCreateTime(currTime);
            artical.setLastTime(currTime);
            articalService.add(artical);
            map.put("code", 200);
            map.put("success", true);
            map.put("msg", "添加成功");
        } catch (Exception e) {
            map.put("code", 100);
            map.put("success", false);
            map.put("msg", "添加失败");
            e.printStackTrace();
        }
        return map;
    }


    @RequestMapping(value = "update", method = RequestMethod.POST)
    public Map<String, Object> updateArtical (Artical artical) {
        Map<String, Object> map = new HashMap<>();
        try {
            Date date = new Date();
            SimpleDateFormat sdf = new SimpleDateFormat( "yyyy-MM-dd HH:mm:ss");
            String dateString = sdf.format(date);
            Date currTime = sdf.parse(dateString);
            artical.setLastTime(currTime);
            articalService.update(artical);
            map.put("code", 200);
            map.put("success", true);
            map.put("msg", "编辑成功");
        } catch (Exception e) {
            e.printStackTrace();
            map.put("code", 100);
            map.put("success", false);
            map.put("msg", "编辑失败");
        }
        return map;
    }


    @RequestMapping(value = "/delete", method = RequestMethod.POST)
    public Map<String, Object> deleteArtical(@RequestParam Integer id) {
        Map<String, Object> map = new HashMap<>();
        try {
            articalService.delete(id);
            map.put("code", 200);
            map.put("success", true);
            map.put("msg", "删除成功");
        } catch (Exception e) {
            e.printStackTrace();
            map.put("code", 100);
            map.put("success", false);
            map.put("msg", "删除失败");
        }
        return map;
    }


    @RequestMapping(value = "batchDelete", method = RequestMethod.POST)
    public Map<String, Object> batchDelete (List<Integer> ids) {
        Map<String, Object> map = new HashMap<>();
        try {
            articalService.batchDelete(ids);
            map.put("code", 200);
            map.put("success", true);
            map.put("msg", "删除成功");
        } catch (Exception e) {
            e.printStackTrace();
            map.put("code", 100);
            map.put("success", false);
            map.put("msg", "删除失败");
        }
        return map;
    }

}


