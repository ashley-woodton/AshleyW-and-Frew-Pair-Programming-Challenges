function gcd(x,y){
    while(y) {
        var b = y;
        y = x % y;
        x = b;
    }
    return x;
}

console.log(gcd(78,126));
console.log(gdc_(336,260));
