// give an array if product names, remove duplicates while preserving the original order. use a loop to achieve this without defining a function.

let products = ["phone", "tablet", "phone", "laptop", "tablet", "laptop", "phone", "tablet", "laptop"];

let uniqueproducts = [];
for (let i = 0; i < products.length; i++) {
    if (!uniqueproducts.includes(products[i])) {
        uniqueproducts.push(products[i]);
    }
}
console.log(uniqueproducts); // ["phone", "tablet", "laptop"]