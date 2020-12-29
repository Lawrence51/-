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
    this.cache = new Map();
  }

  get(key) {
    if (this.cache.has(key)) {
      const node = this.cache.get(key);

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

  put(key, value) {
    if (this.get(key) !== -1) {
      // 如果已经有了元素，就将元素替换掉
      // 并且由于数据是引用类型，链表的顺序在判断条件处 已经发生改变
      this.tail.prev.value = value;
    } else {
      if (this.capacity === this.cache.size) {
        this.cache.delete(this.head.next.key); // 删除栈底元素
        this.head.next = this.head.next.next;
        this.head.next.prev = this.head;
      }

      const newNode = { key, value };
      this.cache.set(key, newNode);

      // 将新建的节点 置于栈顶
      this.tail.prev.next = newNode;
      newNode.prev = this.tail.prev;
      newNode.next = this.tail;
      this.tail.prev = newNode;
    }
  }
}

class NodeList {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}
class LRULeetcode {
  constructor(capacity) {
    this.capacity = capacity;
    this.hash = {};
    this.count = 0;
    this.dummyHead = new ListNode() // 虚拟头节点
    this.dummyTail = new ListNode() // 虚拟尾节点
    this.dummyHead.next = this.dummyTail;
    this.dummyTail.prev = this.dummyHead;
  }

  get(key) {
    let node = this.hash[key];
    if (node == null) return -1; // 没有这个值就返回 -1
    this.moveToHead(node); //被读取挪到前面
    return node.value //返回节点的值
  }

  moveToHead(node) {
    this.removeFromList(node)
    this.addToHead(node);
  }

  addToHead(node) {
    // 把node弄到前面去
    // 遵循原则是 将节点赋值给指针 而不是反过来
    node.prev = this.dummyHead; //
    node.next = this.dummyHead.next // 
    this.dummyHead.next = node;
    this.dummyHead.next.prev = node; // 这里node是真实节点，要赋值给别人，不能在等于号的右边
  }

  removeFromList(node) {
    // 先安顿好 node 前后的连接
    let temPre = node.prev;
    let temNext = node.next;
    temPre.next = temNext;
    temNext.prev = temPre;
  }

  removeLRUItem() {
    let node = this.dummyTail.prev; // 取出除虚拟尾节点
    this.removeFromList(node); //从列表中移除
    delete(this.hash[node.key]);
    this.count--;
  }

  put(key, value) {
    let node = this.hash[key];
    if (node == null) {
      if (this.capacity == this.count) {
        // 删除最远的那个
        this.removeLRUItem()
      }
      let newNode = new NodeList(key, value);
      this.hash[key] = newNode;
      // 要将它加到最前面
      this.addToHead(newNode);
      this.count++;
    } else {
      node.value = value;
      this.moveToHead();
    }
  }
}