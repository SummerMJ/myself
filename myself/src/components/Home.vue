<template>
    <div class="home">
        <ylc-header/>
        <div class="ylc-content clearfix">
            <div class="left-part">
                <p class="about-myself">
                Hello, My Name is LingChao Yang, you can call me Summer,
                because I love Summer. I'm a font-end developer.
                </p>
                <hr class="hr-20">
                <div class="blog-wrapper">
                    <list-item />
                </div>
            </div>
            <div class="right-part">
                <div class="fangwen clearfix">
                    <div class="fangwen-item">
                        <p>有<span>5</span>个人看过我</p>
                    </div>
                    <div class="fangwen-item">
                        <p>收到<span>5</span>个赞</p>
                    </div>
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
        .ylc-content {max-width: 1200px;margin: 100px auto;background: #fff;border-radius: 10px;padding: 20px;display: table;
            .left-part, .right-part {display: table-cell;}
            .left-part {
                padding: 0 20px 10px 10px;
                .about-myself {text-indent: 1.5em; font-size: 22px;line-height: 30px; font-weight: bold;}
                .blog-wrapper {margin-top: 30px;}
            }
            .right-part {
                width: 300px;
                background-color: #F2F2EB;
                    .fangwen {
                        box-sizing: border-box;
                        // height: 50px;
                        // line-height: 50px;
                        .fangwen-item {
                            float: left;
                            height: 50px;
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
