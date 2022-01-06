import { Schema, model } from 'mongoose';
import { IPRODUCT } from '../types/document/IProduct';
const IPRODUCTSchema = new Schema(
  {
    Name: { type: String },
    Description: { type: String },
    amount: { type: Number },
    price: { type: Number },
   
  },
  //{ timestamps: true }
);
export const PRODUCTSchema = model<IPRODUCT>('IPRODUCTSchema', IPRODUCTSchema);