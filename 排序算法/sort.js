
/**
 * created by sy 2017 10 8
 */

;(function(global, factory){ 'use strict';
  // 兼容amd 和 cmd 写法
  // 基本形式是   cmd ? cmd : amd ? amd : global || window
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) : (global.PAS = factory());
}(this, (function() {

  // 判断是否是数组
  function isArray(arr) {
    return typeof Array.isArray === 'function' ? Array.isArray(arr) :
      Object.prototype.toString.call(arr) === '[object Array]';
  }


  // 交换两个元素
  function swap(v1, v2, context) {
    [context[v1], context[v2]] = [context[v2], context[v1]];
    return void 0;
  }

  // 冒泡排序
  function bubble(arr) {
    // 缓存数组的length
    let len = arr.length;

    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          swap(j, j + 1, arr);
        }
      }
    }
    return arr;
  }

  const PAS = {};

  [
    bubble
  ].forEach(function (func) {
    // 返回函数的名称
    let name = func.name;

    Object.defineProperty(PAS, name, {
      get: function() {
        return function(args) {
          if (!isArray(args)) {
            throw new Error('the arguments of PAS.' + name + ' must be Array');
          }
          return func.call(null, args);
        }
      },
      configurable: true
    });


    Object.defineProperty(Array.prototype, name, {
      get: function() {
        var vm = this;
        return function() {
          return func.call(vm, vm);
        }
      },
      configurable: true
    });
  });

  return PAS;
})));
