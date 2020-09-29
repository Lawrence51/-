// 辗转相除法
function getGreatestCommonDivisorV2(a,b) {
    let big = a > b ? a:b;
    let small = a < b ? a:b;
    if (big%small == 0) {
        return small
    }
    return getGreatestCommonDivisorV2(small, big%small)
}

// 更相减损术
function deCome(a,b){
    let big = a > b ? a:b;
    let small = a < b ? a:b;
    if (big - small == 0) {
        return small
    }
    return deCome(big-small,small)
}