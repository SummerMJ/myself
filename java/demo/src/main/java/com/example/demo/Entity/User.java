package com.example.demo.Entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "user", catalog = "exercise")
public class User implements java.io.Serializable {
    private static final long serialVersionUID = 2970182398033387842L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", unique = true, nullable = false)
    private Integer id;
    @Column(name = "user_name")
    private String userName;
    @Column(name = "password")
    private String password;
    @Column(name = "auth")
    private Integer auth;
    @Column(name = "home_desc")
    private String homeDesc;

    @JsonFormat(pattern = "YYYY-MM-dd HH:mm:ss", timezone = "GMT+8")
    @Column(name = "last_date")
    private Date lastDate;

    @Column(name = "age")
    private Integer age;

    public User(String userName, String password, Integer auth, String homeDesc, Date lastDate, Integer age) {
        this.userName = userName;
        this.password = password;
        this.auth = auth;
        this.homeDesc = homeDesc;
        this.lastDate = lastDate;
        this.age = age;
    }

    public User() {
    }

    public Integer getId() { return id; }

    public void setId(Integer id) { this.id = id; }

    public String getUserName() { return userName; }

    public void setUserName(String userName) { this.userName = userName; }

    public String getPassword() { return password; }

    public void setPassword(String password) { this.password = password; }

    public Integer getAuth() { return auth; }

    public void setAuth(Integer auth) { this.auth = auth; }

    public String getHomeDesc() { return homeDesc; }

    public void setHomeDesc(String homeDesc) { this.homeDesc = homeDesc; }

    public Date getLastDate() { return lastDate; }

    public void setLastDate(Date lastDate) { this.lastDate = lastDate; }

    public Integer getAge() { return age; }

    public void setAge(Integer age) { this.age = age; }
}
