// give an array of products, each with a category. separate them into two arrays : one for electronics and one for clothing store the result in an object with two properties: electronics and clothing. use a loop to achieve this without defining a function.

const products = [
    { name: "phone", category: "electronics" },
    { name: "shirt", category: "clothing" },
    { name: "tablet", category: "electronics" },
    { name: "shoes", category: "clothing" },
    { name: "laptop", category: "electronics" },
    { name: "dress", category: "clothing" },
    { name: "phone", category: "electronics" },
    { name: "hat", category: "clothing" },
    { name: "laptop", category: "electronics" }
]

let categorizedProducts = {
    electronics: [],
    clothing: []
}

for (let i = 0; i < products.length; i++){
    const singleProduct = products[i];
    if(singleProduct.category === "electronics"){
        categorizedProducts.electronics.push(singleProduct.name);
    }
    else{
        categorizedProducts.clothing.push(singleProduct.name);
    }
}
console.log(categorizedProducts); // { electronics: [ 'phone', 'tablet', 'laptop', 'phone', 'laptop' ], clothing: [ 'shirt', 'shoes', 'dress', 'hat' ] }