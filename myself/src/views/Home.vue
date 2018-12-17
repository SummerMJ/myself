<template>
	<div class="home" >
		<div class="head-box" :class="{ hide : show }">
			<ylc-header/>
		</div>
		<div class="home-content" :class="{ 'hight-full' : show }" ref="viewBox">
			<blog-list/>
		</div>
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
	methods: {
		handleScroll() {
			const scrollTop =
				window.pageYOffset ||
				document.documentElement.scrollTop ||
				document.body.scrollTop;
			this.$refs.viewBox.scrollTop > 100 ? this.show = true : this.show = false;
			
		}
	},
	mounted() {
		this.$nextTick(e => {
			window.addEventListener("scroll", this.handleScroll, true);
		})
	}
};
</script>
<style lang="scss" scoped>
	.home { height: 100%; background: #f2f2f2; overflow: hidden; width: 100%;
		.head-box { height: 100px; position: fixed; top: 0; left: 0; right: 0; z-index: 10; transition: all 0.25s ease-in-out;
			&.hide { top: -100px; }
		}
		.home-content { height: calc(100% - 100px); position: absolute; bottom: 0; width: calc(100% + 17px); overflow-y: scroll; overflow-x: hidden; transition: all 0.25s ease-in-out;
			&.hight-full { height: 100%; }
		}
	}
</style>
