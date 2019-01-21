<template>
    <div class="artical-manager">
        <el-breadcrumb separator-class="el-icon-arrow-right" class="bread">
            <el-breadcrumb-item :to="{ path: '/home/artical' }">文章管理</el-breadcrumb-item>
            <el-breadcrumb-item v-if="show">{{ type }}文章</el-breadcrumb-item>
        </el-breadcrumb>
        <router-view></router-view>
    </div>
</template>
<script>
    import { Breadcrumb, BreadcrumbItem } from "element-ui";
    export default {
        name: "ActicalManager",
        data() {
            return {
                show: false,
                type: ""
            }
        },
        watch: {
            $route(to, from) {
                this.dealPath(to);
            }
        },
        methods: {
            dealPath(to) {
                if (to.name == "newArticall") {
                    this.show = true;
                    this.type = "新建"
                } else if (to.name == "editArtical") {
                    this.show = true;
                    this.type = "编辑"
                } else if (to.name == "checkArtical") {
                    this.show = true;
                    this.type = "查看"
                } else if(to.name == "Markdown") {
                    this.show = true;
                    this.type = "新建";
                }else {
                    this.show = false;
                }
            },
        },
        mounted() {
            console.log(this.$route);
            this.dealPath(this.$route);
        },
        components: {
            "el-breadcrumb": Breadcrumb,
            "el-breadcrumb-item": BreadcrumbItem
        }
    }
</script>

<style lang="scss" scoped>
    .bread {
        margin-bottom: 20px;
    }
</style>