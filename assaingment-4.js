function calculateVAT( price ) {
    if(typeof price !== "number" || price < 0){
        return "Invalid";
    }
    vatPercent = 7.5;
    let result = price * vatPercent / 100;
    return result;
}



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




function  validProposal( person1 , person2 ) {
    if(typeof person1 !== "object" || person1 === null || typeof person2 !== "object" || person2 === null)
        {
        return "Invalid";
    }
   if(person1.gender === person2.gender || Math.abs(person1.age - person2.age) > 7){
        return false; 
    } else{
    return true;
    }
}