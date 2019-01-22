<template>
    <div class="markdown-wrapper">
        <mavon-editor class="height-full" v-model="value" codeStyle="dark" :boxShadow="false" :toolbarsFlag="true" />
        <div class="button-wrapper">
            <el-button type="primary" @click="save" size="small">保存</el-button>
            <el-button size="small" @click="$router.push('/home/artical/list')">取消</el-button>
        </div>
    </div>
</template>

<script>
    import { Button }  from "element-ui"
    import marked from "marked"
    export default {
        name: 'markdown',
        components: {
            "el-button":Button
        },
        data () {
            return {
                value: "",
                defaultData: "preview"
            }
        },
        methods: {
            save () {
                console.log(marked(this.value))
            }
        },
  };
</script>

<style scoped lang="scss">
    .markdown-wrapper { height: calc(100% - 70px);
        .button-wrapper { display: flex; justify-content: flex-end; margin-top: 10px; }
    }
</style>