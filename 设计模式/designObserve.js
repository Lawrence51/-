class Observer{
  update(message){
    console.log('消息接收',message)
  }
}
class Demo{
  update(message){
    console.log('消息接收1',message)
  }
}
class ObserverList{
  constructor() {
    this.observerList = [];
}
  add(observe){
    this.observerList.push(observe);
    return this;
  }
  remove(observe){
    this.observerList = this.observerList.filter(ob=>ob!==observe);
    return this;
  }
  get(index){
    return this.observerList[index];
  }
  count(){
    return this.observerList.length;
  }
}

class Subject{
  observers = new ObserverList;
  add(observe){
    this.observers.add(observe)
  }
  remove(observe){
    this.observers.remove(observe)
  }
  notify(...params){
    for (let i = 0; i < this.observers.count(); i++) {
      let item = this.observers.get(i);
      item.update(...params);
    }
  }
}

let sub = new Subject();
sub.add(new Observer);
sub.add(new Observer);
sub.add(new Demo);
setTimeout(() => {
  sub.notify('你好~~');
}, 1000);