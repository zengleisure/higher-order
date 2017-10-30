/**
 * 短信倒计时
 * @param { el } 短信按钮
 */

var awitTime = 60;

function setTime(el) {
    // 如果时间等于0 
    if (awitTime == 0) {
        el.removeAttribute('disabled');
        el.innerHTML = '重新获取';
        el.style.backgroundColor = '#44afdf';
        awitTime = 60;
    } else {
        el.setAttribute('disabled', true);
        el.innerHTML = awitTime + 'S';
        el.style.backgroundColor = '#ccc';
        awitTime--;
        timeId = setTimeout(function() {
            setTime(el);
        }, 1000);
    }
}

dom.addEventListener('click', function(eve) {
    if (1) {
        setTime(this);
    }
}, false);

/**
 * 参数过滤
 * 比如请求时候 过滤一些null undefined 值的参数
 */

function param(options) {
    const param = Object.assign({}, options);

    Object.keys(param).forEach((v, i) => {
        // 这里会过滤所有为假的值 如果有的参数要传0可以加
        // if（!param[v] && param[v] !== 0）
        if (!param[v]) {
            delete param[v];
        }
    });
    return param;
}