let ss = 'aberbrftbtcdebrbbbrwwdbqqbyyyybybbbbb'
function checkoutMaxChar(s){
    let dist_str = {},
        max = 0,
        max_str = '';
    s = s.toLocaleLowerCase();
    for (let i = 0; i < s.length; i++) {
        let key = s[i];
        if (dist_str[key]) {
            dist_str[key]++
        }else{
            dist_str[key] = 1
        }
        
    }
    for (const items in dist_str) {
       if (dist_str[items] > max) {
           max = dist_str[items]
           max_str = items
       }
    }
    return [max_str,max]
}

console.log(checkoutMaxChar(ss))