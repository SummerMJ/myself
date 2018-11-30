<template>
    <div class="artical-manager">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">文章管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>
<script>
import { Breadcrumb, BreadcrumbItem } from "element-ui";
    export default {
        name: "ActicalManager",
        components: {
            "el-breadcrumb": Breadcrumb,
            "el-breadcrumb-item": BreadcrumbItem
        }
    }
</script>

<style lang="scss" scoped>
    .artical-manager {}
</style>