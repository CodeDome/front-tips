// let s = 'abcabcbb';
// let s = 'abccd';
let s = 'abcabcdef'

// 返回长度
function findLongSubstring(str){
    let arr = [];
    let max = 0;
    let res = []
    for (let i = 0; i < str.length; i++) {
        let index = arr.indexOf(str[i]);
        if (index !== -1) {
            arr.splice(0, index + 1);
        }
        arr.push(str.charAt(i));
        max = Math.max(arr.length, max)
        
    }
    return max;
}

console.log(findLongSubstring(s))
// 返回长度和字符串

function findLongSubstring2(str){
    let arr = [];
    let max = 0;
    let res = []
    for (let i = 0; i < str.length; i++) {
        let index = arr.indexOf(str[i]);
        if (index !== -1) {
            res.push([...arr])
            arr.splice(0, index + 1);
        }
        arr.push(str.charAt(i));
        max = Math.max(arr.length, max)
        
    }
    let maxStr = []
    let tmpLen = 0;
    res.filter(v=>{
        if (v.length > tmpLen) {
            tmpLen = v.length;
        }
        maxStr.push([...v])
    })
    
    return [max,maxStr];
}

console.log(findLongSubstring2(s))






























/* function findOfLongSubstring0(s){
    let arr = [];
    let max = 0;
    let sub = [];
    for (let i = 0; i < s.length; i++) {
        let index = arr.indexOf(s[i])
        if (index !== -1) {
            // console.log(arr)
            sub.push([...arr])
            arr.splice(0, index + 1)
        }
        // sub.push(arr)
        arr.push(s.charAt(i));
        max = Math.max(arr.length, max)
        
    }
     console.log('==>',sub.map(m=>m.length).max())
    return max;
}
console.log(findOfLongSubstring0(s)) */

// 同时返回字符串
/* var lengthOfLongestSubstring = function(s) {
    let arr = [];
    let max = 0;
    let maxStr = '';
    for(let item of s){
        if(arr.includes(item)){
            let index = arr.indexOf(item);
            // arr.splice(0, index + 1);
            arr = [];
        }
        arr.push(item);
        max = max > arr.length ? max : arr.length;
        maxStr = arr.join('').length > maxStr.length ? arr.join('') : maxStr;
    }
    return [max, maxStr];
};
console.log(lengthOfLongestSubstring(s)) */




/* var lengthOfLongestSubstring1 = function(s) {
    const length = s.length;
    const map = new Map();
    let i = 0,
        j = 0;
    let ans = 0;
    while (i < length && j < length) {
        // 容易理解：检查s[j]是否出现过，并且s[j]重复的字符是否在当前的滑动窗口中
        if (map.has(s[j]) && map.get(s[j]) >= i) {
            i = map.get(s[j]) + 1;
        }
        ans = Math.max(j - i + 1, ans);
        map.set(s[j], j);
        ++j;
    }
    return ans;
};

console.log(lengthOfLongestSubstring1(s))  */





/* var lengthOfLongestSubstring = function(s) {

    let res = 0;
    let i = 0;
    let arry = [];
    let resd = []
    while(i<s.length){
        //判断数组是否存在
        if(arry.includes(s[i])){
            //如果存在就把第一个删除
            arry.shift()
            //继续遍历
           
            continue
        }else{
            arry.push(s[i])
        }
        //返回res和arr长度最大值
        res = Math.max(res,arry.length);
        i++
    }

    return res
};
console.log(lengthOfLongestSubstring(s)) */













/* var lengthOfLongestSubstring = function(s) {
    // 滑动窗口初始化为一个空数组
    let arr = [];
    // 要返回的字符串的长度
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        // 使用 indexOf 判断是否在数组中出现过
        let index = arr.indexOf(s[i])
            // 如果出现过
        if (index !== -1) {
            // 从数组开头到当前字符串全部截取掉
            arr.splice(0, index + 1);
        }
        // 在窗口右边放进新的字符
        arr.push(s.charAt(i));
        // 更新下最大值
        max = Math.max(arr.length, max);
    }
    // 返回
    return max;
};
console.log(lengthOfLongestSubstring('abcabb')) */