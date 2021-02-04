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
console.log(res)