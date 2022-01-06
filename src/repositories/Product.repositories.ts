import { PRODUCTSchema } from '../model/Product.model';
//import { IADMIN } from '../types/document/IAdmin';
import { IPRODUCT } from '../types/document/IProduct';
export class MainProduct {
  constructor() {}
  getProduct(_id: string) {
    return PRODUCTSchema.findById(_id);
  }
  saveProduct(product: IPRODUCT) {
    return new PRODUCTSchema(product).save();
  }
  updateProduct(product: IPRODUCT) {
    return PRODUCTSchema.findByIdAndUpdate(product._id, product, {
      new: true
    });
  }
  deleteProduct(_id: string) {
    return PRODUCTSchema.findByIdAndDelete(_id);
  }
  getProductlist() {
   return PRODUCTSchema.find();
  }
}