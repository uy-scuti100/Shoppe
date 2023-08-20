export interface Product {
   id: string;
   name: string;
   images: string[];
   oldPrice: number | null;
   normalPrice: number;
   discounted: boolean;
   soldOut: boolean;
   isNew: boolean;
   description: string;
   details: string;
   additionalDetails: string;
   rating: number;
   category: string;
}
export interface User {
   username: string;
   password: string;
   firstname?: string;
   lastname?: string;
   email?: string;
   cart?: Product[]; // Array of products
   favorites?: Product[]; // Array of product IDs
   billingAddress: string;
   shippingAddress: string;
}
