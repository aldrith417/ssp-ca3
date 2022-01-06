import { Schema, model } from 'mongoose';
import { IORDER } from '../types/document/IOrder';
// Schema of Pizza, its showing which parameters are required and which are optional
const IORDERSchema = new Schema(
  {
    noOfOrder: { 
        type: Number,
        required:true
        
        },
    productId:{
               type: Schema.Types.ObjectId,
               ref: 'PrductSchema',
               required:true
              
        },

        noOfPizzas:{
            type:Number, 
            required:true   
            
        },

    statusOfOrder: {
         type: String,
         default: "inPipeline",
         required:true
      },

    bill:{
        type:Number,
        required:true
    },

  //   totalPrice:{
  //     type:Number,
  //     required:true
  // },

   
  },
  { timestamps: true }
);
export const ORDERSchema = model<IORDER>('IORDERSchema', IORDERSchema);