## 一、Object 、 Function、prototype、--proto—之间的关系

1.1  **Object.prototype 是一切对象和函数的根源**

```JavaScript
// 说明Object.prototype 不是任何一个构造函数的实例
Object.prototype.__proto__ === null;
```



1.2  **谁构造了谁**

当想要一个子类拥有父类的属性和方法时、会先创建一个父类Parent。这个Parent相当于内置的构造函数。那么Parent本身是继承谁。**是Function本身**，换句话说 所有的构造函数都是Function的实例。**实例的隐式原型始终指向构造函数的显示原型**。即是：Child.__proto__ === Parent.prototype;



所有的构造函数都是Function的实例 包括自己。

```javascript
Object.__proto__ === Function.prototype; // true
Function.__proto__ === Function.prototype; // true 
Function.prototype.__proto__ === Object.prototype; // true
```

那么构造Function的时候，它的原型从哪来？



1.3 prototype __proto__

**prototype是函数的一个属性，指向一个对象**  

__proto__  是一个对象所用于的内置属性，指向与它所对应的原型对象，原型链正是基于__proto__ 才得以形成。

```javascript
// 所有构造函数都是Function实例
Object.__proto__ === Function.prototype;
Function.__proto__ === Function.prototype; 

// 现有Object.prototype再有的 Function.prototype、再有的Function和Object函数对象。
```



1.4  合理的继承模式 

继承是为了拥有父类的所有属性和方法而又造成原型链的污染和浪费。同时父类原型和子类原型又可以很好的扩展。就是第一次初始化的时候不适用new Parent(); 而是直接克隆一份 Parent.prototype 赋值给Child.prototype。

```javascript
function Parent(name) {
	thia.name = name;
  	this.colors = ['black', 'green'];
}
Parent.prototype.getName = function() {
  console.log(this.name);
}
function Child(name) {
  Parent.call(this, name);
}
Child.prototype = Object.create(Parent.prototype);

// 我们依旧手动指定构造函数 为了便于区分实例与构造函数的关系
Child.prototype.constructor = Child;

let ym = new Child('ym');
console.log(ym);

// create 使用指定的原型对象和其属性创建一个新的对象 
```

