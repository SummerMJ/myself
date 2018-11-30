package com.example.demo.Entity;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "artical", catalog = "exercise")
public class Artical implements Serializable {
    private static final long serialVersionUID = 2970182398033387842L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name= "id", unique = true, nullable = true)
    private Integer id;

    @Column(name = "a_title")
    private String aTitle;

    @Column(name = "a_type")
    private Integer aType;

    @Column(name = "a_content")
    private String aContent;

    @Column(name = "create_person")
    private Integer createPerson;

    @Column(name = "create_time")
    @JsonFormat(pattern = "YYYY-MM-dd HH:mm:ss", timezone = "GMT+8")
    private Date createTime;

    public Artical(String aTitle, Integer aType, String aContent, Integer createPerson, Date createTime) {
        this.aTitle = aTitle;
        this.aType = aType;
        this.aContent = aContent;
        this.createPerson = createPerson;
        this.createTime = createTime;
    }

    public Artical() {}

    public Integer getId() { return id; }

    public void setId(Integer id) { this.id = id; }

    public String getaTitle() { return aTitle; }

    public void setaTitle(String aTitle) { this.aTitle = aTitle; }

    public Integer getaType() { return aType; }

    public void setaType(Integer aType) { this.aType = aType; }

    public String getaContent() { return aContent; }

    public void setaContent(String aContent) { this.aContent = aContent; }

    public Integer getCreatePerson() { return createPerson; }

    public void setCreatePerson(Integer createPerson) { this.createPerson = createPerson; }

    public Date getCreateTime() { return createTime; }

    public void setCreateTime(Date createTime) { this.createTime = createTime; }
}
