<template>
    <div class="a-user">
        <el-button type="primary" size="small" @click="operateUser('add')">新增用户</el-button>
        <el-table :data="tableData" stripe style="width: 100%" border class="user-table" size="small">
            <el-table-column prop="id" label="编号" width="180">
            </el-table-column>
            <el-table-column prop="userName" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="auth" label="权限">
                <template slot-scope="scope">{{ scope.row.auth | role }}</template>
            </el-table-column>
            <el-table-column prop="homeDesc" label="主页描述"> 
            </el-table-column>
            <el-table-column prop="age" label="年龄">
            </el-table-column>
            <el-table-column prop="lastDate" label="最近一次登录时间">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button @click="operateUser('edit', scope.row)" type="text" size="small">编辑</el-button>
                    <el-button type="text" @click="deleteRow(scope.row)" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div v-if="showDialog">
            <user-dialog :showOrHide="showDialog" :rowDetail="rowDetail" @close-dialog="showDialog = false;" @refresh-list="refreshMethods"></user-dialog>
        </div>
    </div>
</template>

<script>
    import { Table, TableColumn, Button, Message } from "element-ui"
    import userDialog from "@/components/Dialog/editNewUser.vue"
    import ajax from "@/libs/fench"
    export default {
        name: "s-user",
        data() {
            return {
                showDialog: false,
                rowDetail: null,
                tableData: [],
            }
        },
        components: {
            "el-table": Table,
            "el-table-column": TableColumn,
            "el-button": Button,
            userDialog
        },
        methods: {
            getList() {
                ajax.get("user/getList").then(res => this.tableData = res.data );
            },
            editRow(row) {
                console.log(row);
            },
            deleteRow(row) {
                console.log(row);
                ajax.post("user/delete", { id: +row.id }).then(res => {
                    Message({ message: "删除成功", type: "success" });
                    this.getList();
                })
            },
            operateUser(type, row) {
                type == "edit" ? this.rowDetail = row : this.rowDetail = null;
                this.showDialog = true;
            },
            refreshMethods (params) {
                console.log(params);
                this.getList();
            }
        },
        mounted() {
            this.getList();

        }
    }
</script>

<style lang="scss">
    .user-table.el-table {
        margin-top: 20px;
        th.gutter{
            display: table-cell!important;
        }
    }
</style>