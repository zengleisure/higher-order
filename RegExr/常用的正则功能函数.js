/**
 * 首字母大写
 */

String.prototype.firstUpperCase = function() {
  // 匹配开头 非空白的字符
  return this.replace(/^\S/, function(s){
    return s.toUpperCase();
  });
}