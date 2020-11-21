function vowelChecker(x){
    if (x.toLowerCase() === 'a'  || x.toLowerCase() === 'e' || x.toLowerCase() === 'i' || x.toLowerCase() === 'o' || x.toLowerCase() === 'u'){
        console.log("This is a vowel");
    }else if (x.toLowerCase() === 'y'){
        console.log("This is sometimes a vowel");
    }else{
        console.log("This is not a vowel");
    }
}

vowelChecker('b');
vowelChecker('a');
vowelChecker('Y');
