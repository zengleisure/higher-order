

// 获取滚动条的高度
function getScrollTop() {
  var scrollTop = 0;
  if (docEle && docEle.scrollTop) {
    scrollTop = docEle.scrollTop;
  } else if (docBody.scrollTop) {
    scrollTop = docBody.scrollTop;
  }
  return scrollTop;
}


// 跨浏览器事件处理 跨浏览器事件对象
/**
 * @param {ele, type, handler} 操作的元素 事件名称 时间处理程序的函数
 */
var Event = {
  // 事件处理
  addHandler: function(ele, type, handler){
    if (ele.addEventListener) {
      ele.addEventListener(type, handler, false);
    } else if (element.attachEvent) {
      ele.attachEvent('on' + type, handler);
    } else {
      ele['on' + type] = handler;
    }
  },
  // 浏览器事件对象
  getEvent: function(event) {
    return event ? event : win.event;
  },
  // 浏览器target
  getTarget: function(event) {
    return event.target || event.srcElement;
  }
};

// 事件委托
function target(event) {
  const target = Event.getTarget(Event.getEvent(event)); // 获取浏览器target
  if (taget.tagName.toLowerCase() === 'XXX') {
    // ... some code;
  }
}


// body 操作的元素 滚动时间 函数是监听 listenScroll
EventUtil.addHandler(doc, 'scroll', listenScroll);

