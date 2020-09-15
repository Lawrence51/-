function throttle(fn, delay){
    let canRun = true;
    return function(){
        if (!canRun) return;
        canRun = false;
        setTimeout(()=>{
            fn.apply(this, this.arg);
            canRun = true;
        },delay)
    }
}

// 防抖
function debounce(fn,delay){
    let timer = null;
    return function(){
        clearInterval(timer);
        timer = setTimeout(()=>{
            fn.apply(this,this.arg)
        },delay)
    }
}