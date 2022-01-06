export interface SaveReqProduct{
    Name: string;
    Description: string;
    amount: number;
    price: number;
    
  }
  export interface UpdateReqProduct {
    _id: string;
    Name: string;
    Description: string;
    amount: number;
    price: number;
  }
  export interface GetProduct {
    id: string
  }
  export interface DeleteProduct {
    id: string
  }

  export interface ProductListReqProduct{
    _id: string;
    Name: string;
    Description: string;
    amount: number;
    price: number;
    
  }