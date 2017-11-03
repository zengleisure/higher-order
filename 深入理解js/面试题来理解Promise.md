###  关于 几道Promise 笔试题

```javascript
// 题一
console.log(1);
new Promise(function(resolve, reject){
    reject(true);
    setTimeout(function(){
        resolve(false);
    }, 0);
}).then(function(){
    console.log(2);
}, function(){
    console.log(3);
});
console.log(4);

// 题二
console.log(1);
new Promise(function (resolve, reject){
    reject(true);
    window.setTimeout(function (){
        resolve(false);
    }, 0);
}).then(function(){
    console.log(2);
}, function(){
    console.log(3);
});
console.log(4);

// 题三
setTimeout(function(){
   console.log(1);
});
  
Promise.resolve(function(){
    console.log(2);
});

new Promise(function(){
    console.log(3);
});

console.log(4);


// 题四
// 红灯三秒亮一次 绿灯一秒亮一次 黄灯2秒亮一次 如何让三个灯不断的交替重复亮 Promise实现
// 现已存在3个函数
function red() {console.log('red');}
function green() {console.log('green');}
function yellow() {console.log('green');}


```



### js任务机制和执行顺序



js的事件执行主要分为两个任务类型 macro task 以及 micro task 也就是宏任务和微任务。

* 宏任务：script(全局任务) setTimeout、setInterval、setImmediate、I/O、UI rendering
* 微任务：process.nextTick、promise、Object.observer、MutationObserver



**执行顺序**

> js先进入函数调用栈。 然后执行遇到任何其他宏任务。比如setTimout 会把setTimeout 放到宏任务队列中。 遇到微任务队列就放到微任务队列中。 等到函数调用栈的所有内容出栈之后 就再执行微任务队列。然后再回头执行宏任务队列再进入函数调用栈。



#### 回到第三题

```javascript
// 遇到setTimeout 放到宏任务队列
setTimeout(function(){
    console.log(1);
}, 0)

// 遇到promise 放入微任务队列 这里的Promise没有执行。
Promise.resolve(function(){
    console.log(2);
})

// 这里是new的Promise 里面的回调会立即执行
new Promise(function(resolve){
    console.log(3);
});

// 输出4 console.log() 也是一个函数 而他没有返回值 所以返回一个undefined
console.log(4);

// 最后的结果就是 3 4 undefined 1
```



#### 回到题三

```javascript
console.log(1);
new Promise(function (resolve, reject){
    reject(true);
    window.setTimeout(function (){
        resolve(false);
    }, 0);
}).then(function(){
    console.log(2);
}, function(){
    console.log(3);
});
console.log(4);
```



我们看到上面的 new Promise 会立即执行里面的回调函数， 但是回调函数有个特点。 它的状态只有一个，而且这个状态 不可逆。意思就是要不就是reslove成功 要不就是失败reject。 上面的代码里面是一个reject. 然后返回的结果调用对应的函数。





### 看最后一题

首先红灯三秒， 绿灯一秒 黄灯2秒。 所以我们可以确定函数的一个参数是 time。 如果使用promise 那么就是链式调用。

```javascript
// 三个函数 
function red() { console.log('红灯');}
function green() { console.log('绿灯');}
function yellow() { console.log('黄灯');}


// 这个函数返回的是一个promise对象 然后then方法调用
var tic = function (time, cb){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            cb();
            resolve();
        }, time);
    });
}

// 它开始返回一个promise对象 来进行链式调用
var f = new Promise(function(resolve, reject){
    resolve();
});

var step = function(def){
    // def是一个promise 来满足需求。 then 方法也要放回一个promise对象这样接着进行链式调用
    def.then(function(){
        return tic(3000, red);
    }).then(function(){
        return tic(2000, green);
    }).then(function(){
        return tic(1000, yellow);
    }).then(function(){
      // 递归调用
       step(def); 
    });
}

step(f);

```

