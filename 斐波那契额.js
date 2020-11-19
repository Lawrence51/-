function feibonaqie(n) {
    if (n <=0) {
        throw "不可小于0"
    }
    if (n == 1 || n == 2) {
        return 1;
    }
    if (n >=3) {
        return(feibonaqie(n-1) + feibonaqie(n-2))
    }
}