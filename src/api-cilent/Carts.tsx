import instance from "./Config";

export const AddCartApi = (data: any) => {
   return instance.post(`/orders`, data);
}
export const GetCartsApi = () => {
    return instance.get(`/orders`);
}

export const removeCartApi = (id: any) => {
    return instance.delete(`/orders/${id}`);
}
export const readCartApi = (id: any) => {
    return instance.get(`orders/${id}`)
}

export const updateStatusCartApi = (data:any) => {
    return instance.put(`/orders/${data._id}`,data);
}

export const UpdateQuantityCart = (data:any) => {
    return instance.put(`/updatequantity`,data)
}