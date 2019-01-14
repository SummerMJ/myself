package com.example.demo.Controller;

import com.example.demo.Entity.User;
import com.example.demo.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.text.DateFormat;
import java.text.ParsePosition;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private UserService userService;

    @InitBinder
    protected void initBinger(WebDataBinder binder) {
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-mm-dd hh:mm:ss");
        binder.registerCustomEditor(Date.class, new CustomDateEditor(dateFormat, true));
    }

    @RequestMapping("getList")
    public Map<String, Object> getUserList() {
        Map<String, Object> map = new HashMap<>();
        List<User> user = userService.getUserList();
        map.put("code", 200);
        map.put("data", user);
        map.put("success", true);
        return map;
    }

    @RequestMapping(value = "add", method = RequestMethod.POST)
    public Map<String, Object> addUser(User user) {
        Map<String, Object> map = new HashMap<>();
        try {
            Date date = new Date();
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            String dateString = sdf.format(date);
            Date currTime = sdf.parse(dateString);
            user.setLastDate(currTime);
            user.setAuth(2);
            userService.add(user);
            map.put("code", 200);
            map.put("success", true);
            map.put("msg", "添加成功");
            map.put("data", user.getId());
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        }
        return map;
    }

    @RequestMapping(value = "/delete", method = RequestMethod.POST)
    public Map<String, Object> deleteUser(@RequestParam Integer id) {
        Map<String, Object> map = new HashMap<>();
        try {
            userService.delete(id);
            map.put("code", 200);
            map.put("success", true);
            map.put("msg", "删除z`成功");
            map.put("data", "");
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        }
        return map;
    }

    @RequestMapping(value = "/update", method = RequestMethod.POST)
    public Map<String, Object> updateUser (User user) {
        Map<String, Object> map = new HashMap<>();
        try {
            userService.update(user);
            map.put("code", 200);
            map.put("success", true);
            map.put("msg", "更新成功");
            map.put("data", "");
        } catch (Exception e) {
            e.printStackTrace();
        }
        return map;
    }

    @RequestMapping(value = "/login" ,method = { RequestMethod.POST, RequestMethod.GET })
    public Map<String, Object> login (String userName, String password, HttpServletResponse httpResponse) throws Exception {
        User user = userService.login(userName, password);
        Map<String, Object> map = new HashMap<>();
        try {
            if (user != null) {
                Cookie cookie = new Cookie("ticket", user.getUserName());
                cookie.setPath("/");
                cookie.setMaxAge(60*60);
                httpResponse.addCookie(cookie);
                Date date = new Date();
                SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
                String dateString = sdf.format(date);
                Date currTime = sdf.parse(dateString);
                user.setLastDate(currTime);
                userService.update(user);
                map.put("code", 200);
                map.put("data", user);
                map.put("msg", "登录成功");
            } else {
                map.put("code", 100);
                map.put("msg", "登录失败");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return map;
    }

    @RequestMapping("/getCookie")
    public Map<String, Object> getCookie (HttpServletRequest request, HttpServletResponse response) {
        Cookie[] cookies = request.getCookies();
        Map<String, Object> map = new HashMap<>();
        for (Cookie cookie : cookies) {
            map.put(cookie.getName(), cookie.getValue());
        }
        return map;
    }
}
