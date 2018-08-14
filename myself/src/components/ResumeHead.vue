<template>
    <div class="resume-head">
        <div class="name-desc">
        	<h1>杨凌超</h1>
        	<p>Web前端开发工程师</p>
        </div>
        <div class="contact-me">
        	<div class="item">
        		<i class="iconfont icon-dianhua"></i><span>13648891564</span>	
        	</div>
        	<div class="item">
        		<i class="iconfont icon-youxiang"></i><span>summeraric@163.com</span>	
        	</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'resume-head'
}
</script>

<style lang="less" scoped>
	@import '../assets/css/basic.less';
    .resume-head {
        height: 70px;
        border-bottom: 1px solid @line;
        display: flex;
		align-items: center;
		justify-content: space-around;
		@media screen and (max-width: 800px) {
			flex-direction: column;
			justify-content: center;
			align-items: center;
			.name-desc { margin-bottom: 10px;
				h1 { font-size: 20px; }
			}

		}
		.name-desc { display: flex; align-items: flex-end;
			h1 { font-size: 30px; margin-right: 10px;}
			p { color: #666; }
		}
		.contact-me { display: flex; align-items: center;
			.item { margin-right: 25px; cursor: pointer;
				&:hover { 
					i { color: @blue; }
				}
				i { font-size: 18px; color: #ccc; margin-right: 5px; }
			}
			

		}
    }
</style>


