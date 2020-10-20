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