const path = require("path");
const webpack = require("webpack");
const fs = require("fs")

function loadGlobalStyles() {
    const variables = fs.readFileSync('src/assets/css/variables.scss', 'utf-8')
    const mixins = fs.readFileSync('src/assets/css/mixins.scss', 'utf-8')
    // const base = fs.readFileSync('src/static/css/base.scss', 'utf-8')
    return variables + mixins;
}


module.exports = {
    // 部署生产环境和开发环境下的URL。
    // 默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上
    //例如 https://www.my-app.com/。如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在 https://www.my-app.com/my-app/，则设置 baseUrl 为 /my-app/。  baseUrl: process.env.NODE_ENV === "production" ? "./" : "/",   // outputDir: 在npm run build 或 yarn build 时 ，生成文件的目录名称（要和baseUrl的生产环境路径一致）
    // baseUrl: process.env.NODE_ENV == "production" ? "/" : "./",
    baseUrl: "/",

    outputDir: "dist",

    //用于放置生成的静态资源 (js、css、img、fonts) 的；（项目打包之后，静态资源会放在这个文件夹下）
    assetsDir: "./",

    //指定生成的 index.html 的输出路径  (打包之后，改变系统默认的index.html的文件名)
    // indexPath: "myIndex.html",
    //默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变)
    filenameHashing: false,
    lintOnSave: false,
    productionSourceMap: false,
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
                '@component': path.resolve(__dirname, './src/components'),
                '@view': path.resolve(__dirname, './src/views')
            }
        },

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