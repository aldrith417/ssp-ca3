// Response for all routes will look like these
export interface SaveUpdateResOrder {
    _id:string;
    noOfOrder: number;
    productId: string;
    noOfPizzas: number;
    statusOfOrder: string;
    bill:number;
  }