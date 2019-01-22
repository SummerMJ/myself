<template>
    <div class="setting-wrapper">
        <ul class="item-list">
            <li class="type-item"></li>
            <li class="type-item"></li>
            <li class="type-item"></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'index'
    };
</script>

<style scoped lang="scss">
    .item-list { display: flex; justify-content: space-between;
        .type-item { flex: 1; height: 100px; border: 1px solid #ccc; }
    }
</style>