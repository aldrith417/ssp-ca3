import { IORDER } from '../types/document/IOrder';
import { MainOrder } from '../repositories/Order.repositories';
import CustomeError from '../utills/error';
import { Get, Route, Tags, Post, Body, Path, Put, Delete, SuccessResponse, Security } from "tsoa";
import { SaveUpdateResOrder } from '../types/response/Order.response';
import { SaveReqOrder, UpdateReqOrder, GetOrder,DeleteOrder, OrderListReqOrder } from '../types/Request/Order.request';
@Route('order')
@Tags('order')
//@Route("secure")
export class OrderController {
  constructor() { }
  @Post("/getOrder")
  async getOrder(@Body() getreq:GetOrder): Promise<SaveUpdateResOrder> {
    const order = await new MainOrder().getOrder(getreq.id);
    if (order === null) throw new CustomeError(404, 'Sorry your order  is not found');
    return <SaveUpdateResOrder>order;
  }
  @Post('/saveOrder')
  async saveOrder(@Body() order: SaveReqOrder): Promise<SaveUpdateResOrder> {
    const new_order:IORDER = await new MainOrder().saveOrder(<IORDER>(order));
    return <SaveUpdateResOrder>(new_order);
  }
  @Security("jwt", ["admin"])
  @Put('/updateOrder')
  async updateOrder(@Body() order: UpdateReqOrder): Promise<SaveUpdateResOrder> {
    const update_order= await new MainOrder().updateOrder(<IORDER>(order));
    if (update_order === null)
      throw new CustomeError(400, 'Sorry the order you want to edit is not updating.');
    return <SaveUpdateResOrder>update_order;
  }
  @Delete('/deleteorder')
  @SuccessResponse("200","Order deleted")
  async deleteOrder(@Body() delreq: DeleteOrder) {
    return await new MainOrder().deleteOrder(delreq.id);
  }
  @Get('/getOrderList')
  async getOrderList(): Promise<OrderListReqOrder[]> {
    const order: IORDER[] = await new MainOrder().getOrderlist();
    return <OrderListReqOrder[]>(order);
  }
}