#### replace() 返回一个由替换值替换一些或所有匹配的模式后的新字符串 原字符不会改变

**str.replace(reg|substr, newSubStr|function)**
参数1 需要进行替换正则表达式对象或字符串
参数2 替换文本或替换函数

如果参数1为字符串只进行一次匹配替换，若替换所有子串则必须制定全局标记g
g 表示全局替换，如果不指定就只替换第一个。i 表示不存在忽略大小写
如果参数2仅为字符串则可以使用特殊字符序列

```javascript

var str = 'helloworld';

str.replace(/l/i, 'name'); // henamelworld
str.replace(/l/g, 'name'); // henamenamewornamed


// 连字符转驼峰 (camelize)
const camelize = str => {
  return str.replace(/-+(.)?/g, (match, chr)=> {
    return chr ? chr.toUpperCase() : '';
  });
} 

```




