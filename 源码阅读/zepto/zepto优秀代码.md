### Zepto 的优秀代码


#### 整体结构
```javascript

// 闭包返回Zepto对象
var Zepto = (function(){

  // ...
  return $;
}());

window.Zepto = Zepto;
// 如果window下没有$ 那么就将 zepto赋给$;
window.$ === void 0 && (window.$ = Zepto);

```

