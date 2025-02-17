// give a product price as a string (exampla: "$234") extra the numeric digits and calculate their sum.

// input: "$234"
// output: 15

let price = "$234";

let chars = price.split("");


for (let i = 0; i < chars.length; i++){
    let element = chars[i];
    if (!isNaN(element) && element !== ""){
        console.log(element)
    }
}