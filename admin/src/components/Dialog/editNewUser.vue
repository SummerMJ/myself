<template>
    <div class="a-edit-new-user">
        <el-dialog :visible.sync="dialogVisible" width="30%" :before-close="handleClose" size="small">
            <span slot="title">{{ editOrNew + "用户" }}</span>
            <div class="operate-box">
                <el-form ref="form" :model="form" :rules="rules" label-width="80px">
                    <el-form-item label="姓名" prop="userName">
                        <el-input v-model="form.userName"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input v-model="form.password"></el-input>
                    </el-form-item>
                    <el-form-item label="身高">
                        <el-input v-model="form.height"></el-input>
                    </el-form-item>
                    <el-form-item label="年龄">
                        <el-input v-model="form.age"></el-input>
                    </el-form-item>
                    <el-form-item label="生日">
                        <el-input v-model="form.date"></el-input>
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
    import ajax from "@/libs/fench"
    export default {
        name: "editNewUser",
        props: ["showOrHide", "rowDetail"],
        data() {
            return {
                form: {},
                rules: {
                    userName: [
                        { required: true, message: "姓名不能为空", trigger: "blur" },
                        { max: 10, message: "长度不能超过10个字符", trigger: "blur" }
                    ],
                    password: [{ required: true, message: "密码不能为空", trigger: "blur" }]
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
                console.log(this.form);
                ajax.post("user/add", this.form).then(res => {
                    Message({
                        message: this.editOrNew + "成功",
                        type: 'success'
                    });
                    this.$emit("refresh");
                })
            },
            confirm() {
                this.$refs.form.validate((valid) => {
                    if (valid) {
                        this.add();
                        this.handleClose();
                    } else {
                        return false;
                    }
                });

            }
        },
        mounted() {
            if (this.rowDetail) this.form = this.rowDetail;
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