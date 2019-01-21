<template>
    <div>
        <mavon-editor v-model="value" codeStyle="dark" :boxShadow="false" :toolbarsFlag="false" />
    </div>
</template>

<script>
    export default {
        name: 'markdown',
        data () {
            return {
                value: "",
                defaultData: "preview"
            }
        }
  };
</script>

<style scoped>

</style>