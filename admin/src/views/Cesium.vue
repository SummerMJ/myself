<template>
    <div ref="box"
         class="box-wrapper">
        <div class="cesium fullSize"
             id="CesiumContainer"></div>
        <img src="../assets/images/red1.gif" class="red-gif" id="red1" alt="">
        <div class="container">
            <el-button @click="add"
                       class="add">点击</el-button>
            <!--<el-button @click="toggleHeatMap">热力图</el-button>-->
        </div>
    </div>
</template>

<script>
    import Cesium from 'cesium/Cesium';
    // import CesiumHeatmap from "@/libs/CesiumHeatmap"
    import 'cesium/Widgets/widgets.css';
    import city from '@/json/city.json';
    import { Button } from 'element-ui';
    // import Heatmap from "heatmap.js"
    export default {
        name: 'ceisum',
        components: {
            'el-button': Button
        },
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
        mounted() {
            this.viewer = new Cesium.Viewer('CesiumContainer', {
                animation:false,
                baseLayerPicker:false,
                fullscreenButton:false,
                vrButton:false,
                geocoder:false,
                homeButton:false,
                infoBox:false,
                sceneModePicker:false,
                timeline:false,
                imageryProvider: new Cesium.WebMapTileServiceImageryProvider({
                    url: 'http://t0.tianditu.gov.cn/img_w/wmts?tk=8ab8c6d579e5edc2c0010ab161a5cdf2',
                    layer:'img',
                    style:'default',
                    tileMatrixSetID:'w',
                    format:'tiles',
                    maximumLevel: 18
                }),
                navigationHelpButton:false,
                navigationInstructionsInitiallyVisible:false
            });
            let promise= this.viewer.dataSources.add(Cesium.GeoJsonDataSource.load(require('../json/province.json'), {
                stroke: Cesium.Color.AQUA,
                fill: Cesium.Color.TRANSPARENT,
                strokeWidth: 5,
                markerSymbol: '?'
            }));
            this.viewer.flyTo(promise);
            // this.add();
            // // this.heatMap();
            setTimeout(() => {
                this.cameraFly();
            }, 2000);
        },
        methods: {
            addCity(params) {
                this.viewer.entities.add({
                    id: params.id,
                    name: params.name,
                    position: Cesium.Cartesian3.fromDegrees(params.lng, params.lat),
                    label: {
                        text: params.name,
                        font: '20px 微软雅黑',
                        color: Cesium.Color.RED,
                        distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0.0, 5000000.0)
                        // pixelOffset: new Cesium.Cartesian2(0, 20 + _this.height)
                    }
                });
            },
            heatMap (max, data) {
                let heatDoc = document.createElement('div');
                heatDoc.setAttribute('style', 'width: 50px;height: 50px; margin: 0; position: absolute; z-index: 1000');
                this.$refs.box.appendChild(heatDoc);
                let heatMap = Heatmap.create({
                    container: heatDoc,
                    radius: 20,
                    maxOpacity: 0.5,
                    minOpacity: 0,
                    blur: 0.75,
                    gradient: { '0.9': 'red', '0.8': 'orange', '0.7': 'yellow', '0.5': 'blue', '0.3': 'green' }
                });
                heatMap.setData({
                    max: max,
                    data: data
                });
                return heatMap;
            },
            add() {
                city.forEach(item => this.addNumber(item));
            },
            addNumber(params) {
                let _this = this;
                var htmlOverlay = document.getElementById("red1");
                var scratch = new Cesium.Cartesian2();
                this.viewer.scene.preRender.addEventListener(function() {
                    var position = Cesium.Cartesian3.fromDegrees(params.lng, params.lat, 2000);
                    var canvasPosition = _this.viewer.scene.cartesianToCanvasCoordinates(position, scratch);
                    if (Cesium.defined(canvasPosition)) {
                        htmlOverlay.style.top = canvasPosition.y + 'px';
                        htmlOverlay.style.left = canvasPosition.x + 'px';
                    }
                });
                // this.viewer.entities.add({
                //     position: Cesium.Cartesian3.fromDegrees(
                //         params.lng,
                //         params.lat,
                //         2000
                //     ),
                //     billboard: {
                //         show: true,
                //         image: require('../assets/images/red.png'),
                //         width: 104,
                //         height: 104,
                //         pixelOffset: new Cesium.Cartesian2(0, -40),
                //         distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0.0, 5000000.0)
                //     }
                // });
            },
            toggleHeatMap () {
                this.viewer.entities.removeAll();
                let coordinate = [-109.0, 10.0, -80.0, 35.0];
                let heatmap1 = this.heatMap(this.getData(1000).max, this.getData(1000).data);
                this.createHeatMap(coordinate, heatmap1);
            },
            createHeatMap (coordinate, heatMap) {
                this.viewer.entities.add({
                    name: 'heatmap',
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
                });
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
                return { max: max, data: points};
            },
            cameraFly() {
                let _this = this;
                this.viewer.camera.flyTo({
                    destination: Cesium.Cartesian3.fromDegrees(
                        101.353254,
                        25.30652958,
                        1500000
                    ),
                    complete: function() {
                        city.forEach(element => {
                            _this.addCity(element);
                        });
                    }
                });
            }
        }
    };
</script>

<style lang="scss">
    .box-wrapper { width: 3840px; position: absolute;
        height: 100%;overflow: auto; }
    .cesium-widget-credits {
        display: none !important;
    }
    .add { position: fixed; top: 20px; left: 20px; }
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
    .red-gif { position: absolute;z-index: 10; }
</style>


