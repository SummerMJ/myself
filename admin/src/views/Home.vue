<template>
    <div class="home">
        <el-container class="height-full">
            <el-aside width="200px">
                <div class="header-box">
                    <p @click="$router.push('/home/dashboard')">Summer</p>
                </div>
                <CAside></CAside>
                <el-button type="primary" @click="signOut"  class="log-out">登出</el-button>
            </el-aside>
            <el-container class="height-full main-bg">
                <!-- <el-header>
                    <p class="title" @click="$router.push('/home/dashboard')">{{ userInfo.homeDesc }}</p>
                    <router-link to="/login">
                        <el-button size="small" @click="signOut">退出</el-button>
                    </router-link>
                </el-header> -->
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import * as utils from "@/libs/utils";
    import CAside from "@/components/common/Aside.vue"
    import AHeader from "@/components/common/Aheader.vue"
    import { Container, Header, Aside, Main, Button, Message } from "element-ui"
    import { mapGetters } from "vuex"
    export default {
        name: 'home',
        methods: {
            signOut() {
                utils.deleteCookie("ticket");
                localStorage.removeItem("userInfo");
                this.$router.push("/login");
                Message.success("登出成功");
            }
        },
        computed: {
            ...mapGetters(["userInfo"])
        },
        components: {
            "el-container": Container,
            "el-header": Header,
            "el-aside": Aside,
            "el-main": Main,
            "el-button": Button,
            CAside,
            AHeader
        }
    }
</script>

<style lang="scss" scoped>
    .home {
        position: absolute;
        height: 100%;
        width: 100%;
    }

    .el-aside {
        position: relative;
        box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
        .header-box {
            height: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 30px;
            font-weight: bold;
            box-sizing: border-box;
            border-bottom: 1px solid $line;
            color: $main;
        }

        .log-out {
            position: absolute;
            bottom: 5px;
            left: 50%;
            transform: translateX(-50%);
            width: calc(100% - 10px);
            border: none;
        }
    }

    .el-header {
        background: #FFF;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid $line;

        .title {
            font-size: 20px;
            color: $main;
            cursor: pointer;
        }
    }
</style>