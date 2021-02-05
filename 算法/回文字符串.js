let str = 12321;
function checkPlaindrom(s){
    if (typeof(s) === 'number') {
        s = s.toString()
    }
    // s = s.toString()
    return s == s.split('').reverse().join('');
}
console.log(checkPlaindrom(str))