function checkDigitsInName(name){
    if(typeof name !== "string"){
        return "Invalid Input";
    }
    let constainDigit = false;
    for(let i = 0; i < name.length; i++){
        let char = name[i];
        if(!isNaN(char) && char !== " "){
            constainDigit = true;
            break;
        }
    }
    return constainDigit
}

let result = checkDigitsInName("dsdsd");
console.log(result)