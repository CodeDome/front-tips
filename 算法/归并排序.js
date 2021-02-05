function mergeSort(arr){
    let len = arr.length;
    if (len < 2) {
        return arr;
    }
    let middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
    let result = [];
    while(left.length && right.length){
        if (left[0] <= right[0]) {
            result.push(left.shift())
        }else{
            result.push(right.shift())
        }
    }
    while(left.length){
        result.push(left.shift())
    }
    while(right.length){
        result.push(right.shift())
    }
    return result;
}

let arr = [88,15,66,56,1,5,6,19,56]

let res = mergeSort(arr);
console.log(res)




/* function quickSort(arr){
    let left = [];
    let right = [];
    let newArr = [];
    if (arr.length <= 1) {
        return arr
    }
    let index = Math.floor(arr.length / 2);
    let middle = arr[index];
    arr.splice(index, 1);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > middle) {
            right.push(arr[i])
        } else{
            left.push(arr[i])
        }
        
    }
    return newArr.concat(quickSort(left), middle, quickSort(right));
}

let arr = [89,99,100,1,5,6,10]
let res = quickSort(arr);
console.log(res) */