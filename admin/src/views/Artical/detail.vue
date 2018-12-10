<template>
    <div class="check-artical">
        <div class="title">{{ smjObj.aTitle }}</div>
        <div class="time-people">
            <div class="flex">
                <div>创建时间: </div>
                <div>{{ smjObj.createTime }}</div>
            </div>
            <div class="flex">
                <div>作者: </div>
                <div>{{ smjObj.createPerson }}</div>
            </div>
        </div>

        <div class="quill-editor">
            <div class="ql-container ql-snow">
                <div class="ql-editor" v-html="smjObj.aContent" v-highlight></div>
            </div>
        </div>
    </div>
</template>
<script>
    import ajax from "@/libs/fench"
    export default {
        name: "checkArtical",
        data() {
            return {
                htmlDoc: "",
                smjObj: {}
            }
        },
        mounted() {
            ajax.get("artical/getOne", { id: this.$route.params.id }).then(res => {
                this.smjObj = res.data;
                console.log(this.smjObj);
            })
        }
    }
</script>

<style lang="scss" scoped>
    .check-artical {
        .title {
            font-size: 26px;
            font-weight: bold;
            text-align: center;
            border-bottom: 1px solid $line;
            padding-bottom: 20px;
            margin-bottom: 15px;
        }

        .time-people {
            display: flex;
            align-items: center;
            justify-content: space-around;
            margin-bottom: 30px;

            .flex {
                display: flex;
                align-items: center;
                color: #aaa;
            }
        }

        .ql-editor {
            width: 800px;
            margin: 0 auto;
        }

        .ql-container.ql-snow {
            border: none;
        }
    }
</style>