import instance from "./Config";
export const checkVoucherApi = (data: any) => {
  return instance.put("/checkvoucher", data);
};
export const removeVoucherApi = (id: any) => {
    return instance.delete("/discounts/"+id);
};
  
export const addVoucherApi = (data: any) => {
    return instance.post("/discounts/",data);
};