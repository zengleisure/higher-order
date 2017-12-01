/**
 * 首字母大写
 */

String.prototype.firstUpperCase = function() {
    // 匹配开头 非空白的字符
    return this.replace(/^\S/, function(s) {
        return s.toUpperCase();
    });
}

/**
 * background-color 驼峰命名法
 */

function camelize(str) {
    return str.replace(/-(\w)?/g, function(match, chr) {
        return chr ? chr.toUpperCase() : '';
    });
}