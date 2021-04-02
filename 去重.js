const responseList = [
  { id: 1, a: 1 },
  { id: 2, a: 2 },
  { id: 3, a: 3 },
  { id: 1, a: 4 },
];

responseList.reduce((total, item, index) => {
  if (total.length === 0) {
    total.push(item);
  } else {
    let obj = total.find(opt => opt.id === item.id);
    if (!obj) {
      total.push(item);
    }
  }

  return total;
}, [])


var a = 10;
var obj = {
  a: 20,
  say: function () {
    console.log(this.a);
    return function fn() {
      console.log(this.a);
    }
  }
};
obj.say()();
