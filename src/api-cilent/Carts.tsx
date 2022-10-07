import instance from "./Config";

export const AddCartApi = (data: any) => {
   return instance.post(`/orders`, data);
}

export const UpdateQuantityCart = (data:any) => {
    return instance.put(`/updatequantity`,data)
}