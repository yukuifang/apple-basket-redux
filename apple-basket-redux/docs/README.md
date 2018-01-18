1.npm install
2.npm install webpack webpack-dev-server --save-dev
3.npm install react react-dom --save
4.npm install babel-core babel-loader babel-preset-es2015 babel-preset-react --save-dev
//住:1。babel-preset-es2015解析Es6包,2。babel-preset-react是解析JSX的包

5.npm install --save-dev style-loader postcss-loader css-loader

6.npm install html-webpack-plugin extract-text-webpack-plugin open-browser-webpack-plugin --save-dev



创建两个文件夹,app文件夹和public文件夹，app文件夹用来存放原始数据和我们将写的JavaScript模块，public文件夹用来存放之后供浏览器读取的文件（包括使用webpack打包生成的js文件以及一个index.html文件）。接下来我们再创建三个文件:
- index.html --放在public文件夹中;
- Greeter.js-- 放在app文件夹中;
- main.js-- 放在app文件夹中;
