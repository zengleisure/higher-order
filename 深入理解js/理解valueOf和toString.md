### valueOf  和 toString 方法

> Object.prototype.valueOf  将javascript对象转为原始值。 当遇到要预期的原始值的对象时，JavaScript会自动调用它。

#### 原始值类型 

Number、String、Boolean、Undefined、Null



>Object.prototype.toString 返回一个表示对象的字符串。每个对象都有一个toString方法。**当对象被表示为文本值时或者当以期望字符串的方式引用对象时，该方法被自动调用**



#### String 类型转换

在某个操作或者运算需要字符串而该对象又不是字符串的时候。会触发该对象的String转换。 系统内部会自动调用toString 函数。

```javascript
var obj = {name: 'coco'};
var str = '123' + obj;
str; // 123[object Object]
```

* 如果toString方法存在并且返回原始类型 返回toString的结果
* 如果toString方法不存在或者返回的不是原始类型 调用valueOf方法。如果存在valueOf 并返回原始类型数据 返回valueOf结果
* 其他就会抛出错误



```javascript
var arr = [1, 2];
var str = '123' + arr;
str; // '1231,2'
```

但是我们可以自己改写这两个方法。



### Function 转换

```javascript
        function add() {
            var args = Array.prototype.slice.call(arguments);
            var fn = function() {
                var arg_fn = Array.prototype.slice.call(arguments);
                console.log('调用fn');
                return add.apply(null, args.concat(arg_fn));
            }

            fn.valueOf = function() {
                return args.reduce(function(a, b) {
                    return a + b;
                })
            }
            return fn;
        }

        console.log(add(1, 2)(3));
```

