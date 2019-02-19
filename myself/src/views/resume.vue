<template>
	<div class="resume">
		<Resume-Head />
		<div class="my-blog">
			<h1>熟悉前端,涉猎后端</h1>
			<p class="sub-title">不会写代码的胖子不是一个好程序猿</p>
		</div>
		<Skill />	
		<!-- 教育背景 -->
		<div class="education">
			<h1>对前端充满激情</h1>
			<p class="sub-title">自学踏上开发之路</p>
			<div class="education-wrapper">
				<div class="left-img"><img src="../assets/images/school.png" alt=""></div>
				<div class="right-wrapper">				
					<p>2016年我毕业于中国计量大学--电子信息工程</p>
					<p>在校期间获得全国电子设计竞赛三等奖,作品:超声波测距仪</p>
					<p>毕业之后误打误撞走上Web开发的道路,上车之后不断学习新知识让自己不断进步</p>
				</div>
			</div>
		</div>
        <div class="work-time">
            <h1>我的工作经历</h1>
            <time-line></time-line>
        </div>
        <div class="experience">
            <h1>我的项目经验</h1>
            <div class="project-wrapper">
                <div class="project-item">

                </div>
            </div>
        </div>
		
	</div>
</template>
<script>
    import { TimelineItem, Timeline } from "iview"
	export default {
		name: "resume",
        components: {
            TimelineItem, Timeline
        }
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
        }
        h1 { font-size: 40px; margin-bottom: 30px; text-align: center; }
        .sub-title { color: #666; font-size: 20px; }
        .education { background-color: #F8F8F8; text-align: center; padding: 30px 0;
        	.education-wrapper { display: flex; align-items: center; justify-content: center;
	        	.left-img { margin-right: 30px;
	        		img { width: 150px; height: 150px;  }
	        	}
	        	.right-wrapper { text-align: left; line-height: 25px; font-size: 16px; }
	        }
        }
        .work-time { max-width: 800px; margin: 0 auto; padding: 30px 0; }
        .experience { background: #fff; padding: 30px;
            .project-wrapper { display: flex;
                .project-item { width: 300px; height: 300px; border: 1px solid #ccc; }
            }
        }

    }
</style>
