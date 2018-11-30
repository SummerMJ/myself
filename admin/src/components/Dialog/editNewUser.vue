<template>
    <div class="a-edit-new-user">
        <el-dialog :visible.sync="dialogVisible" width="400px" :before-close="handleClose" size="small">
            <span slot="title">{{ editOrNew + "用户" }}</span>
            <div class="operate-box">
                <el-form ref="form" :model="form" :rules="rules" label-width="80px">
                    <el-form-item label="用户名" prop="userName">
                        <el-input v-model="form.userName"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input v-model="form.password" type="password"></el-input>
                    </el-form-item>
                    <el-form-item label="姓名" prop="userName">
                        <el-input v-model="form.realName"></el-input>
                    </el-form-item>
                    <el-form-item label="年龄">
                        <el-input v-model="form.age"></el-input>
                    </el-form-item>
                    <el-form-item label="主页描述">
                        <el-input type="textarea" v-model="form.homeDesc"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="confirm">确定</el-button>
                        <el-button @click=handleClose>取消</el-button>
                    </el-form-item>
                </el-form>
            </div>

        </el-dialog>
    </div>
</template>

<script>
    import { Dialog, Form, FormItem, Input, Button, Message } from "element-ui";
    import * as utils from "@/libs/utils"
    import ajax from "@/libs/fench"
    export default {
        name: "editNewUser",
        props: ["showOrHide", "rowDetail"],
        data() {
            return {
                form: {},
                rules: {
                    userName: [
                        { required: true, message: "用户名不能为空", trigger: "blur" },
                        { max: 10, message: "长度不能超过10个字符", trigger: "blur" }
                    ],
                    password: [
                        { required: true, message: "密码不能为空", trigger: "blur" },
                        { min: 6, max: 16, message: "密码的长度在8到16个字符之间", trigger: "blur" },
                    ]
                }
            }
        },
        computed: {
            editOrNew() {
                return this.rowDetail ? "编辑" : "新建";
            },
            dialogVisible() {
                return this.showOrHide;
            }
        },
        methods: {
            handleClose() {
                this.$emit("close-dialog", false);
            },
            add() {
                let url = "";
                if (this.rowDetail) {
                    url = "upadte";
                } else {
                    url = "add";
                }
                ajax.post("user/" + url, this.form).then(res => {
                    this.$emit("refresh-list", []);
                    Message.success(this.editOrNew + "成功");
                    this.handleClose();
                })
            },
            confirm() {
                this.$refs.form.validate((valid) => {
                    if (valid) {
                        this.add();
                    } else {
                        return false;
                    }
                });
            }
        },
        mounted() {
            if (this.rowDetail) this.form = utils.deepClone(this.rowDetail);
        },
        components: {
            "el-dialog": Dialog,
            "el-form": Form,
            "el-form-item": FormItem,
            "el-input": Input,
            "el-button": Button
        }
    }
</script>