
 let itemName:string = "TV";

 let itemPrice:number = 5000;

 let isAvailable:boolean = true;

//console.log(itemName,itemPrice,isAvailable);

 // create an Array 

 let productsAvailable :string[] =["TV","FANS","AC","MOBILES"]
// console.log(productsAvailable)
  
 // create a Interface

 interface product {
    readonly id:number;
    name:string;
    price:number;
    description?:string;
 }

 // create a AllProductArray it Accepts only product [] array only

 let AllProduct:product[]=[];

// create a sample products objects
 let product1: product = { id: 1, name: "TV", price: 8000, description: "24-inch display" };
 let product2: product = { id: 2, name:"Fans", price: 6000 };
 let product3: product = { id: 3, name: "AC", price: 60000, description: "3-star" };

 // add the sproducts in allProduct[]

 AllProduct.push(product1,product2,product3)
 //console.log(AllProduct)

 // create a DisplayFunction

 function displayProduct(prod:product):void{
   // console.log(`itemName is :${prod.name}`)
    //console.log(`itemPrice is :${prod.price}`);
 }

 displayProduct(product1);

 type CartItemID =number;

 interface Cartitem {
      product:product;
      quantity:number;
 }
// Creata a class 
 class  ShoppingCart{
   private items :Cartitem[]=[];

 // Create a Add Method
    additem(product:product,quantity:number):void{
         // Check product already exist in the cart
            const existingItem = this.items.find(
                 (item) => item.product.id === product.id
                );
         // Update the Quantity
          if(existingItem){
             existingItem.quantity+=quantity;
          }
          else{
            // create a new Iteam
             const newItem:Cartitem ={product,quantity};
             this.items.push(newItem);
          }
        
     }

     // Remove Item In the Cart

     removeItem(productid:number):void{
         this.items=this.items.filter((item)=>item.product.id==productid)
     }
      
     calculateTotal():number{
         return this.items.reduce((total,item)=>item.quantity*item.product.price,0)
     }
     updateItemQuantity(productid:number,itemQuantity:number):void{
        const item= this.items.find((item)=>item.product.id==productid)
         if(item){
          item.quantity=itemQuantity;
      }
   }
  
      
      
     getItems():Cartitem[]{
        return this.items
     }
   

      getTotalItems():number{          
         return this.items.reduce((total,item)=>item.quantity+total,0)
         
      }
      renderCart(container:HTMLDivElement):void{
         container.innerHTML="";
          
         this.items.forEach(item=>{
            const p= document.createElement("p");
            p.textContent = `${item.product.name}-Quantity:${item.quantity}`
            container.appendChild(p);
         })
         const total = document.createElement("p");
         total.textContent = `Total: $${this.calculateTotal()}`;
         container.appendChild(total);

      }
 }
 type productSummary = Pick<product,"name"|"price">;
 const sampleSummary:productSummary={
       name:"headphones",
       price:100
 }
 function updateProduct(productId: number, changes: Partial<product>): void {
  console.log(`Updating product #${productId} with changes:`, changes);
  // You could merge this into an existing product in a real app
}
updateProduct(2, { price: 30 });           // only updates price
updateProduct(3, { name: "New Keyboard" });
 function mockFetch<T>(data:T):Promise<T>{
    return new Promise((resolve)=>{
      setTimeout(()=>resolve(data),1000)
    })
 }
 mockFetch(AllProduct).then(products=>console.log("FetchedProducts",products));
 mockFetch({id:1,name:"pavan"}).then(user=>console.log("FetchedUser",user))




 const cart = new ShoppingCart()

 const appDiv = document.getElementById("app")as HTMLDivElement
 const button = document.getElementById("test-button") as HTMLButtonElement

 button.addEventListener("click",()=>{
        cart.additem(product1,4);
        cart.renderCart(appDiv);
 })
 cart.renderCart(appDiv);