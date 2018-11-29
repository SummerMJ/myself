const path = require("path");
const webpack = require("webpack");
const fs = require("fs");
const CopyWebpackPlugin = require("copy-webpack-plugin");

let cesiumSource = "./node_modules/cesium/Source";
let cesiumWorkers = "../Build/Cesium/Workers";


function loadGlobalStyles() {
    const variables = fs.readFileSync('src/assets/css/variables.scss', 'utf-8')
    const mixins = fs.readFileSync('src/assets/css/mixins.scss', 'utf-8')
    return variables + mixins;
}


module.exports = {
    baseUrl: "/",
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
                '@view': path.resolve(__dirname, './src/views'),
                '@cesium': path.resolve(__dirname, cesiumSource)
            }
        },
        plugins: [
            // 拷贝Cesium资源目录
            new CopyWebpackPlugin([
                { from: path.join(cesiumSource, 'Assets'), to: 'Assets' },
                { from: path.join(cesiumSource, 'Widgets'), to: 'Widgets' },
                { from: path.join(cesiumSource, 'ThirdParty'), to: 'ThirdParty' }
            ]),
            new CopyWebpackPlugin([
                { from: path.join(cesiumSource, '../Build/Cesium/ThirdParty/Workers'), to: 'ThirdParty/Workers' },
                { from: path.join(cesiumSource, '../Build/Cesium/Workers'), to: 'Workers' }
            ]),
            new webpack.DefinePlugin({
                // Define relative base path in cesium for loading assets
                CESIUM_BASE_URL: JSON.stringify('')
            })
        ]
    },
    chainWebpack: config => {
        config           
            .node.set('fs', 'empty').end()
            .resolve.alias.set('cesium', path.resolve(__dirname, cesiumSource)).end().end()
            .amd({
                toUrlUndefined: true
            })
            .module
            // 禁止Cesium警告: require function is used in a way in which dependencies cannot be statically extracted
            // .set('unknownContextCritical', false).set('unknownContextRegExp', /^.\/.*$/)
            // strip-pragma-loader 删除编译指示
            .rule()
            .include
            .add(path.resolve(__dirname, cesiumSource))
            .end()
            .post()
            .pre()
            .test(/\.js$/)
            .use('strip')
            .loader('strip-pragma-loader')
            .options({
                pragmas: {
                    debug: false
                }
            })
            .end()
            .end()
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
    // devServer: {
    //     proxy: {
    //         "api/": {
    //             target: " http://192.168.100.29:8080",
    //             changeOrigin: true,
    //             pathRewrite: {
    //                 "^/api": ""
    //             }
    //
    //         }
    //     }
    // }

}