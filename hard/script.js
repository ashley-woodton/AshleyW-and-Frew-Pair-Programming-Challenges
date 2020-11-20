function brackets(str){
    if(str[0] === "{" && str[str.length - 1] === "}"){
        return true;
    }else if(str[0] === "[" && str[str.length - 1] === "]"){
        return true;
    }else if(str[0] === "(" && str[str.length - 1] === "])"){
        return true;
    }else{
       return false;
    }
}

var string1 = "{hello world}";
var string2 = "{hello world]";

console.log(brackets(string1));
console.log(brackets(string2));