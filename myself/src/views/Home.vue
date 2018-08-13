<template>
	<div class="home">
		<ylc-header/>
		<div class="ylc-content clearfix">
			<div class="left-part">
				<div class="fangwen clearfix">
					<div class="fangwen-item">
						<p>有<span>5</span>个人看过我</p>
					</div>
					<div class="fangwen-item">
						<p>收到<span>5</span>个赞<i class="iconfont icon-xin"></i></p>
					</div>
				</div>
				<hr class="hr-5">
				<div class="classify">
					<h4>分类</h4>
				</div>
			</div>
			<div class="right-part">
				<p class="about-myself">
					Hello, My Name is LingChao Yang, you can call me Summer,
					because I love Summer. I'm a font-end developer.
				</p>
				<hr class="hr-20">
				<div class="blog-wrapper">
					<list-item />
				</div>
			</div>

		</div>
	</div>
</template>
<script>
	export default {
		name: 'home'
	}
</script>
<style lang="scss" scoped>
	.home {
        background-color: #ABCAC9;
		.ylc-content {max-width: 1200px;margin: 100px auto;background: #fff;border-radius: 10px;padding: 20px; box-shadow: 0 0 20px #fff;
			.left-part, {float: left;}
			.right-part {
				margin-left: 300px;
				padding: 0 20px 10px 10px;
				.about-myself {text-indent: 1.5em; font-size: 22px;line-height: 30px; font-weight: bold;}
				.blog-wrapper {margin-top: 30px;}
			}
			.left-part {
				width: 300px;
				background-color: #F2F2EB;
				.fangwen {
					padding: 15px 0 0 15px;
					box-sizing: border-box;
					.fangwen-item {
						float: left;
						height: 25px;
						margin-right: 15px;
						position: relative;
						span { font-size: 16px; color: #26C9F8; margin: 0 5px; }
						.icon-xin { position: absolute; color: #fff; font-size: 250%; top: -3px; margin-left: 10px; cursor: pointer;
							&:hover { color: #F12A1F; }
							&.active { color: #F12A1F; }
						}
					}
				}
			}
			@media screen and (max-width: 768px) {
				.left-part, .right-part { display: block;}
				.left-part { padding: 0; margin-bottom: 30px;}
				.right-part { width: auto; }
			}
		}
		@media screen and (max-width: 1200px) {
			.ylc-content {margin: 0 50px;}
		}
	}
</style>
