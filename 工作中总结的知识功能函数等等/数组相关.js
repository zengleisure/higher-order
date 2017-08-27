/**
 * 数组平铺内容 [1, [2, 3, [4, 5, 6]], [7, 8]] // 合并成一个数组
 */

var flattern1 = (array) => {
  return array.reduce((result, val) => {
    // 判断值是不数组 如果是 再次合并
    return result.concat(Array.isArray(val) ? falatt  : val);
  })
}


/**
 * 数组去重
 */

let unique = (array) => {
  return [...new Set(array)];
}

let unique = (array) => {
  return array.filter((val, index) => {
    return array.indexOf(val) === index;
  });
}

