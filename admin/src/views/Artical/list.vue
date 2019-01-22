<template>
    <div class="artical-manager">
        <div class="operate-box">
            <div>
              <router-link to="/home/artical/new">
                <el-button size="small" type="primary" :disabled="!auth">添加文章</el-button>
              </router-link>
              <router-link to="/home/artical/markdown" style="margin-left: 15px;">
                <el-button size="small" type="primary" :disabled="!auth">富文本编辑器</el-button>
              </router-link>
            </div>
            <el-button size="small" type="danger" :disabled="!selectList.length || !auth">批量删除</el-button>
        </div>
        <el-table :data="tableData" stripe border class="artical-table" size="small"  v-loading="loading" @selection-change="handleSelectionChange">
            <el-table-column type="selection" align="center" width="55"></el-table-column>
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
            <el-table-column label="操作" min-width="140" align="center">
                <template slot-scope="scope">
                    <el-button @click="operateUser(scope.row)" type="text" :disabled="!auth" size="small">编辑</el-button>
                    <el-button @click="check(scope.row)" type="text" :disabled="!auth" size="small">查看</el-button>
                    <el-button type="text" @click="deleteRow(scope.row)" :disabled="!auth" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import { Breadcrumb, BreadcrumbItem, Table, TableColumn, Button, Message } from "element-ui";
    import { mapGetters } from "vuex"
    import ajax from "@/libs/fench"
    export default {
        name: "ActicalManager",
        data() {
            return {
                tableData: [],
                selectList: [],
                loading: true
            }
        },
        computed: {
            ...mapGetters(["auth"])
        },
        methods: {
            getList() {
                ajax.get("/artical/getList").then(res => {
                    this.tableData = res.data || [];
                    this.loading = false;
                });
            },
            check (param) {
                this.$router.push({
                    name: "checkArtical",
                    params: {
                        id: param.id
                    }
                })
            },
            operateUser(param) {
                this.$router.push({
                    name: "editArtical",
                    params: {
                        id: param.id
                    }
                })
            },
            deleteRow(item) {
                console.log(item.id);
                ajax.post("/artical/delete", { id: item.id }).then(res => {
                    console.log(res)
                    Message.success("删除成功");
                    this.getList();
                })
            },
            handleSelectionChange (val) {
                this.selectList = val;
            }
        },
        mounted() {
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
        .operate-box { display: flex; align-items: center; justify-content: space-between;  }
        .artical-table {
            width: 100%;
            margin-top: 15px;
        }
    }
</style>