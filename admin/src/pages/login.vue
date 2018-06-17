<template>
    <div class="login">
        <div class="login-wrapper">
            <el-form :model="loginForm" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="pass">
                    <el-input type="text" v-model="loginForm.username" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="checkPass">
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
    // import {  } 
    export default {
        name: "login",
        data () {
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                callback(new Error('请输入密码'));
                } else {
                if (this.ruleForm2.checkPass !== '') {
                    this.$refs.ruleForm2.validateField('checkPass');
                }
                callback();
                }
            };
            return {
                loginForm: {
                    username: '',
                    password: '', 
                    },
                    rules2: {
                    checkPass: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    }    
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
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
