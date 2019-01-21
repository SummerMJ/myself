<template>
	<div id="app">
		<div class="head-box" :class="{ hide : show }">
			<ylc-header/>
		</div>
		<div class="content" :class="{ 'hight-full' : show }" ref="viewBox">
			<transition :name="transitionName">
				<router-view></router-view>
			</transition>
		</div>
	</div>
</template>

<script>
export default {
	name: "App",
	data() {
		return {
			show: false,
			transitionName: ""
		};
	},
	watch: {
		$route(to, from) {
			if (to.meta.index > from.meta.index) {
				this.transitionName = "slide-left";
			} else {
				this.transitionName = "slide-right";
			}
		}
	},
	methods: {
		handleScroll() {
			this.$refs.viewBox.scrollTop > 250
				? (this.show = true)
				: (this.show = false);
		}
	},
	mounted() {
		this.$nextTick(e => {
			window.addEventListener("scroll", this.handleScroll, true);
		});
	}
};
</script>

<style lang="scss">
    .ql-snow .ql-editor pre { font-size: 16px;}
    .ql-editor .ql-size-large { font-size: 16px; }
	#app {
		position: absolute;
		width: 100%;
		height: 100%;
		overflow: hidden;
		background: #f2f2f2;
		.head-box { height: 100px; position: fixed; top: 0; left: 0; right: 0; z-index: 10; transition: all 0.25s ease-in-out;
			&.hide { top: -100px; }
		}
		.content { height: calc(100% - 100px); position: absolute; bottom: 0; width: calc(100% + 17px); overflow-y: scroll; overflow-x: hidden; transition: all 0.25s ease-in-out;
			&.hight-full { height: 100%; }
		}
		.slide-right-enter-active,
		.slide-right-leave-active,
		.slide-left-enter-active,
		.slide-left-leave-active {
			will-change: transform;
			transition: all 300ms;
			position: absolute;
		}
		.slide-right-enter {
			opacity: 0;
			transform: translate3d(-100%, 0, 0);
		}
		.slide-right-leave-active {
			opacity: 0;
			transform: translate3d(100%, 0, 0);
		}
		.slide-left-enter {
			opacity: 0;
			transform: translate3d(100%, 0, 0);
		}
		.slide-left-leave-active {
			opacity: 0;
			transform: translate3d(-100%, 0, 0);
		}
	}
</style>
