<template>
    <div class="home" id="cesiumContainer">
        
    </div>
</template>

<script>
    import Cesium from "cesium/Cesium";
    import 'cesium/Widgets/widgets.css'

    export default {
        name: 'home',
        components: {           
        },
        mounted () {            
            let viewer = new Cesium.Viewer("cesiumContainer");
        }
    }
</script>