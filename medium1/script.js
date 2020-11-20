function vowelChecker(x){
    if (x === 'a'  || x === 'e' || x === 'i' || x === 'o' || x === 'u'){
        console.log("This is a vowel");
    }else if (x === 'y'){
        console.log("This is sometimes a vowel");
    }else{
        console.log("This is not a vowel");
    }
}

vowelChecker('b')
vowelChecker('a')
vowelChecker('y')