import { productStatus } from "./types.js";
import ShoppingCart from "./ShoppingCart.js";
let itemName = "TV";
let itemPrice = 5000;
let isAvailable = true;
//console.log(itemName,itemPrice,isAvailable);
// create an Array 
let productsAvailable = ["TV", "FANS", "AC", "MOBILES"];
// console.log(productsAvailable)
// create a Interface
/*  interface product {
     readonly id:number;
     name:string;
     price:number;
     description?:string;
 } */
// create a AllProductArray it Accepts only product [] array only
let AllProduct = [];
// create a sample products objects
let product1 = { id: 1, name: "TV", price: 8000, description: "24-inch display", status: productStatus.Available };
let product2 = { id: 2, name: "Fans", price: 6000, status: productStatus.outOfStock };
let product3 = { id: 3, name: "AC", price: 60000, description: "3-star", status: productStatus.Available };
// add the products in allProduct[]
AllProduct.push(product1, product2, product3);
//console.log(AllProduct)
// create a DisplayFunction
function displayProduct(prod) {
    console.log(`${prod.name}-$${prod.price}`);
}
displayProduct(product1);
const sampleSummary = {
    name: "headphones",
    price: 100
};
function updateProduct(productId, changes) {
    console.log(`Updating product #${productId} with changes:`, changes);
    // You could merge this into an existing product in a real app
}
updateProduct(2, { price: 30 }); // only updates price
updateProduct(3, { name: "New Keyboard" });
function mockFetch(data) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(data), 1000);
    });
}
mockFetch(AllProduct).then(products => console.log("FetchedProducts", products));
mockFetch({ id: 1, name: "pavan" }).then(user => console.log("FetchedUser", user));
const cart = new ShoppingCart();
const appDiv = document.getElementById("app");
const button = document.getElementById("test-button");
button.addEventListener("click", () => {
    cart.additem(product1, 4);
    cart.renderCart(appDiv);
});
cart.renderCart(appDiv);
//# sourceMappingURL=main.js.map