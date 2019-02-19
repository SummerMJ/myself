<template>
    <div class="time-line clearfix">
        <div class="time-item right">
            <!--<Icon class="time-icon" type="md-cube" />-->
            <p class="time-date">2016-5 - 2017-11</p>
            <p class="time-date">杭州瞰网网络技术有限公司</p>
            <div class="time-content">
                该公司成立于2014年，公司团队沉浸行业多年，致力于网吧运营管理，门店托管、一体化方案、运营理念 等运营“软”性内容多年。任职期间参与公司核心项目瞰网EOC的开发,参与了PC端和POS端的开发。公司在2017年8月发布了产品新闻发布会,有客户正式投入使用。
            </div>
        </div>
        <div class="time-item left">
            <p class="time-date">2017-3 - 2018-9</p>
            <p class="time-date">云南远信科技有限公司</p>
            <div class="time-content">
                该公司是云南电网公司旗下提供信息化服务的重要单位。我所在部门主要研发ERP,OA,CRM一系列产品。任职期间参与了公司的进销存和在线会计的开发和维护以及一些外包产品的开发.现在进销存系统已经正常运作,有客户已经在使用了。
            </div>
        </div>
        <div class="time-item right">
            <p class="time-date">2018-9 - 至今</p>
            <p class="time-date">云南红岭云科技股份有限公司</p>
            <div class="time-content">
                该公司主要研发“互联网 + 党建”业务，目前在公司主要做大数据方向的业务。
            </div>
        </div>
    </div>
</template>

<script>
    import { Icon } from "iview"
    export default {
        name: "TimeLine",
        components: {
            Icon
        }
    }
</script>

<style scoped lang="scss">
    .time-line { position: relative; min-height: 100px;
        &:before { content: ""; position: absolute; top: 0; left: 50%; transform: translateX(-50%); background-image: linear-gradient(135deg, #30E3CA 38%, #11999E 100%); width: 3px; height: 100%; }
        .time-item { width: calc(50% - 30px); position: relative;
            &:after { content: ""; position: absolute; top: 0;  background-image: linear-gradient(135deg, #30E3CA 38%, #11999E 100%); width: 30px; height: 30px; border-radius: 50%; }
            /*.time-icon { position: absolute;  }*/
            &.right { margin-left: calc(50% + 30px);
                &:after { left: -45px; }
            }
            &.left {
                .time-date { text-align: right; }
                &:after { right: -45px; }
            }
            .time-date { font-size: 16px; font-weight: bold; }
            .time-content { font-size: 16px; line-height: 26px; margin-top: 10px; }
        }
    }
</style>
