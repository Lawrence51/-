// 如何判断链表中有环
function isCycle(params) {

}



class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.tail = {};
    this.head = {};
    // 初始化链表只有两个元素，首和尾，因为是双向链表，所以相互指向
    this.tail.prev = this.head;
    this.head.next = this.tail;
    this.map = new Map();
  }

  get(key) {
    if (this.map.has(key)) {
      const node = this.map.get(key);

      // 在这一步将node本身前一个和后一个的node链接起来
      node.prev.next = node.next;
      node.next.prev = node.prev;

      // 将node元素往链表中尾部添加，改变链表的位置顺序，将最新访问的放到尾部，这样的话，保证最近访问的在栈顶
      this.tail.prev.next = node; // node与原尾部相连的元素 连接起来
      node.prev = this.tail.prev; // node与原尾部相连的元素 连接起来
      node.next = this.tail; // 尾部与node相连
      this.tail.prev = node; // 尾部与node相连

      return node.value;
    } else {
      return -1;
    }
  }

  put(key,value) {
    if (this.get(key) !== -1) {
      // 如果已经有了元素，就将元素替换掉
      // 并且由于数据是引用类型，链表的顺序在判断条件处 已经发生改变
      this.tail.prev.value = value;
    } else {
      if (this.capacity === this.map.size) {
        this.map.delete(this.head.next.key); // 删除栈底元素
        this.head.next = this.head.next.next;
        this.head.next.prev = this.head;
      }

      const newNode = {key, value};
      this.map.set(key, newNode);

      // 将新建的节点 置于栈顶
      this.tail.prev.next = newNode;
      newNode.prev = this.tail.prev;
      newNode.next = this.tail;
      this.tail.prev = newNode; 
    }
  }
}

class LruCache{
  constructor(limit){
    this.limit = limit || 10;
     // head指针指向表头元素 即为最常用的元素
     this.head = this.tail = undefined;
     this.map = {};
     this.size = 0;
  }

  get (key)
}
