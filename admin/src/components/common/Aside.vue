<template>
    <el-menu :default-active="activeItem" class="height-full" :router="true" @open="handleOpen" @close="handleClose" @select="selectedMenu">       
        <el-menu-item index="/home/dashboard">
            <i class="el-icon-menu"></i>
            <span slot="title">主页</span>
        </el-menu-item>      
        <el-menu-item index="/home/user">
            <i class="el-icon-info"></i>
            <span slot="title">用户</span>
        </el-menu-item>        
    </el-menu>
</template>

<script>
    import { Menu, Submenu, MenuItemGroup, MenuItem } from "element-ui"
    export default {
        name: "Aside",
        data () {
            return {
                activeItem: ""
            }
        },
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
                // this.$router.push(params);
            }
        },
        mounted () {
            this.$nextTick(() => {
                this.activeItem = this.$route.path;
                console.log(this.activeItem)
            });
        }

    }
</script>

<style lang="scss" scoped>

</style>