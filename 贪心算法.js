/** 
* 删除整数的k个数字，获得删除后的最小值
* @param num 原整数
* @param k 删除数量
*/
function removeKDigits(num, k) {
    let newNum = num+'';
    console.log(newNum,1)
    for (let i = 0; i < k; i++) {
        let hasCute = false;
        for (let j = 0; j < newNum.length-1; j++) {
            if (newNum.charAt(j) > newNum.charAt(j + 1)) {
                newNum = newNum.substring(0,j) + newNum.substring(j+1,newNum.length);
                console.log(newNum,4)
                hasCute = true;
                break;
            }
        }
        if (!hasCute) {
            console.log(newNum,2)
            newNum = newNum.substring(0, newNum.length-1)
            console.log(newNum,3)
        }
        console.log(newNum,5)
        // 清楚整数左侧的数字0
        newNum = parseInt(newNum)+'';
    }
    if (newNum.length == 0) {
        return 0;
    };
    return newNum;
}

function removeKDigits1(numStr, k) {
    let numLength = numStr.length - k;
    let stack = [];
    let top = 0;
    //遍历当前数字
    for (let i = 0; i < numStr.length; i++) {
        // 获取到当前遍历到的数字
        let c = numStr.charAt(i);
        /* 判断栈内的最后一个数字与当前数字的大小，
        *  如果栈内最后一个数字大于当前遍历到的数字，那么就出栈边遍历到的数字入栈
        */
        while (top > 0 && stack[top-1] > c && k > 0) {
            top -= 1;  // 如果满足上述条件，那么将top的值重置为上一次的值，然后重新复制 即可完成出栈入栈的交换
            k -= 1;
        }
        stack[top++] = c;
    }
    // 把0去除
    let str='';
    for (let i = 0; i < stack.length; i++) {
        if (stack[i] != 0) {
            str += stack[i];
        }
    }
    
}