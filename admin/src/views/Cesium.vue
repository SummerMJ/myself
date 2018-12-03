<template>
    <div>
        <div class="cesium fullSize" id="CesiumContainer"></div>
        <div class="container">
            <el-button @click="add">点击</el-button>
        </div>
    </div>
</template>

<script>
import Cesium from "cesium/Cesium";
import "cesium/Widgets/widgets.css";
import city from "@/json/city.json";
import { Button } from "element-ui";
export default {
    name: "ceisum",
    data() {
        return {
            viewer: {},
            height: 1
        };
    },
    components: {
        "el-button": Button
    },
    methods: {
        addCity(params) {
            let _this = this;
            this.viewer.entities.add({
                id: params.id,
                name: params.name,
                position: Cesium.Cartesian3.fromDegrees(params.lng, params.lat),
                label: {
                    text: params.name,
                    font: "20px 微软雅黑",
                    color: Cesium.Color.White,
                    pixelOffset: new Cesium.Cartesian2(0, 20 + _this.height)
                }
            });
        },
        add() {
            
            city.forEach(item => {
                this.addNumber(item);
            });
        },
        addNumber(params) {
            this.viewer.entities.add({
                position: Cesium.Cartesian3.fromDegrees(
                    params.lng,
                    params.lat + 0.131
                ),
                billboard: {
                    image: require("../assets/images/red.png"),
                    width: 104,
                    height: 104
                },
                label: {
                    text: "20000",
                    font: "30px 微软雅黑",
                    color: Cesium.Color.White,
                    eyeOffset: new Cesium.Cartesian3(0, 0, -20)
                }
            });
        },
        cameraFly() {
            let _this = this;
            this.viewer.camera.flyTo({
                destination: Cesium.Cartesian3.fromDegrees(
                    101.353254,
                    25.30652958,
                    1000000
                ),
                complete: function() {
                    city.forEach(element => {
                        _this.addCity(element);
                    });
                }
            });
        }
    },
    mounted() {
        this.viewer = new Cesium.Viewer("CesiumContainer", {
            animation: false,
            geocoder: false,
            navigationHelpButton: false,
            timeLine: false,
            // imageryProvider: new Cesium.ArcGisMapServerImageryProvider({
            //     url:
            //         "https://services.arcgisonline.com/arcgis/rest/services/NatGeo_World_Map/MapServer"
            // }),
            baseLayerPicker: false,
            infoBox: false
        });
        // setTimeout(() => {
        //     this.cameraFly();
        // }, 2000);
        
    }
};
</script>

<style lang="scss">
.cesium-widget-credits {
    display: none !important;
}
.cesium {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 1;
}
.container {
    position: absolute;
    z-index: 2;
}
</style>


