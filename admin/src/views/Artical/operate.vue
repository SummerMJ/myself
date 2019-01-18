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
                <quill-editor
                        v-model="form.aContent"
                        ref="myQuillEditor"
                        :options="editorOption"
                        @blur="onEditorBlur($event)"
                        @focus="onEditorFocus($event)"
                        @ready="onEditorReady($event)"
                ></quill-editor>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">保存</el-button>
                <el-button @click="$router.push('/home/artical/list')">取消</el-button>
                <span class="auto-save" v-show="isTyping">正在自动保存。。。</span>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import hljs from 'highlight.js'
    import { mapGetters } from "vuex"
    import { quillEditor } from "vue-quill-editor"
    import { Form, FormItem, Select, Option, Input, Button, Message } from "element-ui"
    import 'quill/dist/quill.core.css'
    import 'quill/dist/quill.snow.css'
    import 'quill/dist/quill.bubble.css'
    import ajax from "@/libs/fench"
    import * as utils from "@/libs/utils"
    export default {
        name: "addArtical",
        computed: {
            ...mapGetters(["userInfo"])
        },
        data() {
            return {
                editorSetting:{
                    height:200,
                },
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
                            [{ 'size': ['small', 'middle', false, 'large', 'huge'] }],
                            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                            [{ 'font': [] }],
                            [{ 'color': [] }, { 'background': [] }],
                            [{ 'align': [] }],
                            ['clean'],
                            ['link', 'image', 'video']
                        ],
                        syntax: {
                            highlight: text => {
                                return hljs.highlightAuto(text).value;
                            }
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
                },
                isTyping: false,
                autoSave: false,
                interval: 0
            }
        },
        methods: {
            onEditorBlur() {

            },
            onEditorFocus() {

            },
            onEditorReady() {

            },
            onDraft () {

            },
            saveAjax () {
                let url = this.$route.params.id ? "update" : "add";
                let form = utils.deepClone(this.form);
                form.aType = form.aType.join(",");
                return new Promise(resolve => {
                    ajax.post("/artical/" + url, form).then(res => {
                        resolve(res);
                    })
                })
            },
            async save() {
                await this.saveAjax();
                Message.success("成功!");
                this.$router.push("/home/artical/list");
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
            let _this = this;
            window.addEventListener("keyup", function (e) {
                clearInterval(_this.interval);
                _this.isTyping = true;
                _this.interval = setInterval( async () => {
                    _this.isTyping = false;
                    _this.autoSave = true;
                    console.log("第几次")
                    await _this.saveAjax();
                    _this.autoSave = false;
                    clearInterval(_this.interval);
                }, 1500);

            })
            if (this.$route.params.id) {
                this.getOne();
            } else {
                this.form.createPerson = this.userInfo.realName;
            }
        },
        components: {
            "quill-editor": quillEditor,
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
    .ql-editor .ql-size-large { font-size: 1.0rem; }
    .quill-code {
        border: none;
        height: auto;
        > code {
            width: 100%;
            margin: 0;
            padding: 1rem;
            border: 1px solid #ccc;
            border-top: none;
            border-radius: 0;
            height: 10rem;
            overflow-y: auto;
            resize: vertical;
        }
    }
</style>

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

<style lang="scss" scoped>
    .auto-save { margin-left: 20px; color: #CCC; transition: all 0.25s ease-in-out; }
</style>