function isPowerOf2(){
    let i = 1;
    while (i<= num) {
        if (i == num) {
            return true;
        }
        i = i << 1; // 通过移位，效率相对较高 但是时间复杂度在 O(logn)
    }
    return false;
}
// 利用位运算进行处理
function isPowerOf2Up(num){
    // 使用位运算是 会把 num 转化成二进制的数值 通过& 的运算，如果原值不为2的幂
    // 那么运算后的值则不为0，否则运算后的值为0
    /*
    十进制      二进制         原数值-1    是否2的整次幂      n&n-1
     8          1000           111            是             0
     16         10000          1111           是             0
     32         100000         11111          是             0
     100        1100100        1100011        否           1100000
    */
    return num & (num-1) == 0
};