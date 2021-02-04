function quickSort(arr){
    let left = [];
    let right = [];
    let newArr = [];
    if (arr.length <= 1) {
        return arr;
    }
    let index = Math.floor(arr.length / 2);
    let middle = arr[index];
    arr.splice(index, 1);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > middle) {
            right.push(arr[i])
        } else {
            left.push(arr[i])
        }
        
    }
    // return newArr.concat(quickSort(left), middle, quickSort(right)); // 升序
    return newArr.concat(quickSort(right), middle,quickSort(left)); // 降序
}
let arr = [12,99,56,89,120,11,10,1,3,6]
let res = quickSort(arr);
// 分析O(nlog(n)),最坏O(n2)
// console.log(res)

// 冒泡排序
function bubbleSort(arr){
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {
                let tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
            }
            
        }
        
    }
    return arr;
}
let arr2 = [24,69,80,120,1,3,5,78,9]
let res2 = bubbleSort(arr2)
// console.log(res2)


// 选择排序
function selectSort(arr){
    let len = arr.length;
    let minIndex, tmp;
    for (let i = 0; i < len - 1; i++) {
        minIndex = i;
        for (let j = i + 1 ; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
            
        }
        tmp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = tmp;
    }

    return arr;
}

let arr3 = [12,5,6,21,45,66,88]
let res3 = selectSort(arr3);
console.log(res3)