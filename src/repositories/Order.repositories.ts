import { ORDERSchema } from '../model/Order.model';
//import { IADMIN } from '../types/document/IAdmin';
import { IORDER } from '../types/document/IOrder';
export class MainOrder {
  constructor() {}
  getOrder(_id: string) {
    return ORDERSchema.findById(_id);
  }
  saveOrder(order: IORDER) {
    return new ORDERSchema(order).save();
  }
  updateOrder(order: IORDER) {
    return ORDERSchema.findByIdAndUpdate(order._id, order, {
      new: true
    });
  }
  deleteOrder(_id: string) {
    return ORDERSchema.findByIdAndDelete(_id);
  }
  getOrderlist() {
   return ORDERSchema.find();
  }
}