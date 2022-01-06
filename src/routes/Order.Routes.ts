import express from 'express';
import { Jwt } from 'jsonwebtoken';
import { OrderController } from '../controllers/Order.controller';
import { IORDER } from '../types/document/IOrder';
import { SaveReqOrder, UpdateReqOrder, GetOrder,DeleteOrder, OrderListReqOrder } from '../types/Request/Order.request';
import { SaveUpdateResOrder } from '../types/response/Order.response';
import CustomeError from '../utills/error';

export class OrderRoutes {
  router: express.Router;
  constructor() {
    this.router = express.Router();
    this.routes();
  }
  routes() {
    this.router.post('/getOrder', async (req, res, next) => {
      try {
        const getreq:GetOrder = req.body;
          const order:SaveUpdateResOrder = await new OrderController().getOrder(getreq);
          res.send(order);
      } catch (error) {
        next(error);
      }
    });
    this.router.post('/saveOrder', async (req, res, next) => {
      try {
        const order: SaveReqOrder = req.body;
        const newOrder:SaveUpdateResOrder = await new OrderController().saveOrder(order);
        res.status(200).json({
          message: newOrder
        });
      } catch (error) {
        next(error);
      }
    });
    this.router.put('/updateorder', async (req, res, next) => {
      try {
        const order: UpdateReqOrder = req.body;
        const upadated_order:SaveUpdateResOrder = await new OrderController().updateOrder(order);
        const response = {
          upadated_order,
        };
        res.status(200).json({
          message: response
        });
      } catch (error) {
        next(error);
      }
    });
    this.router.delete('/deleteorder', async (req, res, next) => {
      try {
        const delreq:DeleteOrder = req.body;
        const Deleted_order = await new OrderController().deleteOrder(delreq);
        res.status(200).json({
          message: 'Order that you are trying to delete is removed'
        });;
      } catch (error) {
        next(error);
      }
    });

    this.router.get('/getOrderList', async (req, res, next) => {
      try {
        const getreq:OrderListReqOrder[] = req.body;
          const order:OrderListReqOrder[] = await new OrderController().getOrderList();
          console.log(getreq);
          const response = {
            order,
        };
        res.status(200).json({
          message: response
        });
          res.send(order);
      } catch (error) {
        next(error);
      }
    });

  }
}























export const OrderRoutesApi = new OrderRoutes().router;



