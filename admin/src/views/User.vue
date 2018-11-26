<template>
    <div class="a-user">
        <el-button type="primary" @click="operateUser('add')">新增用户</el-button>
        <el-table :data="tableData" stripe style="width: 100%" border>
            <el-table-column prop="id" label="id" width="180">
            </el-table-column>
            <el-table-column prop="userName" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="password" label="密码">
            </el-table-column>
            <el-table-column prop="height" label="身高">
            </el-table-column>
            <el-table-column prop="age" label="年龄">
            </el-table-column>
            <el-table-column prop="date" label="生日">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button @click="operateUser('edit', scope.row)" type="text" size="small">编辑</el-button>
                    <el-button type="text" @click="deleteRow(scope.row)" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div v-if="showDialog">
<user-dialog :showOrHide="showDialog" :rowDetail="rowDetail" @close-dialog="showDialog = false;" @refresh="getList"></user-dialog>
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
                tableData: []
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
                ajax.get("user/getList").then(res => {
                    this.tableData = res.data;
                })
            },
            editRow(row) {
                console.log(row);
            },
            deleteRow(row) {
                console.log(row);
                ajax.post("user/delete", { id: row.id }).then(res => {
                    Message({message: "删除成功", type: "success"});
                    this.getList();
                })
            },
            operateUser(type, row) {
                type == "edit" ? this.rowDetail = row : this.rowDetail = null;
                this.showDialog = true;
            }
        },
        mounted() {
            this.getList();

        }
    }
</script>

<style lang="scss" scoped>
    .el-table {
        margin-top: 20px;
    }
</style>