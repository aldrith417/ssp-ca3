import express from 'express';
import { ProductController } from '../controllers/Product.controller';
import { IPRODUCT } from '../types/document/IProduct';
import { SaveReqProduct, UpdateReqProduct, GetProduct,DeleteProduct, ProductListReqProduct } from '../types/Request/Product.request';
import { SaveUpdateResProduct } from '../types/response/Product.response';
import CustomeError from '../utills/error';

export class ProductRoutes {
  router: express.Router;
  constructor() {
    this.router = express.Router();
    this.routes();
  }
  routes() {
    this.router.post('/getProduct', async (req, res, next) => {
      try {
        const getreq:GetProduct = req.body;
          const admin:SaveUpdateResProduct = await new ProductController().getProduct(getreq);
          res.send(admin);
      } catch (error) {
        next(error);
      }
    });
    this.router.post('/saveProduct', async (req, res, next) => {
      try {
        const product: SaveReqProduct = req.body;
        const newProduct:SaveUpdateResProduct = await new ProductController().saveProduct(product);
        res.status(200).json({
          message: newProduct
        });
      } catch (error) {
        next(error);
      }
    });
    this.router.put('/updateproduct', async (req, res, next) => {
      try {
        const product: UpdateReqProduct = req.body;
        const upadated_product:SaveUpdateResProduct = await new ProductController().updateProduct(product);
        const response = {
          upadated_product,
        };
        res.status(200).json({
          message: response
        });
      } catch (error) {
        next(error);
      }
    });
    this.router.delete('/deleteproduct', async (req, res, next) => {
      try {
        const delreq:DeleteProduct = req.body;
        const Deleted_product = await new ProductController().deleteProduct(delreq);
        res.status(200).json({
          message: 'Product  deleted'
        });
      } catch (error) {
        next(error);
      }
    });

    this.router.get('/getProductList', async (req, res, next) => {
      try {
        const getreq:ProductListReqProduct[] = req.body;
          const product:ProductListReqProduct[] = await new ProductController().getProductList();
          console.log(getreq);
          const response = {
            product,
        };
        res.status(200).json({
          message: response
        });
          res.send(product);
      } catch (error) {
        next(error);
      }
    });

  }
}
export const ProductRoutesApi = new ProductRoutes().router;