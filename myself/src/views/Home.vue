<template>
	<div class="home" >
		<blog-list/>
	</div>
</template>
<script>
export default {
	name: "home",
	data () {
		return {
			show: false
		}
	},
};
</script>
<style lang="scss" scoped>
	.home { height: 100%; overflow: hidden; width: 100%;
	}
</style>
