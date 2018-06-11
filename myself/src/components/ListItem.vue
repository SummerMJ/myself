<template>
    <ul class="blog-list-item-wrapper clearfix">
        <li class="blog-list-item">
            <div class="left-date">2018-6-11</div>
            <div class="right-content">
                <h2>记录第一次写日志</h2>
                <div class="blog-content">
                    今天开始用Vue搭建项目开始写，主要为了以后自己的灵感不会丢失，记录自己每天遇到的问题和发现的新知识点。慢慢积累，提升自己。录自己每天遇到的问题和发现的新知识点。慢慢积累，提升自己。
                </div>
            </div>
            <a href="#" class="read-more">Read More+</a>
        </li>
        <hr class="hr-20">
        <li class="blog-list-item">
            <div class="left-date">2018-6-11</div>
            <div class="right-content">
                <h2>记录第一次写日志</h2>
                <div class="blog-content">
                    今天开始用Vue搭建项目开始写，主要为了以后自己的灵感不会丢失，记录自己每天遇到的问题和发现的新知识点。慢慢积累，提升自己。
                </div>
            </div>
            <a href="#" class="read-more">Read More+</a>
        </li>
        
    </ul>
</template>
<script>
    export default {
        name:  "blog-list-item"
    }
</script>
<style lang="scss" scoped>
    .blog-list-item-wrapper {
        .blog-list-item {
            height: 100px;
            overflow: hidden;
            position: relative;
            .left-date {float: left; width: 100px;padding-left: 20px; box-sizing: border-box; font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif}
            .right-content {margin-left: 100px; position: relative;
                h2 { font-size: 16px; }
                .blog-content { margin-top: 10px; line-height: 20px; height: 38px; overflow: hidden; line-height: 18px;position: relative;
                    &::after {content: "";font-weight: bold; position: absolute;bottom: 1px;right: 0;width: 100px;height: 20px; background: linear-gradient(to right, transparent 30% , #fff 70%);}
                }
            }
            .read-more { position: absolute; bottom: 15px; right: 10px; cursor: pointer; color: #ACaeb6; text-decoration: none;
                &:hover { color: #ACCAC9; }
            }
        }
    }
    
</style>

