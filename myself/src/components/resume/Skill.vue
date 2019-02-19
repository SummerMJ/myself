<template>
	<div class="my-skill">
		<ul class="skill-wrapper">
			<li class="item break" :title="item.name" :class="activeClass(item)" :style="activeWidth(item)" v-for="item in $store.state.resume.skill">{{ item.name }}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "Myskill",
		methods: {
			activeClass (item) {
				let type = "";
				switch (item.level) {
					case '1': type = "good";break;
					case '2': type = "general";break;
					case '3': type = "normal";break;
					default: type = "good";break;
				}
				return type;
			},
			activeWidth (item) {
				return "width:" + item.score + "%"
			}
		},
		mounted () {
			console.log(this.$store.state)
		}
	}
</script>

<style lang="less" scoped>
	.my-skill { margin-top: 30px;
		.skill-wrapper {
			max-width: 800px;
			margin: 0 auto;
			padding: 0 20px;
			box-sizing: border-box;
			overflow: hidden;
			.item { height: 40px; line-height: 40px; padding-left: 15px;position: relative; margin-bottom: 25px; font-size: 18px; font-family: Consolas;
				&:before { content: ""; position: absolute; width: 3px; height: 100%; left: 0; top: 0; }
				&.good { background-color: #D6EFFF; color: #3498DB;
					&:before { background-color: #3498DB; }
				}
				&.general { background-color: #EAF6D0; color: #80BD01;
					&:before { background-color: #80BD01; }
				}
				&.normal { background-color: #FFF6DD; color: #FDBC40;
					&:before { background-color: #FDBC40; }
				}
			}
		}
	}
</style>
