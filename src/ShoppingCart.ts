import {Cartitem,product } from "./types";
export default class  ShoppingCart{
   private items :Cartitem[]=[];

 // Create a Add Method
    additem(product:product,quantity:number):void{
         // Check product already exist in the cart
            const existingItem = this.items.find(
                 (item) => item.product.id === product.id
                );
             console.log("Hai")
             console.log(existingItem);
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