在javascript中。 constructor 和 prototype 这两个概念是比较重要的。

* 函数定义的时候函数本身会默认有一个prototype属性 如果我们new运算符来生成一个对象的时候没有prototype属性。

  ```javascript
  function A(arg){
    this.b = arg;
    this.d = function(){
      console.log(this.b);    
    }
  }
  var obj = new A('test');
  typeof obj.prototype; // undefined
  typeof A.prototype; // object
  ```

* 函数的prototype属性指向了一个对象， 就是原型对象。
* A.prototype包含了两个属性： 一个constructor属性 和 隐式原型 __proto__ 

每个对象都会在其内部初始化一个属性，就是__proto__，当我们访问一个对象的属性 时，如果这个对象内部不存在这个属性，那么他就会去__proto__里找这个属性，这个__proto__又会有自己的__proto__，于是就这样 一直找下去。

首先obj是没有constructor 这个属性的，但是 obj.__proto__ = A.prototype;就从A.prototype中寻找，而 A.prototype.constructor 是就a，所有两者的结果是一一样的.

### null 一切皆为对象


> 每个对象都有一个原型对象 而指向该原型对象的内部指针是 __proto__, 通过它可以从中继承原型对象的属性。

```javascript

var a = new Array();
a.__proto__ === Array.prototype;

```

函数实例除了拥有 __proto__ 属性之外。 还拥有prototype属性。 
```javascript

var a = new Foo();
a.__proto__ === Foo.prototype; // true
a.constructor === Foo === Foo.prototype.constructor; // true

Foo.prototype.__proto__ === Object.prototype;

```

#### Object.isPrototypeOf() 方法用于测试一个对象是否存在于另一个对象的原型链上。 
**prototypeObj.isPrototypeOf(object)**

```javascript

var arr = new Array();
Array.prototype.isPrototypeOf(arr); // true

```

#### Object.getPrototypeOf() 方法返回指定对象的原型
```javascript
  var arr = new Array();  
  Object.getPrototypeOf(arr) === Array.prototype;
```







