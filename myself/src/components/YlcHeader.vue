<template>
    <div class="ylc-headers clearfix">
        <div class="header-wrapper">
            <div class="logo">Summer</div>
            <div class="type-list">
                <p>归档</p>
                <p>关于</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'ylc-headers'
    }
</script>
<style lang="scss" scoped>
    .ylc-headers {
        height: 100px;
        background: #fff;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        .header-wrapper { 
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 800px;
            height: 100%;
            margin: 0 auto;
            .logo { font-size: 26px; }
            .type-list {display: flex; align-items: center;
                p { font-size: 16px;
                    &:not(:last-child) { margin-right: 30px; }
                }
            }
        }
    }
</style>

