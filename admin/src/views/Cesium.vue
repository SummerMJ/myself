<template>
    <div ref="box" style="width: 3840px; overflow: auto;">
        <div class="cesium fullSize" id="CesiumContainer"></div>
        <div class="container">
            <el-button @click="add">点击</el-button>
            <el-button @click="toggleHeatMap">热力图</el-button>
        </div>
    </div>
</template>

<script>
import Cesium from "cesium/Cesium";
// import CesiumHeatmap from "@/libs/CesiumHeatmap"
import "cesium/Widgets/widgets.css";
import city from "@/json/city.json";
import { Button } from "element-ui";
import Heatmap from "heatmap.js"
export default {
    name: "ceisum",
    data() {
        return {
            viewer: {},
            height: 100,
            bounds: {
                west: 147.13833844,
                east: 147.13856899,
                south: -41.43606916,
                north: -41.43582929
            }
        };
    },
    components: {
        "el-button": Button
    },
    methods: {
        addCity(params) {
            this.viewer.entities.add({
                id: params.id,
                name: params.name,
                position: Cesium.Cartesian3.fromDegrees(params.lng, params.lat),
                label: {
                    text: params.name,
                    font: "20px 微软雅黑",
                    color: Cesium.Color.White,
                    distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0.0, 3000000.0)
                    // pixelOffset: new Cesium.Cartesian2(0, 20 + _this.height)
                }
            });
        },
        heatMap (max, data) {
            let heatDoc = document.createElement("div");
            heatDoc.setAttribute("style", "width: 50px;height: 50px; margin: 0; position: absolute; z-index: 1000");
            this.$refs.box.appendChild(heatDoc);
            let heatMap = Heatmap.create({
                container: heatDoc,
                radius: 20,
                maxOpacity: 0.5,
                minOpacity: 0,
                blur: 0.75,
                gradient: { "0.9": "red", "0.8": "orange", "0.7": "yellow", "0.5": "blue", "0.3": "green" }
            });
            heatMap.setData({
                max: max,
                data: data
            })
            return heatMap;
        },
        add() {
            city.forEach(item => this.addNumber(item));
        },
        addNumber(params) {
            this.viewer.entities.add({
                position: Cesium.Cartesian3.fromDegrees(
                    params.lng,
                    params.lat,
                    2000
                ),
                billboard: {
                    show: true,
                    image: require("../assets/images/red.png"),
                    width: 104,
                    height: 104,
                    pixelOffset: new Cesium.Cartesian2(0, -40),
                    distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0.0, 3000000.0)
                },
                // label: {
                //     text: "20000",
                //     font: "30px 微软雅黑",
                //     color: Cesium.Color.White,
                //     eyeOffset: new Cesium.Cartesian3(0, 0, -20)
                // }
            });
        },
        toggleHeatMap () {
            this.viewer.entities.removeAll();
            let coordinate = [-109.0, 10.0, -80.0, 35.0];
            let heatmap1 = this.heatMap(this.getData(1000).max, this.getData(1000).data);
            this.createHeatMap(coordinate, heatmap1);
        },
        createHeatMap (coordinate, heatMap) {
            this.viewer.entities.add({
                name: "heatmap",
                show: true,
                position: Cesium.Cartesian3.fromDegrees(102.97904323, 25.30652958),
                ellipse: {
                    semiMajorAxis: 3000,
                    semiMinorAxis: 3000,
                    // material: heatMap._renderer.canvas,
                    material: Cesium.Color.RED
                }
                // rectangle: {
                //     coordinates: Cesium.Rectangle.fromDegrees(coordinate[0], coordinate[1], coordinate[2], coordinate[3]),
                //     material: heatMap._renderer.canvas
                // }
            })
        },

        getData (len) {
            let points = [];
            let max = 0;
            let width =  1000;
            let height = 1000;
            while (len -- ) {
                let val = Math.floor(Math.random() * 1000);
                max = Math.max(max, val);
                let point = {
                    x: Math.floor(Math.random() * width),
                    y: Math.floor(Math.random() * height),
                    value: val
                };
                points.push(point);
            }
            return { max: max, data: points}
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
            imageryProvider: new Cesium.ArcGisMapServerImageryProvider({
                url: "https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer"
            }),
            baseLayerPicker: false,
            infoBox: false
        });
        let promise= this.viewer.dataSources.add(Cesium.GeoJsonDataSource.load(require('../json/province.json'), {
            stroke: Cesium.Color.AQUA,
            fill: Cesium.Color.TRANSPARENT,
            strokeWidth: 50.0,
            // markerSymbol: '?'
        }));
        // this.viewer.flyTo(promise);
        this.add();
        // this.heatMap();
        setTimeout(() => {
            this.cameraFly();
        }, 2000);
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


