import { IPRODUCT } from '../types/document/IProduct';
import { MainProduct } from '../repositories/Product.repositories';
import CustomeError from '../utills/error';
import { Get, Route, Tags, Post, Body, Path, Put, Delete, SuccessResponse } from "tsoa";
import { SaveUpdateResProduct } from '../types/response/Product.response';
import { SaveReqProduct, UpdateReqProduct, GetProduct,DeleteProduct, ProductListReqProduct } from '../types/Request/Product.request';
@Route('product')
@Tags('product')
export class ProductController {
  constructor() { }
  @Post("/getProduct")
  async getProduct(@Body() getreq:GetProduct): Promise<SaveUpdateResProduct> {
    const product = await new MainProduct().getProduct(getreq.id);
    if (product === null) throw new CustomeError(404, 'Product is not found');
    return <SaveUpdateResProduct>product;
  }
  @Post('/saveproduct')
  async saveProduct(@Body() product: SaveReqProduct): Promise<SaveUpdateResProduct> {
    const new_product:IPRODUCT = await new MainProduct().saveProduct(<IPRODUCT>(product));
    return <SaveUpdateResProduct>(new_product);
  }
  @Put('/updateproduct')
  async updateProduct(@Body() product: UpdateReqProduct): Promise<SaveUpdateResProduct> {
    const update_product= await new MainProduct().updateProduct(<IPRODUCT>(product));
    if (update_product === null)
      throw new CustomeError(400, 'Product is not updated');
    return <SaveUpdateResProduct>update_product;
  }
  @Delete('/deleteproduct')
  @SuccessResponse("200","Product deleted")
  async deleteProduct(@Body() delreq: DeleteProduct) {
    return await new MainProduct().deleteProduct(delreq.id);
  }
  @Get('/getproductlist')
  async getProductList(): Promise<ProductListReqProduct[]> {
    const product: IPRODUCT[] = await new MainProduct().getProductlist();
    return <ProductListReqProduct[]>(product);
  }
}