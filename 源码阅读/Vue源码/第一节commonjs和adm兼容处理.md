#### Vue源码分析 第一节 commonjs和amd 

```javascript

// 判断当前环境是否支持 module.exports, commonjs 方式导出
;
(function(global, factory) {
    'use strict';
    // 判断是不是支持CMD 如果支持 就module.exports 导出
    typeof module === 'object' && typeof module.exports === 'object' ?
        module.exports = factory() :
        // 判断是否支持 amd模式
        typeof define === 'function' && define.amd ?
        define(factory) : (global.Vue = factory());
}(this, function() {

    function Vue$3(options) {

    }

    // 暴露方法和接口 Vue
    return Vue$3;
}));
```


* node环境下 全局对象是global 浏览器端是window。 module是一个指向表示当前模块的对象的引用。为了方便 module.exports也可以通过全局模块的exports对象访问。 module不是全局的 而是每个模块本地的。




