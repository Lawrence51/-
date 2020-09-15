function drink1(n) {
    for (let i = 0; i < n; i++) {
        console.log('1小时了')
        console.log('喝一升水')

    }
}
function drink2(n) {
    for (let i = n; i > 1; i /= 2) {
        console.log('1小时了')
        console.log('喝一半水')
    }
}
//循环队列
function entry(element) {
    if (index + 1 % arr.length == front) {
        throw new Error('数组满了')
    }
    arr[index] = element
}

function test(element) {
    entry(element,arr,index,front);
}
