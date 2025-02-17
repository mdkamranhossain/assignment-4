let description = "Lightweight and durable backpack";

let words = description.split(" ");

let reversed= "";

for (let i = words.length -1; i >= 0; i--){
    let element = words[i];
    reversed += element;
    if(i > 0){
        reversed += " "
    }
}
console.log(reversed)