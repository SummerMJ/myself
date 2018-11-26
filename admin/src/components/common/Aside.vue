<template>
    <el-menu default-active="2" class="height-full" @open="handleOpen" @close="handleClose" @select="selectedMenu">
        <!-- <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>主页</span>
            </template>
            <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
        </el-submenu> -->
        <el-menu-item index="/">
            <i class="el-icon-menu"></i>
            <span slot="title">主页</span>
        </el-menu-item>
        <!-- <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
        </el-menu-item> -->
        <el-menu-item index="user">
            <i class="el-icon-info"></i>
            <span slot="title">用户</span>
        </el-menu-item>
    </el-menu>
</template>

<script>
    import { Menu, Submenu, MenuItemGroup, MenuItem } from "element-ui"
    export default {
        name: "Aside",
        components: {
            "el-menu": Menu,
            "el-submenu": Submenu,
            "el-menu-item-gruop": MenuItemGroup,
            "el-menu-item": MenuItem
        },
        methods: {
            handleOpen() {

            },
            handleClose() {

            },
            selectedMenu(params) {
                this.$router.push(params);
            }
        }

    }
</script>

<style lang="scss" scoped>

</style>