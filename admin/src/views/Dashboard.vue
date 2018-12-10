<template>
    <div class="dashboard height-full">
        <div class="count-box">
            <div class="item">
                <div class="label">访问人数</div>
                <p>200人</p>
            </div>
            <div class="item">
                <div class="label">文章总数</div>
                <p>200人</p>
            </div>
            <div class="item">
                <div class="label">留言条数</div>
                <p>200人</p>
            </div>
        </div>
        <div class="down-box">
            <div class="charts">
                <charts class="height-full" :options="visiter"></charts>
            </div>
            <div class="right-box">
                <div class="box-title">
                    <i class="el-icon-edit-outline"></i>
                    <p>最新留言</p>
                </div>
                <ul class="issues-list">
                    <li class="issues-item" v-for="(item, index) in issuesList" :key="index">
                        <p class="issues-title" @click="gotoIssues">这是留言这是留言这是留言这是留言这是留言这是留言</p>
                        <p class="issues-time">2018-12-03 14:34:23</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    require("echarts/lib/chart/bar");
    import { mapGetters } from "vuex"
    import Charts from "@/components/common/charts"
    import * as chart from "@/libs/options"
    export default {
        components: {
            "charts": Charts
        },
        name: "dashboard",
        data() {
            return {
                visiter: chart.Visiters,
                issuesList: [
                    { title: "最新留言", date: "2018-12-11 14:23:21" },
                    { title: "最新留言", date: "2018-12-11 14:23:21" },
                    { title: "最新留言", date: "2018-12-11 14:23:21" },
                    { title: "最新留言", date: "2018-12-11 14:23:21" },
                    { title: "最新留言", date: "2018-12-11 14:23:21" },
                    { title: "最新留言", date: "2018-12-11 14:23:21" },
                    { title: "最新留言", date: "2018-12-11 14:23:21" },
                    { title: "最新留言", date: "2018-12-11 14:23:21" },
                    { title: "最新留言", date: "2018-12-11 14:23:21" },
                    { title: "最新留言", date: "2018-12-11 14:23:21" },
                    { title: "最新留言", date: "2018-12-11 14:23:21" },
                    { title: "最新留言", date: "2018-12-11 14:23:21" },
                    { title: "最新留言", date: "2018-12-11 14:23:21" },
                    { title: "最新留言", date: "2018-12-11 14:23:21" }
                ]
            }
        },
        methods: {
            gotoIssues () {
                
            }
        },
        computed: {
            ...mapGetters(["userInfo"])
        }
    }
</script>

<style lang="scss" scoped>
    .dashboard {
        .count-box {
            display: flex;
            align-items: center;
            justify-content: space-between;

            // margin-top: 30px;
            .item {
                flex: 1;
                height: 150px;
                border: 1px solid $line;
                border-radius: 5px;
                background: linear-gradient(left top, $main, #B1ECFF);
                position: relative;
                font-size: 20px;
                color: #FFF;
                transition: all 0.5s ease-in-out;

                &:hover {
                    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, .1);
                }

                &:not(:last-child) {
                    margin-right: 20px;
                }

                .label {
                    position: absolute;
                    top: 10px;
                    left: 10px;
                }

                p {
                    position: absolute;
                    font-weight: bold;
                    bottom: 10px;
                    right: 10px;
                    font-size: 30px;
                }
            }
        }

        .down-box {
            margin-top: 20px;
            display: flex;
            justify-content: space-between;
            height: calc(100% - 180px);

            .charts,
            .right-box {
                background-color: #fff;
                border-radius: 5px;
                box-shadow: 0 2px 12px #ccc;
            }

            .charts {
                flex: 1;
                margin-right: 20px;
            }

            .right-box {
                height: 100%;
                width: calc(1/3*100% - 13px);
                padding: 10px;
                box-sizing: border-box;

                .box-title {
                    font-weight: bold;
                    display: flex;
                    align-items: center;
                    height: 60px;

                    i {
                        font-size: 25px;
                        color: $main;
                        margin-right: 10px;
                    }
                }

                .issues-list {
                    height: calc(100% - 60px);
                    overflow: auto;

                    .issues-item {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        height: 50px;
                        padding: 0 10px;

                        .issues-time {
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }

                        .issues-title {
                            width: 60%;
                            cursor: pointer;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;

                            &:hover {
                                color: $main;
                            }
                        }
                    }
                }
            }

        }
    }
</style>