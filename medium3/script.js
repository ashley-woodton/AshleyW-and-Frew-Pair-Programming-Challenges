function gcd(x,y){
    while(y) {
        var t = y;
        y = x % y;
        x = t;
    }
    return x;
}

console.log(gcd(78,126));
console.log(gdc_(336,260));