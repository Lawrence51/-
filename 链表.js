// 如何判断链表中有环
function isCycle(params) {

}


// 方法存疑
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

      // 往链表中头部添加node，改变链表的位置顺序，将最新访问的提前
      this.tail.prev.next = node; // 将尾部前一个元素的下一个元素指向node
      node.prev = this.tail.prev; // 
      node.next = this.tail; // 
      this.tail.prev = node; //

      return node.value;
    } else {
      return -1;
    }
  }

  put(key,value) {
    if (this.get(key) !== -1) {
      this.tail.prev.value = value;
    } else {
      if (this.capacity === this.map.size) {
        this.map.delete(this.head.next.key);
        this.head.next = this.head.next.next;
        this.head.next.prev = this.head;
      }

      const newNode = {key, value};
      this.map.set(key, newNode);

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