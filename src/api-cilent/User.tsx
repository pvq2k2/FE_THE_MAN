import { User } from "../models/User";
import instance from "./Config";

export const getAll = (page: any, limit: any): Promise<User[]> => {
  return instance.post("users", { page, limit });
};
export const get = (id: string): Promise<User> => {
  return instance.get(`user/${id}`);
};

export const update = (User: User): Promise<User> => {
  return instance.put(`/user/${User._id}`, User);
};
