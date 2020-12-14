// 冒泡
function buble(array) {
    let count = 0;
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
            count += 1;

        }

    }
    console.log(array, count);
    return array;
}
//获取最大值
function maxVal(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
            let tmp = array[i];
            array[i] = array[i + 1];
            array[i + 1] = tmp
        }

    }
    return array;
}
// 升级版冒泡
function bublePro(array) {
    let isSorted = true;
    let count = 0;
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                isSorted = false;
            }
        }
        count += 1;
        if (isSorted) {
            break;
        }
    }
    console.log('执行了次数', count)
    return array;
}
// 鸡尾酒
// 快速排序

// 快速排序 双边循环
function partition(arr, startIndex, endIndex) { // 位置排定
    let pivot = arr[startIndex];
    let left = startIndex, right = endIndex;
    while (left != right) {
        // 控制right 指针比较并向左移动
        while (left < right && arr[right] > pivot) {
            right--;
        }
        while (left < right && arr[left] <= pivot) {
            left++;
        }
        if (left < right) {
            let p = arr[left];
            arr[left] = arr[right];
            arr[right] = p;
        }
    }
    arr[startIndex] = arr[left];
    arr[left] = pivot;
    return left;
}
// 快速排序 单边循环
function single(arr, startIndex, endIndex) {
    let pivot = arr[startIndex];
    let mark = startIndex;
    for (let i = startIndex + 1; endIndex; i++) {
        if (arr[i] < pivot) {
            mark++;
            let p = arr[i];
            arr[i] = arr[mark];
            pivot = p;
        }
    }
    arr[startIndex] = arr[mark];
    arr[mark] = pivot;
}
// 递归调用排位置的
function quickSort(arr, startIndex, endIndex) {
    if (startIndex >= endIndex) {
        return;
    }
    let pivotIndex = partition(arr, startIndex, endIndex);
    quickSort(arr, startIndex, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, endIndex);
}

// 插入排序
function Insertion(arr) {
    let preIndex;
    let current;
    for (let i = 1; i < arr.length; i++) {
        preIndex = i - 1;
        current = arr[i];
        while (preIndex >= 0 && current < arr[preIndex]) {
            arr[preIndex + 1] = arr[preIndex]
            preIndex--;
        }
        arr[preIndex + 1] = current;  // --的操作已经完成，这个时候要将值插入
    };
    return arr;
}
//堆排序
// 基数排序和桶排序