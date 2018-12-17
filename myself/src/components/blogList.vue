<template>
    <div class="blog-list">
        <ul class="list-wrapper">
            <li class="list-item" v-for="(item, index) in list" :key=index>
                <p class="item-title">{{item.aTitle }}</p>
                <div class="split-line"></div>
                <div class="operate-type">
                    <div class="create-time">创建时间：{{ item.createTime }}</div>
                    <div class="create-person">作者：{{ item.createPerson }}</div>
                    <i-tag color="primary">生活</i-tag>
                </div>
            </li>
            <Spin size="large" fix v-if="spinShow"></Spin>
        </ul>
        <div class="page-box">
            <Page :total="list.length" show-elevator />
        </div>
    </div>
</template>
<script>
import ajax from "@/fetch/api"
import { Page, Spin, Tag } from "iview"
export default {
    name: "blogList",
    data () {
        return {
            list: [],
            spinShow: true
        }
    },
    components: {
        Page, Spin, 
        "i-tag": Tag
    },
    mounted () {
        ajax.get("/artical/getList").then(res => {
            this.list = res.data;
            // this.list.push(...res.data);
            this.spinShow = false;
        })
    }
}
</script>

<style lang="scss" scoped> 
    .blog-list { width: 800px; margin: 0 auto; padding-top: 30px; height: 100%; box-sizing: border-box;
        .list-wrapper { display: flex; flex-wrap: wrap; justify-content: space-between;
            .list-item { width: 230px; height: 300px; background-color: #FFF; 
            margin: 0 20px 40px 0; cursor: pointer; transition: all 0.3s ease-in-out; position: relative; overflow: hidden;
                &:hover {  box-shadow: 0 4px 12px 2px rgba(0,0,0,.1); }
                .item-title { font-size: 20px; margin: 30px;}
                .split-line { position: absolute; left: -10px; right: 0; bottom: 150px;
                width: 250px; height: 20px; background: #2D8CF0; transform: rotate(10deg);  }
                .operate-type { position: absolute; left: 10px; right: 10px; bottom: 0; height: 100px; 
                    .create-time { font-size: 14px; margin-bottom: 10px; }
                }
            }
        }
    }
    .page-box { display: flex; align-items: center; justify-content: center; height: 100px; }
    
</style>


