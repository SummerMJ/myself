<template>
    <div class="dashboard">
        欢迎回家,{{ userInfo.realName }}
    </div>
</template>
<script>
import { mapGetters } from "vuex"
export default {
    name: "dashboard",
    computed: {
        ...mapGetters(["userInfo"])
    }
}
</script>
