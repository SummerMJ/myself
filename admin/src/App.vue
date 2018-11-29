<template>
    <router-view></router-view>
</template>

<script>
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
    
</style>