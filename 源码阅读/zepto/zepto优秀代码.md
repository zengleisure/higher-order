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

#### 数组去重 

```javascript

uniq = function(arr) {
  return arr.filter(function(item, id) {
    return arr.indexOf(item) == id;
  });
}

```

#### type
```javascript
function type(obj) {
  return obj == null ? String(obj) :
  class2type[toString.call(obj)] || "object"
}
```
如果是 null 或者 undefined 就返回字符串。 如果是其他的就返回其他的字符串类型。

#### isDocument
```javascript
function isDocument(obj) {
  return obj != null && obj.nodeType == obj.DOCUMENT_NODE;
}
```

#### isArray
```javascript
isArray = Array.isArray || 
  		 function(object) { return Object.prototype.toString.call(object) === '[object Array]'}
```

#### likeArray 
类数组对象 的特点：
* 首先要是一个对象 其次要有length属性 然后
```javascript
function isArrayLike(obj) {
  var length = !!obj && 'length' in obj && obj.length,
      type = $.type(obj);

      return 'function' != type && 
}


```