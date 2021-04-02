// 找出10个最大数值

const arr1 = [];

for (let i = 0; i < 30; i++) {
  arr1[i] = parseInt(Math.random() * 10000);  // 都处理成述职
}

console.log(arr1)

function sortArr (arr) {
  let data = [];
  arr.forEach(item=>{
    if (data.length === 0) {
      data.push(item);
    } else if(data.length < 10){
      data.push(item);
      data = data.sort((a, b)=>{ return b - a });
    } else {
      for (let i = 0; i < 10; i++) {
        if (item > data[i]) {
          data.splice(i,0,item);
          data.splice(10,1);
          break; // 跳出 for 循环
        }
      }
    }
  });
  return data;
}
sortArr(arr1)
