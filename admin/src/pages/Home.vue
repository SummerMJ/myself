<template>
    <div class="home">
        <!-- <el-button @click="signOut">登出</el-button> -->
        <!-- <p class="welcome">欢迎,欢迎</p> -->
        <div class="box-1">
            <p class="line line-1">直播时间：晚上10点-2点</p>
            <p class="line line-2">主播粉丝群;342758931</p>
            <p class="line line-3">战队粉丝群;618843637</p>
        </div>
       
        <div class="box-2">
            <p>斗鱼;673890</p>
            <p>新浪微博@紫蓝Perse</p>
            <p>网易云音乐@Perselee</p>
        </div>
        
        <div class="box-3">
            <p>鼠标/垫 EC2-A/Qck heavy</p>
            <p>键盘/耳机 Filco 圣手二代红轴/UM PRO 30</p>
            <p>DPI 1600 系统6格 开镜全部8</p> 
        </div>
    </div>
</template>
<script>
import api from "../fetch/api";
import { mapActions } from "vuex";
export default {
    name: "home",
    methods: {
        ...mapActions({setSignOut: 'setSignOut'}),
        signOut () {
            api.signOut().then(res => {
                if (res.success) {
                    this.setSignOut();
                    // this.$router.replace('/login');  
                }
                
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    @keyframes move1 {
        0% { left: -300px; }
        30% { left: 200px; }
        70% { left: 200px; }
        100% { left: -300px; }
    }  
    @keyframes move2 {
        0% { left: -300px; }
        35% { left: 200px; }
        75% { left: 200px; }
        100% { left: -300px; }
    } 
    @keyframes move3 {
        0% { left: -300px; }
        40% { left: 200px; }
        80% { left: 200px; }
        100% { left: -300px; }
    }   
    .home {
        position: absolute;
        width: 100%;
        height: 100%;
        .welcome {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 24px;
        }
        .line { color: #00ffff; font-size: 24px; margin-bottom: 15px; position: absolute; left: -300px;animation-duration: 4s; animation-timing-function: ease-in-out; }
        .line-1 { top: 20px; animation-name: move1; }
        .line-2 {top: 60px; animation-name: move2; }
        .line-3 { top: 100px; animation-name: move3; }
    }
</style>
