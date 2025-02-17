function calculateTax (income, expense){
    if(typeof income !== "number" || income < 0 || typeof expense !== "number" || expense < 0){
        return "Invald Input"
    }
    let taxableAmount = income - expense;
    let tax = taxableAmount * 0.2;  // 20 / 100 = .2
    return tax;
}

let taxWillPay = calculateTax(10000, 3000);
console.log(taxWillPay);