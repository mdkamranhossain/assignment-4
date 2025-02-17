let marks = [45, 60, 32, 80, 55]; 

    let passMarks = [];
    let failMarks = [];

    for (let i = 0; i < marks.length; i++) {
        
        if(marks[i] >= 50){
            passMarks.push([i]);
        }
        if(marks[i] < 50){
            failMarks.push([i]);
        }
        if(passMarks.length > failMarks.length){
            return "true";
        }
        else{
            return "false";
        }
        
    }