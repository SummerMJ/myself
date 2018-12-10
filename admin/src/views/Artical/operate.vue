<template>
    <div class="add-artical">
        <el-form ref="form" :model="form" :rules="rules" label-width="80px" size="medium">
            <el-form-item label="文章标题" prop="aTitle">
                <el-input v-model="form.aTitle" placeholder="请填写文章标题(敲黑板:不准输空格啊!!)"></el-input>
            </el-form-item>
            <el-form-item label="文章类型">
                <el-select v-model="form.aType" multiple placeholder="请选择文章类型">
                    <el-option label="技术" value="1"></el-option>
                    <el-option label="生活" value="2"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="文章作者" prop="createPerson" style="width: 200px;">
                <el-input v-model="form.createPerson" placeholder="请填写文章作者"></el-input>
            </el-form-item>
            <el-form-item label="内容" prop="aContent">
                <quill-editor v-model="form.aContent" ref="myQuillEditor" :options="editorOption" @blur="onEditorBlur($event)" @focus="onEditorFocus($event)" @ready="onEditorReady($event)"></quill-editor>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">保存</el-button>
                <router-link to="/home/artical/list">
                    <el-button>取消</el-button>
                </router-link>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import hljs from 'highlight.js'
    import { mapGetters } from "vuex"
    import { quillEditor } from "vue-quill-editor"
    import { Form, FormItem, Select, Option, Input, Button, Message } from "element-ui"
    // import 'quill/dist/quill.core.css'
    // import 'quill/dist/quill.snow.css'
    // import 'quill/dist/quill.bubble.css'
    import ajax from "@/libs/fench"
    import * as utils from "@/libs/utils"
    export default {
        name: "addArtical",
        computed: {
            ...mapGetters(["userInfo"])
        },
        data() {
            return {
                editorOption: {
                    modules: {
                        toolbar: [
                            ['bold', 'italic', 'underline', 'strike'],
                            ['blockquote', 'code-block'],
                            [{ 'header': 1 }, { 'header': 2 }],
                            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                            [{ 'script': 'sub' }, { 'script': 'super' }],
                            [{ 'indent': '-1' }, { 'indent': '+1' }],
                            [{ 'direction': 'rtl' }],
                            [{ 'size': ['small', false, 'large', 'huge'] }],
                            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                            [{ 'font': [] }],
                            [{ 'color': [] }, { 'background': [] }],
                            [{ 'align': [] }],
                            ['clean'],
                            ['link', 'image', 'video']
                        ],
                        syntax: {
                            highlight: text => hljs.highlightAuto(text).value
                        }
                    },
                },
                form: {
                    aTitle: "",
                    aType: [],
                    aContent: "",
                    createPerson: ""
                },
                rules: {
                    aTitle: [{ required: true, message: "标题一定要填啊!", trigger: "blur" }],
                    createPerson: [{ required: true, message: "作者一定要填啊!", trigger: "blur" }],
                    aContent: [{ required: true, message: "内容一定要填啊!", trigger: "blur" }]
                }
            }
        },
        methods: {
            onEditorBlur() {

            },
            onEditorFocus() {

            },
            onEditorReady() {

            },
            save() {
                let url = this.$route.params.id ? "update" : "add";
                let form = utils.deepClone(this.form);
                form.aType = form.aType.join(",");
                ajax.post("/artical/" + url, form).then(res => {
                    Message.success("成功!");
                    this.$router.push("/home/artical/list");
                })
            },
            getOne() {
                const id = this.$route.params.id;
                ajax.get("/artical/getOne", { id: id }).then(res => {
                    res.data.aType = res.data.aType.split(",");
                    this.form = res.data;
                })
            },
            onSubmit() {
                this.$refs.form.validate((valid) => {
                    if (valid) {
                        this.save();
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        },
        mounted() {
            if (this.$route.params.id) {
                this.getOne();
            } else {
                this.form.createPerson = this.userInfo.realName;
            }
        },
        components: {
            quillEditor,
            "el-form": Form,
            "el-form-item": FormItem,
            "el-select": Select,
            "el-option": Option,
            "el-input": Input,
            "el-button": Button
        }
    }
</script>

<style lang="scss">
    .add-artical {
        .quill-editor {
            height: 600px;

            .ql-container {
                height: calc(100% - 90px);
            }
        }

        .el-select {
            width: 400px;
        }
    }
</style>