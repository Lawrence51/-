/** 
* 删除整数的k个数字，获得删除后的最小值
* @param num 原整数
* @param k 删除数量
*/
function removeKDigits(num, k) {
    let newNum = num+'';
    for (let i = 0; i < k; i++) {
        let hasCute = false;
        for (let j = 0; j < newNum.length-1; j++) {
            if (newNum.charAt(j) > newNum.charAt(j + 1)) {
                newNum = newNum.substring(0,j) + newNum.substring(j+1,newNum.length-1);
                hasCute = false;
                break;
            }
        }
        if (!hasCute) {
            numNew = numNew.substring(0, numNew.length()-1)
        }

        // 清楚整数左侧的数字0
        numNew = parseInt(numNew) + '';
    }
    if (numNew.length == 0) {
        return 0;
    };
    return numNew;
}