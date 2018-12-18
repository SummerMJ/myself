<template>
    <div class="artical-detail">
        <div class="title">{{ smjObj.aTitle }}</div>
        <div class="line"></div>
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
                <div class="ql-editor" v-html="smjObj.aContent"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "articalDetail",
    data () {
        return {
            smjObj: {}
        }
    },
    methods: {
        getOne (id) {
            this.$get("/artical/getOne", { id: id }).then(res => {
                this.smjObj = res.data;
            })
        }
    },
    mounted () {
        const id = this.$route.params.id;
        this.getOne(id);
    }
}
</script>

<style lang="scss" scoped>
    .artical-detail { width: 800px; margin: 30px auto;}
    .title {
        font-size: 26px;
        font-weight: bold;
        text-align: center;
    }
    .line { width: 100%; height: 1px; background: linear-gradient(to right, #fff, #ccc, #fff); margin: 20px auto; }
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
</style>


