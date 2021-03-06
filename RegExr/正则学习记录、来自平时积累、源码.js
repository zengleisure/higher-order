// 匹配中文： [\u4e00-\u9fa5]

// 匹配中文 英文字母数字和下划线
var reg = /^[\u4e00-\u9fa5_0-9a-zA-Z]{6,10}$/g;

// 只含有汉字 数字 字母 下划线 不能用下划线开头和结尾
var reg = /^(?!_)(?!.*?_$)[a-zA-Z0-9_\u4e00-\u9fa5]{6,16}$/;


// 开始结束匹配 大小写字母、数字、- 符号 *表示出现零次或多次 如果不写就是出现一次
var reg = /^[\w-]*$/;