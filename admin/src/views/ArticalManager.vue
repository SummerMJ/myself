<template>
    <div class="artical-manager">
        <el-breadcrumb separator-class="el-icon-arrow-right" class="bread">
            <el-breadcrumb-item :to="{ path: '/home/artical' }">文章管理</el-breadcrumb-item>
            <!-- <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
        </el-breadcrumb>
        <el-button size="small" type="primary" style="margin-top: 30px;">添加文章</el-button>
        <el-table :data="tableData" stripe border class="artical-table" size="small">
            <el-table-column prop="id" label="文章编号" min-width="80"></el-table-column>
            <el-table-column prop="aTitle" label="标题" align="center" min-width="150"></el-table-column>
            <!-- <el-table-column prop="aContent" label="内容" align="center" min-width="200">
                <template slot-scope="scope">
                    <div v-html="scope.row.aContent"></div>
                </template>
            </el-table-column> -->
            <el-table-column prop="aType" label="文章类型" min-width="80"></el-table-column>
            <el-table-column prop="createPerson" min-width="80" label="作者"></el-table-column>
            <el-table-column prop="createTime" label="创建时间" min-width="170"></el-table-column>         
            <el-table-column prop="lastTime" label="最后修改时间" min-width="170"></el-table-column>         
            <el-table-column label="操作" min-width="100" align="center">
                <template slot-scope="scope">
                    <el-button @click="operateUser('edit', scope.row)" type="text" size="small">编辑</el-button>
                    <el-button type="text" @click="deleteRow(scope.row)" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
    import { Breadcrumb, BreadcrumbItem, Table, TableColumn, Button } from "element-ui";
    import ajax from "@/libs/fench"
    export default {
        name: "ActicalManager",
        data() {
            return {
                tableData: [],
            }
        },
        methods: {
            getList () {
                ajax.get("/artical/getList").then(res => this.tableData = res.data);
            },
            operateUser () {

            },
            deleteRow () {

            }
        },
        mounted () {
            this.getList();
        },
        components: {
            "el-breadcrumb": Breadcrumb,
            "el-breadcrumb-item": BreadcrumbItem,
            "el-table": Table,
            "el-table-column": TableColumn,
            "el-button": Button,
        }
    }
</script>

<style lang="scss" scoped>
    .artical-manager {
        .bread { margin-bottom: 30px; }
        .artical-table { width: 100%; margin-top: 15px; }
    }
</style>