export enum productStatus {
    Available="Available",
    outOfStock="OutOfStock"
}

export interface product {
    readonly id:number;
    name:string;
    price:number;
    description?:string;
    status:productStatus;
 }

 export interface Cartitem {
           product:product;
           quantity:number;
 }   

 export type CartItemID =number;
