import { Product } from "../models/Product";
import instance from './Config';
export const add = (product: Product): Promise<Product> => {
  return instance.post("/product", product)
};