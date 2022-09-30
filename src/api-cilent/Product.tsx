import { Product } from "../models/Product";
import instance from './Config';
import { getAll } from './Post';

export const getAllProduct = (): Promise<Product[]> => {
  const url = "/products";
  return instance.post(url)
}

export const createProduct = (product: Product): Promise<Product> => {
  const url = `/products/`;
  return instance.post(url, product)
};