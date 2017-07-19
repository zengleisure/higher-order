## 'use strict'

为了帮助消除哪些容易出错的语法和限制使用容易导致问题的编程方式。规范你的js代码

加在函数的第一行，如果位置不对 不会进行任何操作 IE 10 之前无效



* 编写严格的模式的代码

  * 变量限制 未定义限制。

    name = 'shiyao'; // 需要使用 定义变量来限制 避免全局变量污染

  * 名称限制  两个分别是 eval 和 arguments 两个参数

    var eval, arguments; // SyntaxError错误 

    另外对保留的关键字 也做了限制。

  * 只读属性的限制

    ```javascript
    // 一般情况下 如果我们分配了一个对象的内容为只读 调用赋值语句 非严格模式不会报错
    var obj = Object.defineProperty({}, 'prop1', {
      value: 10,
      writable: false, // by default 只读 无法修改
    });
    obj.prop1 = 20; // TypeError
    ```

  * 函数参数

    严格模式下面修改arguments的值但是不会对实参产生影响

    ```javascript
    function test(argList) {
      arguments[0] = 100;
      console.log(argList);
    }
    test(10); // 严格模式就是10
    ```

  * this的限制 

    当在一个函数未定义的this对象时在非严格模式下 返回global 严格模式下返回 undefined

    ​

  * ​

  ​