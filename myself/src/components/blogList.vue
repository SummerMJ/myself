<template>
	<div class="blog-list">
		<ul class="list-wrapper">
			<li class="list-item" v-for="(item, index) in list" :key="index">
				<p class="item-title">{{item.aTitle }}</p>
                <button class="read-more" @click="$router.push({name: 'Artical', params: {id: item.id}})">阅读全文>></button>
				<div class="split-line"></div>
				<div class="operate-type">
					<div class="create-time">创建时间：{{ item.createTime }}</div>
					<div class="create-person">作者：{{ item.createPerson }}</div>
					<div class="tag">生活</div>
					<div class="tag">技术</div>
				</div>
			</li>
			<Spin size="large" fix v-if="spinShow"></Spin>
		</ul>
		<div class="page-box">
			<Page :total="list.length" show-elevator/>
		</div>
	</div>
</template>
<script>
import { Page, Spin } from "iview";
export default {
	name: "blogList",
	data() {
		return {
			list: [],
			spinShow: true
		};
	}, 
	components: {
		Page,
		Spin,
	},
	mounted() {
		this.$get("/artical/getList").then(res => {
			this.list = res.data || [];
            console.log(res)
			this.spinShow = false; 
		});
	}
};
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
                    .create-person { margin-bottom: 10px; }
                }
            }
        }
    }
    .page-box { display: flex; align-items: center; justify-content: center; height: 100px; }
    .tag { padding: 5px 12px; background-color: #19BE6B; margin-right: 10px; border-radius: 5px; float: left; color: #FFF; text-align: center;}
    .read-more { position: absolute; right: 20px; top: 80px; background: #fff; color: #2e2e2e; border-radius: 5px; border: none; font-size: 14px; cursor: pointer;outline: none;
        &:hover { color: #2D8CF0; }
        &:active { outline: none; border: none; }
     }
</style>


