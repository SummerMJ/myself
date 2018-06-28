<template>
    <div class="home">
        <el-button @click="signOut">登出</el-button>
        <p class="welcome">欢迎,欢迎</p>
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
                this.setSignOut();
            })
        }
    }
}
</script>

<style lang="scss" scoped>
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
    }
</style>
