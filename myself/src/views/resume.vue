<template>
	<div class="resume">
		<Resume-Head />
		<div class="my-blog">
			<h1>熟悉前端,涉猎后端</h1>
			<p class="sub-title">不会写代码的胖子不是一个好程序猿</p>
		</div>
	</div>
</template>
<script>
	export default {
		name: "resume"
	}
</script>

<style lang="less" scoped>
    .resume {
        .my-blog {
        	display: flex;
        	flex-direction: column;
        	justify-content: center;
        	align-items: center;
        	padding-top: 50px;
        	h1 { font-size: 40px; margin-bottom: 30px; }
        	.sub-title { color: #666; }
        }
    }
</style>