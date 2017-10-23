/**
 * 操作DOM的轻量 API
 */

;(function(global, factory){ 'use strict';
    typeof exports === 'object' && typeof module !== 'undefined' ? 
        factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) :
            factory(global.redomsyo = {});
}(this, function(exports){ 
  'use strict';

  // 缓存变量 hash 和 DOT 点号
  var HASH = '#'.charCodeAt(0);
  var DOT = '.'.charCodeAt(0);

  // 判断参数类型 
  var isString = function(str) { return typeof str === 'string'; };
  var isFunction = function(func) { return typeof func === 'function'; };
  var isNumber = function(num) { return typeof num === 'number'; };



  

  // 缓存html节点元素
  var htmlCache = {};


  var html = function(query){
      var args = [], len = arguments.length - 1;

      var element;
  };

  var el = html;

  exports.html = html;
  exports.el = el;

  Object.defineProperty(exports, '__esModule', {value: true});

}));