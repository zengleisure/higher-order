/** forEach 对数组的每个元素执行一次提供的函数。forEach 为每个数组元素执行callback函数; 不像map reduce。总是返回undefined
 *  并且不可链式调用。且没有办法终止循环 除了抛出异常。如果要测试数组里面的一个元素是否符合条件 可以使用every 或 some
 *
 *  arr.forEach(callback(currentValue, index, array) {
 *    // do Something
 *  }, this);
 *  返回值 : undefined
 *
 *  @param { callback 执行的回调函数 }
 *  @param { currentValue 数组当前的元素 }
 *  @param { index 数组中正在处理当前元素的索引 }
 *  @param { array forEach 正在操作的数组 }
 **/


let arr = [1, 2, 3, 4];

arr.forEach(function(ele){
  console.log(ele); // a b c
});

// 这是一个 ES5的方法 所以 不支持IE9以下 下面是一个 Polyfill

if (!Array.prototype.forEach) {
  // 在数组的原型上扩展forEach方法 一个回调函数 一个this
  Array.prototype.forEach = function(callback, thisArg) {
    var k, T;

    // 判断是不是数组是否未定义或null 抛出异常
    if (this === null) {
      throw new TypeError(' this is null or is not defined');
    }

    // 让数组调用Object 返回一个对象
    var O = Object(this);

    // 缓存length属性
    var len = O.length >>> 0;

    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    // 如果提供了thisArg 就赋给T 否则就传一个undefined
    if (arguments.length > 1) {
      T = thisArg;
    }

    k = 0;

    while (k < len) {
      // 初始化一个变量存储数组的元素 k 是索引 O是数组 kValue是元素值
      var kValue;
      if (k in O) {
        kValue = O[k];
        callback.call(T, kValue, k, O);
      }
      k++;
    }
  };
}

=== *********************************************************** ===

/**
 *
 *
 *
 *
 *
 ***/

















sss
