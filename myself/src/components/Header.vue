<template>
    <div class="headers clearfix">
        <div class="header-item">Home</div>
        <div class="header-item">ABOUT</div>
        <div class="header-item">
            <div class="img-wrapper">
                <img src="../assets/images/me.jpeg" alt="me">
            </div>
        </div>
        <div class="header-item">CONTACT</div>
        <div class="header-item">COMMENT</div>
    </div>
</template>
<script>
    export default {
        name: 'header'
    }
</script>
<style lang="scss" scoped>
    .headers {
        height: 100px;
        line-height: 100px;
        // width: 1200px;
        margin: 50px auto ;
        // border: 1px solid #ccc;
        // background: #ccc;
        .header-item {
            float: left;
            height: 100%;
            width: 20%;
            text-align: center;
            position: relative;
            font-weight: bold;
            color: #fff;
            cursor: pointer;
            font-size: 22px;
            &:hover {
                color: #ffd;
            }
            .img-wrapper {
                position: absolute;
                top: -15px;
                left: 50%;
                transform: translateX(-50%);
                height: 130px;
                width: 130px; 
                border-radius: 100px;
                overflow: hidden;
                img { 
                    position: absolute;
                    left: -10px;
                    height: 160px; 
                    transition: all .25s ease-in-out;
                    &:hover {
                        transform: scale(1.1);
                        transition: all .25s ease-in-out;
                    }
                }
            }

        }
    }
</style>

