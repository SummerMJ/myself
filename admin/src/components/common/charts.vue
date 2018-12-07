<template>
    <div ref="x_chart"></div>
</template>

<script>
    let echarts = require("echarts/lib/echarts");
    require("echarts/lib/component/tooltip");
    require("echarts/lib/component/legend");
    require("echarts/lib/component/title");
    export default {
        name: "pie1",
        data () {
            return {
                chart: {}
            }
        },
        props: ["options"],
        watch: {
            options: {
                handler () {
                    this.chart.setOption(this.options);
                },
                deep: true
            }
        },
        methods: {
            clickMethods() {
                let mChart = echarts.init(this.$refs.x_chart), _this = this;
                mChart.on('click', function (params) {
                    _this.$emit("chart-click", params);
                });
            }
        },
        mounted () {
            this.chart = echarts.init(this.$refs.x_chart);
            this.chart.setOption(this.options);
            this.clickMethods();
        }
    }
</script>

<style scoped>
    .x-chart-cell { height: 100%; }
</style>