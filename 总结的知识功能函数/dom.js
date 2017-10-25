/**
 *   判断某个DOM 里面是否有这个class
 *  @param { el } dom元素
 *  @param { className } 要找的类名 className
 */

function hasClass(el, className) {
    var reg = new RegExp('(^|\\s)' + className + '(\\s|$)');
    return reg.test(el.className);
}

/**
 * 添加一个class 当然要首先判断里面是否有这个类名
 * @param { el } 添加的DOM
 * @param { className } 要添加的class
 */
function addClass(el, className) {
    if (hasClass(el, className)) {
        return;
    }
    let newClass = el.className.split(' ');
    newClass.push(className);
    el.className = newClass.join(' ');
}