<template>
    <div class="home">
        <el-container class="height-full">
            <el-header>
                <p class="title">一只胖子的家</p>
                <router-link to="/login">
                    <el-button size="small" @click="signOut">退出</el-button>
                </router-link>
            </el-header>
            <el-container class="height-full">
                <el-aside width="200px">
                    <CAside></CAside>
                </el-aside>
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
                Message.success("登出成功");
            }
        },
        computed:{
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
        },
        mounted () {
            console.log(this.userInfo);
        }
    }
</script>

<style lang="scss" scoped>
    .home {
        position: absolute;
        height: 100%;
        width: 100%;
    }

    .el-header {
        background: #000;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .title {
            font-size: 20px;
            color: #fff;
        }
    }
</style>