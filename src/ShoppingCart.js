export default class ShoppingCart {
    constructor() {
        this.items = [];
    }
    // Create a Add Method
    additem(product, quantity) {
        // Check product already exist in the cart
        const existingItem = this.items.find((item) => item.product.id === product.id);
        console.log("Hai");
        console.log(existingItem);
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
    updateItemQuantity(productid, itemQuantity) {
        const item = this.items.find((item) => item.product.id == productid);
        if (item) {
            item.quantity = itemQuantity;
        }
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
//# sourceMappingURL=ShoppingCart.js.map