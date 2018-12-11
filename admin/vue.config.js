const path = require("path");
const webpack = require("webpack");
const fs = require("fs");
const CopyWebpackPlugin = require("copy-webpack-plugin");
console.log(process.env.VUE_APP_API)
// let cesiumSource = "./node_modules/cesium/Source";
// let cesiumWorkers = "../Build/Cesium/Workers";


function loadGlobalStyles() {
    const variables = fs.readFileSync('src/assets/css/variables.scss', 'utf-8')
    const mixins = fs.readFileSync('src/assets/css/mixins.scss', 'utf-8')
    return variables + mixins;
}


module.exports = {
    baseUrl: process.env.NODE_ENV == "production" ? "/admin" : "/",
    outputDir: "dist",
    assetsDir: "./",
    filenameHashing: false,
    lintOnSave: false,
    productionSourceMap: false,
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
                '@component': path.resolve(__dirname, './src/components'),
                // 'cesium': path.resolve(__dirname, cesiumSource),
            }
        },
        // plugins: [
        //     new CopyWebpackPlugin([{ from: path.join(cesiumSource, cesiumWorkers), to: 'static/Workers' }]),
        //     new CopyWebpackPlugin([{ from: path.join(cesiumSource, 'Assets'), to: 'static/Assets' }]),
        //     new CopyWebpackPlugin([{ from: path.join(cesiumSource, 'Widgets'), to: 'static/Widgets' }]),
        //     new CopyWebpackPlugin([{ from: path.join(cesiumSource, 'ThirdParty/Workers'), to: 'static/ThirdParty/Workers' }]),
        //     new webpack.DefinePlugin({
        //         CESIUM_BASE_URL: JSON.stringify('./static')
        //     })
        // ],
        // optimization: {
        //     splitChunks: {
        //         cacheGroups: {
        //             commons: {
        //                 name: 'Cesium',
        //                 test: /[\\/]node_modules[\\/]cesium/,
        //                 chunks: 'all'
        //             }
        //         }
        //     }
        // },
    },
    css: {
        extract: true,
        modules: false,
        loaderOptions: {
            // 给 sass-loader 传递选项
            sass: {
                data: loadGlobalStyles(),
            }

        }
    },
    devServer: {
        proxy: {
            "/api/": {
                // target: process.env.NODE_ENV == "production" ? "http://193.112.89.63:8086/api/" : "http://192.168.0.101:8086/",
                target: process.env.NODE_ENV == "production" ? "http://193.112.89.63:8086/api/" : "http://192.168.100.142:8086/",
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
    
            }
        }
    }
}