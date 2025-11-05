
 let itemName:string = "TV";

 let itemPrice:number = 5000;

 let isAvailable:boolean = true;

console.log(itemName,itemPrice,isAvailable);

 // create an Array 

 let productsAvailable :string[] =["TV","FANS","AC","MOBILES"]
 console.log(productsAvailable)
  
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
 console.log(AllProduct)

 // create a DisplayFunction

 function displayProduct(prod:product):void{
    console.log(`itemName is :${prod.name}`)
    console.log(`itemPrice is :${prod.price}`);
 }

 displayProduct(product1);