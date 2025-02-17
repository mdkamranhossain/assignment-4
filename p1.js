function calculateVAT( price ) {
    if(typeof price !== "number" || price < 0){
        return "Invalid";
    }
    vatPercent = 7.5;
    let result = price * vatPercent / 100;
    return result;
}


// let vattotal = calculateVAT(1500);
// console.log(vattotal)




/**--------Problem-2--------- */


function  validContact( contact ) {
    if(typeof contact !== "string" || contact == true){
        return "Invalid";
    }
    
    if(contact.length !== 11 || contact.includes(" ")){
        return false;
    }
    if(contact[0] === '0' && contact[1] === '1'){
        return true;
    }
    else{
        return false;
    }

}

// let x = validContact(true);
// console.log(x);


/**--------Problem-3--------- */


function  willSuccess( marks ) {

    if(!Array.isArray(marks)){
        return "Invalid";
    }

    let passMarks = [];
    let failMarks = [];

    for (let i = 0; i < marks.length; i++) {

        
        if(marks[i] >= 50){
            passMarks.push(marks[i]);
        }
        if(marks[i] < 50){
            failMarks.push(marks[i]);
        }
    }
    if(passMarks.length > failMarks.length){
        return "true";
    }
    else{
        return "false";
    }
}

let a = willSuccess( 90 );
console.log(a)