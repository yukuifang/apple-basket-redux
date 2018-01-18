/**
 * Created by fangyukui on 2018/1/14.
 */

// 一个常见的`webpack`配置文件
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname,'app/main.js'),
    output: {
        // 注：“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
        path: __dirname + "/build",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },
    resolve:{
        extensions:['.js','.jsx','.css','scss'] //工程中引入文件可以省略后缀名
    },

    plugins: [
        new webpack.BannerPlugin('fangyukui版权所有，翻版必究'),

        //无需在index.html里面引入<script src="bundle.js"></script>
        new HtmlWebpackPlugin({

            template: __dirname + "/app/static/index.html"//new 一个这个插件的实例，并传入相关的参数
        }),

        // //热加载插件
        // new webpack.HotModuleReplacementPlugin(),


        //自动打开浏览器
        new OpenBrowserPlugin({ url: 'http://localhost:8080' }),




    ],


    devServer: {
        contentBase: "./build",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true, //实时更新
        hot: true, //使用热更新,HotModuleReplacementPlugin插件

    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015','react']
                }
            },
            {
                test: /\.css$/,

                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    }


}

