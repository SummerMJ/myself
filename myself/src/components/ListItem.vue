<template>
    <ul class="blog-list-item-wrapper clearfix">
        <template v-for="item in list">
            <li class="blog-list-item" :key=item.id>
                <div class="left-date">{{ item.data.startTime }}</div>
                <div class="right-content">
                    <h2>{{ item.data.title }}</h2>
                    <div class="blog-content">{{ item.data.content }}</div>
                </div>
                <a href="#" class="read-more">Read More+</a>
            </li>
            <hr class="hr-20" :key=item.id>
        </template>    
    </ul>
</template>
<script>
    import api from '../fetch/api'
    export default {
        name:  "blog-list-item",
        data () {
            return {
                list: []
            }
        },
        methods: {
            getArticalList () {
                api.getArtical()
                .then(res => {
                    this.list = res;
                });
            }
        },
        mounted () {
            this.getArticalList();
        }
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
                .blog-content { margin-top: 10px; height: 38px; overflow: hidden; line-height: 18px;position: relative;
                    &::after {content: "";font-weight: bold; position: absolute;bottom: 1px;right: 0;width: 100px;height: 20px; background: linear-gradient(to right, transparent 30% , #fff 70%);}
                }
            }
            .read-more { position: absolute; bottom: 15px; right: 10px; cursor: pointer; color: #ACaeb6; text-decoration: none;
                &:hover { color: #ACCAC9; }
            }
        }
    }
    
</style>

