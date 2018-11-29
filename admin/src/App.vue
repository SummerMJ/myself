<template>
    <div class="home">
        <el-container class="height-full">
            <el-header>
                <p class="title">一只胖子的家</p>
                <el-button size="small">退出</el-button>
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
    import CAside from "@/components/common/Aside.vue"
    import AHeader from "@/components/common/Aheader.vue"
    import { Container, Header, Aside, Main, Button } from "element-ui"
    export default {
        name: 'home',
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
        }
    }
</script>

<style lang="scss">
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