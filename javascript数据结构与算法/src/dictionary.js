'use strict';

/**
 * 字典是一种 键值 形式存储数据的数据结构。找到key 就能找到value key就是查找的东西。 值就是查找的结果
 * 书里面的结构说字典的基类是Array 但是实现起来并不方便 有逻辑错误
 */

function Dictionary() {
  this.data = {};
}

Dictionary.prototype = {
    constructor: Dictionary,

    add: function(key, value) {
      return this.data[key] = value;
    }
};




