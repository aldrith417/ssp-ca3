import { Document } from 'mongoose';
export interface IPRODUCT extends Document {
  _id:string;
  Name: string;
  Description: string;
  amount: number;
  price: number;
  
}