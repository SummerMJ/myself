package com.example.demo.Entity;

import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.sql.Date;

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
    @Column(name = "height")
    private double height;

    @DateTimeFormat(pattern = "YYYY-MM-dd")
    @Column(name = "date")
    private Date date;

    @Column(name = "age")
    private Integer age;

    public User(Integer id, String userName, String password, double height, Date date, Integer age) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.height = height;
        this.date = date;
        this.age = age;
    }

    public User() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public double getHeight() {
        return height;
    }

    public void setHeight(double height) {
        this.height = height;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", userName='" + userName + '\'' +
                ", password='" + password + '\'' +
                ", height=" + height +
                ", date=" + date +
                ", age=" + age +
                '}';
    }
}
