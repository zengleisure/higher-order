### Webpack 入门练习

它是模块化构建机制，Webpack可以看做是模块打包机：它做的事情是，分析你的项目结构，找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（Scss，TypeScript等），并将其打包为合适的格式以供浏览器使用

启动服务 webpack-dev-server 访问 http://127.0.0.1:8080

* demo1 单文件入口
```javascript
module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  }
};
```

#### 多入口文件
多入口文件 实用与多个页面的应用
```javascript
// main.js

// main2.js

module.exports = {
  entry: {
    bundle: './main.js',
    bundle1: './main1.js'
  },
  output: {
    filename: '[name].js'
  }
};
```
### Demo3  Babel-loader

一个编译javascript的平台 可以将JSX/ES6文件转换成浏览器可以识别的js文件。
```javascript
// 但是要记得安装相关的依赖
module: {
  loaders: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/, // 模块依赖
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }
  ]
}

// CSS-loader style-loader

module: {
  loaders:[
    { test: /\.css$/, loader: 'style-loader!css-loader' },
  ]
}

```
#### demo5 Image loader
webpack 允许你在js文件中 require图片。 通过url-loader 和 file-loader 来预处理图片
url-loader是file-loader的增强版。 url-loader 可以用来限制小图片转为base64.

```javascript

// 图片大小小于8192bytes 转为base64地址 相反就是普通地址
{
  test: /\.(png|jpg)$/,
  loader: 'url-loader?limit=8192'
}
```

### UglifyJs Plugin
webpack 可以去掉本身附加的东西 优化代码 压缩代码。 插件是为了实现加载器无法实现的事情
```javascript

var webpack = require('webpack'); // 访问内置插件
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new uglifyJsPlugin({
      compress: {
        warning: falses
      }
    })
  ]
};


















```
