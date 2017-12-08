'use strict';

/**
 * Node类 element用来保存节点上的数据 next 用来保存指向下一个节点的链接
 */
class Node {
    constructor(element) {
      this.element = element;
      this.next = null;
    }
}


/**
 * LinkedList 对链表进行操作的方法。 包括插入删除节点 
 * 只有一个属性 使用Node对象来保存该链表的头节点
 */

class LinkedList {
  constructor() {
    this.head = new Node('head');  
  }

  find(ele) {
      let p = this.head;
      while(p.element != ele) {
          p = p.next;
      }
      return p;
  }

  /**
   * 插入新节点到链表中
   * @param {newEle 要插入的新节点 }
   * @param {item  新节点后面的节点}
   */

  insert(newEle, item) {
    let newNode = new Node(newEle);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
  }
}