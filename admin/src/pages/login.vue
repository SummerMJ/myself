<template>
    <div class="login">
        <div class="login-wrapper">
            <el-form :model="loginForm" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="username">
                    <el-input type="text" v-model="loginForm.username" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="loginForm.password" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
                    <el-button @click="resetForm('ruleForm2')">注册</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
  
<script>
    import api from "../../../myself/src/fetch/api";
    export default {
        name: "login",
        data () {
            var validatePassword = (rule, value, callback) => {
                if (value === '') {
                callback(new Error('请输入密码'));
                } else {
                    callback();
                }
            };
            return {
                loginForm: {
                    username: '',
                    password: '', 
                    },
                    rules2: {
                        password: [
                            { validator: validatePassword, trigger: 'blur' }
                        ],
                    }    
            }
        },
        methods: {
            login () {
                api.login({
                    user: this.loginForm.username,
                    password: this.loginForm.password
                })
                .then(res => {
                    if (res.success) {
                        this.$message({
                            message: '登录成功',
                            type: 'success'
                        })
                        console.log(res)
                    } else {
                        this.$message.error(res.msg);
                    }
                })
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.login();
                } else {
                    console.log('error submit!!');
                    return false;
                }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style lang="scss" scoped>
.login {
  position: absolute;
  height: 100%;
  width: 100%;
  .login-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    height: 227px;
    width: 400px;
  }
}
</style>
