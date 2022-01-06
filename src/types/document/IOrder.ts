import { Document } from 'mongoose';
export interface IORDER extends Document {
  _id:string;
   noOfOrder: number;
    productId: string;
    noOfPizzas: number;
    statusOfOrder: string;
    bill:number;
  
}