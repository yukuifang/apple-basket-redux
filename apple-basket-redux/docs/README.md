####1.how to run the project:

 > #####1. git clone https://github.com/yukuifang/apple-basket-redux
 > #####2. npm install
 > #####3. npm start
 
 ####2.project file structure :
 
 app              源码文件夹：包含项目源码，我们基本都在这个文件夹下做开发
     - containers   容器文件夹：存放容器组件，比如 “苹果篮子”
     - components   组件文件夹：存放普通显示组件，比如 “苹果”
     - actions      actions文件夹：存放可以发出的action 
     - reducers     reducers文件夹：存放action的处理器reducers
     - services     服务文件夹：存放经过封装的服务，如 ajax服务, 模拟数据服务
     - styles       样式文件夹：存放应用的样式，如css, scss
     - images       图片文件夹：存放图片资源
     - apis         开发接口文件夹：存放开发接口文档
 
 ####3.note
 https://segmentfault.com/a/1190000005356568#articleHeader5
 
###参考资料
 - 《MDN Javascript Documents》

 - 阮一峰 《ECMAScript 6入门》

 - IVAN ROGIC 《React, Redux and Immutable.js: Ingredients for Efficient Web Applications》

####项目相关js库列表：

webpack ： js开发环境和打包器

babel ： es6 编译器

react ： 当下非常火的显示框架

react-router ： 与react搭配的前端路由器

redux ： web应用的状态容器（定义了一套非常清晰的数据传递 流程）

react-redux ： react 和 redux 的连接器

redux-logger ： redux 的控制台 log 中间件

redux-thunk： redux 的 thunk 中间件

react-router-redux : react-router和 redux 配套使用的连接器

immutable.js: js 持久化数据框架

mock.js ： 用于产生模拟后台数据的框架

jquery: 在项目中，我们仅使用它的非常通行的 ajax 功能