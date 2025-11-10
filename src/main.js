var itemName = "TV";
var itemPrice = 5000;
var isAvailable = true;
//console.log(itemName,itemPrice,isAvailable);
// create an Array 
var productsAvailable = ["TV", "FANS", "AC", "MOBILES"];
// create a AllProductArray it Accepts only product [] array only
var AllProduct = [];
// create a sample products objects
var product1 = { id: 1, name: "TV", price: 8000, description: "24-inch display" };
var product2 = { id: 2, name: "Fans", price: 6000 };
var product3 = { id: 3, name: "AC", price: 60000, description: "3-star" };
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
var ShoppingCart = /** @class */ (function () {
    function ShoppingCart() {
        this.items = [];
    }
    // Create a Add Method
    ShoppingCart.prototype.additem = function (product, quantity) {
        // Check product already exist in the cart
        var existingItem = this.items.find(function (item) { return item.product.id === product.id; });
        // Update the Quantity
        if (existingItem) {
            existingItem.quantity += quantity;
        }
        else {
            // create a new Iteam
            var newItem = { product: product, quantity: quantity };
            this.items.push(newItem);
        }
    };
    ShoppingCart.prototype.getTotalItems = function () {
        //  console.log(this.items)
    };
    return ShoppingCart;
}());
var cart = new ShoppingCart();
cart.getTotalItems();
