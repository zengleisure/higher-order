## Zepto源码阅读



### Zepto模块

* zepto 核心模块 包含许多方法

* event 通过on()  & off 处理事件

* ajax XMLHTTPRequest和 JSONP实用功能

* form 序列化 & 提交web表单

  ​



### 创建插件

```javascript
// 通过添加方法作为 $.fn的属性来写插件
;(function($){
   $.extend($.fn, {
       foo: function() {
           return this.html('bar');
       }
   })
})(Zepto);
```



### 文档分析入手

`$`变量表示一个函数对象，而`$()`表示执行函数，他会返回另一个对象。 文档中有两类方法 。

一类是没有`$`前缀，例如`addClass`,这些方法都有一个共同的特点，操作DOM或BOM。还有一类是有前缀的例如`$.trim`，这一类方法无关平台，只是封装了一些常用的方法，可以看作ECMA层级的方法，与浏览器无关。

![border](https://segmentfault.com/img/bVFHju?w=1262&h=408)

*console.dir()*可以显示一个对象所有的属性和方法。可以看到像 $.trim 这类方法保存在 构造函数中。

### 一 闭包返回与全局变量 

























