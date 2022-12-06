import instance from "./Config";
export const thongke_tong = () => {
  return instance.post("/thongke");
};
export const thongKeByDate = (date: any) => {
  return instance.post("/products/thongkebyday", date);
};
export const thongKeByMonth = (date: any) => {
  return instance.post("/products/thongkebymonth", date);
};
export const thongKeByYear = (date: any) => {
  return instance.post("/products/thongkebyyear", date);
};
