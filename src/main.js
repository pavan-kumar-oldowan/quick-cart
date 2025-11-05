var itemName = "TV";
var itemPrice = 5000;
var isAvailable = true;
console.log(itemName, itemPrice, isAvailable);
// create an Array 
var productsAvailable = ["TV", "FANS", "AC", "MOBILES"];
console.log(productsAvailable);
// create a AllProductArray it Accepts only product [] array only
var AllProduct = [];
// create a sample products objects
var product1 = { id: 1, name: "TV", price: 8000, description: "24-inch display" };
var product2 = { id: 2, name: "Fans", price: 6000 };
var product3 = { id: 3, name: "AC", price: 60000, description: "3-star" };
// add the sproducts in allProduct[]
AllProduct.push(product1, product2, product3);
console.log(AllProduct);
// create a DisplayFunction
function displayProduct(prod) {
    console.log("itemName is :".concat(prod.name));
    console.log("itemPrice is :".concat(prod.price));
}
displayProduct(product1);
