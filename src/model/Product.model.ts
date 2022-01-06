import { Schema, model } from 'mongoose';
import { IPRODUCT } from '../types/document/IProduct';

// Schema of Pizza, its showing which parameters are required and which are optional
const IPRODUCTSchema = new Schema(
  {
    Name: { type: String },
    Description: { type: String },
    amount: { type: Number },
    price: { type: Number },
   
  },
  { timestamps: true }
);
export const PRODUCTSchema = model<IPRODUCT>('IPRODUCTSchema', IPRODUCTSchema);