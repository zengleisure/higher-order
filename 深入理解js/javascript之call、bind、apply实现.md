### call() 方法在使用一个指定的this值 和若干个指定的参数值的前提下调用某个函数或方法。

看一个例子
```javascript

var foo = {
  value: 1
};

function bar(){
  console.log(this.value);
}

bar.call(foo); // 1
```
上面call发生了两件事情
* this指向了foo对象
* bar函数指向了

```javascript

Function.prototype.apply = function(context, arr){
  var context = Object(context) || window;
  context.fn = this;
  var result;
  if (!arr) {
    result = context.fn();
  }
  else {
    var args = [];
    for (var i = 0, len = arr.length; i < len; i++) {
      args.push('arr[' + i + ']');
    }
    result = eval('context.fn(' + args + ')');
  }
  delete context.fn;
  return result;
}

```

>bind() 方法会创建一个新函数。当这个新函数被调用时，bind() 的第一个参数将作为它运行时的 this，之后的一序列参数将会在传递的实参前传入作为它的参数。(来自于 MDN )


* 所以bind会返回一个函数
* 可以传入参数

#### bind注意的几个问题

* 1
* 2
* 3

```javascript
Function.prototype.bind = Function.prototype.bind || function(context) {
    // 如果调用者不是一个函数
    if (typeof this !== 'function') {
      throw new Error("function.prototype.bind ");
    }

    var self = this;
    // 保存参数
    var args = Array.prototype.slice.call(arguments, 1);
    // 新建一个函数 最后会返回这个函数
    var fNOP = function () {};

    var fBound = function() {
      var bindArgs = Array.prototype.slice.call(arguments);
      self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));
    }

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();
    return fBound;
}
```
