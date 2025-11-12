let itemName = "TV";
let itemPrice = 5000;
let isAvailable = true;
//console.log(itemName,itemPrice,isAvailable);
// create an Array 
let productsAvailable = ["TV", "FANS", "AC", "MOBILES"];
// create a AllProductArray it Accepts only product [] array only
let AllProduct = [];
// create a sample products objects
let product1 = { id: 1, name: "TV", price: 8000, description: "24-inch display" };
let product2 = { id: 2, name: "Fans", price: 6000 };
let product3 = { id: 3, name: "AC", price: 60000, description: "3-star" };
// add the sproducts in allProduct[]
AllProduct.push(product1, product2, product3);
//console.log(AllProduct)
// create a DisplayFunction
function displayProduct(prod) {
    // console.log(`itemName is :${prod.name}`)
    //console.log(`itemPrice is :${prod.price}`);
}
displayProduct(product1);
// Creata a class 
class ShoppingCart {
    constructor() {
        this.items = [];
    }
    // Create a Add Method
    additem(product, quantity) {
        // Check product already exist in the cart
        const existingItem = this.items.find((item) => item.product.id === product.id);
        // Update the Quantity
        if (existingItem) {
            existingItem.quantity += quantity;
        }
        else {
            // create a new Iteam
            const newItem = { product, quantity };
            this.items.push(newItem);
        }
    }
    // Remove Item In the Cart
    removeItem(productid) {
        this.items = this.items.filter((item) => item.product.id == productid);
    }
    calculateTotal() {
        return this.items.reduce((total, item) => item.quantity * item.product.price, 0);
    }
    getItems() {
        return this.items;
    }
    getTotalItems() {
        return this.items.reduce((total, item) => item.quantity + total, 0);
    }
    renderCart(container) {
        container.innerHTML = "";
        this.items.forEach(item => {
            const p = document.createElement("p");
            p.textContent = `${item.product.name}-Quantity:${item.quantity}`;
            container.appendChild(p);
        });
        const total = document.createElement("p");
        total.textContent = `Total: $${this.calculateTotal()}`;
        container.appendChild(total);
    }
}
const cart = new ShoppingCart();
const appDiv = document.getElementById("app");
const button = document.getElementById("test-button");
button.addEventListener("click", () => {
    cart.additem(product1, 4);
    cart.renderCart(appDiv);
});
cart.additem(product1, 2);
export {};
//# sourceMappingURL=main.js.map