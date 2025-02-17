function sendNotification(email){
    if(!email.includes("@")){
        return "Invald Email";
    }
    let splitEmail = email.split("@");
    const userName = splitEmail[0];
    const userDomain = splitEmail[1];
    let newString = userName + " sent you an email from " + userDomain;
    return newString;
}
let message = "kamran@gmail.com"
console.log(sendNotification(message))