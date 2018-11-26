package com.example.demo.Controller;

import com.example.demo.Entity.User;
import com.example.demo.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    @RequestMapping("getList")
    public Map<String, Object> getUserList() {
        Map<String, Object> map = new HashMap<>();
        List<User> user = userService.getUserList();
        map.put("code", 200);
        map.put("data", user);
        map.put("success", true);
        return map;
    }

    @RequestMapping(value = "add", method = RequestMethod.POST, produces = "application/json")
    public Map<String, Object> addUser(@RequestBody User user) {
        Map<String, Object> map = new HashMap<>();
        try {
            userService.add(user);
            map.put("code", 200);
            map.put("success", true);
//            map.put("msg", "添加成功");
            map.put("data", user.getId());
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        }
        return map;
    }

    @RequestMapping(value = "/delete", method = RequestMethod.POST)
    public Map<String, Object> deleteUser(@RequestBody Integer id) {
        Map<String, Object> map = new HashMap<>();
        try {
            userService.delete(id);
            map.put("code", 200);
            map.put("success", true);
            map.put("msg", "删除成功");
            map.put("data", "");
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        }
        return map;
    }

}
