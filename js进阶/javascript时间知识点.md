#### Date 实例处理日期和时间的 Date对象是基于1970年1月1日起的毫秒数



* 当前时间 new Date();

  参数

  * value 表示1970年1月1日起经过的毫秒数

  ```javascript

  ```

  * 如果没有输入任何参数 Date构造器就会设置当前时间来创建一个Date对象
  * 如果提供过至少两个参数 其余的参数均会默认设置为1

* Date.now() 返回自1970年1月1日 到当前时间过得毫秒数

  ```javascript
  // 直接使用 Date.now() 因为now是Date的静态函数 所以必须以Date.now() 的形式来使用
  if (!Date.now) {
    Date.now = function now() {
      return new Date().getTime();
    };
  }
  ```

  ​

  ​

* ​

