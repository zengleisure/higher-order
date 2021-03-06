### 参数按值传递

函数外部的值复制给函数内部的参数，就和把值从一个变量复制到另一个变量一样。



```javascript
var value = 1;
function foo(v){
  v = 2;
  console.log(v); // 2
}
foo(value); // 1

// 这里传递了value到函数中， 相当于拷贝了一份value。 所以函数内部修改的是拷贝的value值。 而不会影响原来的value。

```



#### 引用传递？

引用传递就是传递对象的引用，函数内部的参数的任何改变都会影响该对象的值 因为两者引用的是同一个对象。

```javascript
var obj = {value: 1};
function foo(o) {
  o.value = 2;
  console.log(o.value); // 2
}
foo(obj);
console.log(obj.value); // 2
```

上面obj的value也被改变了。这个跟参数按值传递相违背啊。



#### 第三种参数传递

```javascript
var obj = {value: 1};
function foo(o) {
  o = 2;
  console.log(o); // 2
}
foo(obj);
console.log(obj.value); // 1 这里如果是引用传递 那么应该会修改obj的值 但是并没有修改
```

 第三中传递。**按共享传递**。 共享传递是指 在传递对象的时候。传递对象的引用的副本。 

可以简单地理解为传递参数的时候，就是把实参复制给形参的过程.
* 原始值：只是把变量里的值传递给参数，之后参数和这个变量互不影响。
* 引用值：对象变量它里面的值是这个对象在堆内存中的内存地址，这一点你要时刻铭记在心！因此它传递的值也就是这个内存地址，这也就是为什么函数内部对这个参数的修改会体现在外部的原因了，因为它们都指向同一个对象。
 

**按引用传递是传递对象的引用，而按共享传递是传递对象的引用的副本** 所以修改 o.value 可以通过引用找到原值。但是直接修改o 并不会修改原值。 所以第二个和第三个例子其实都是按共享传递。

参数如果是基本类型就是按值传递  如果是引用类型就是按共享传递。

但是因为拷贝副本也是一种值的拷贝。 所以在红宝书里面认为是按值传递了。





