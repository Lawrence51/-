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