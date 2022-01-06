export interface SaveReqOrder{
    noOfOrder: number;
    productId: string;
    noOfPizzas: number;
    statusOfOrder: string;
    bill:number;
    
  }
  export interface UpdateReqOrder {
    _id: string;
    noOfOrder: number;
    productId: string;
    noOfPizzas: number;
    statusOfOrder: string;
    bill:number;
  }
  export interface GetOrder {
    id: string
  }
  export interface DeleteOrder {
    id: string
  }

  export interface OrderListReqOrder{
    _id: string;
    noOfOrder: number;
    productId: string;
    noOfPizzas: number;
    statusOfOrder: string;
    bill:number;
    
  }