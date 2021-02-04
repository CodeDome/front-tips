function add(a){
    let fn = function(b){
        return add(a+b);
    }
    fn.valueOf = function(){
        return a;
    }
    fn.toString = function(){
        return '' + a;
    }
    return fn;
}

let res = add(2)(3)(4)
console.log(res)



// console.log(add(1)(2)(3)(4));   