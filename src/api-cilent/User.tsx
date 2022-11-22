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

export const getComment = (id: User): Promise<User> => {
  return instance.get(`/comment/getByProduct/${id}`);
};
export const removeComemnt = (id: any): Promise<any> => {
  return instance.delete(`/comment/${id}`);
};
export const udpateComment = (Comment: any): Promise<any> => {
  return instance.put(`/comment/${Comment?.id}`, Comment);
};

export const addComment = (Comment: any): Promise<any> => {
  return instance.post(`/comment`, Comment);
};
