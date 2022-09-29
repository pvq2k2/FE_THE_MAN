import instance from "./Config";
import { ICatePost } from "../models/CatePost";
export const getAllCatePost = (): Promise<ICatePost[]> => {
    const url = "/catepost";
    return instance.get(url);
}

export const readCatePost = (id: string): Promise<ICatePost> => {
    const url = `/catepost/${id}`;
    return instance.get(url);
}

export const createCatePost = (catepost: ICatePost): Promise<ICatePost> => {
    const url = `/catepost`;
    return instance.post(url, catepost);
}

export const updateCatePost = (catepost: ICatePost): Promise<ICatePost> => {
    const url = `/catepost/${catepost._id}`;
    return instance.put(url, catepost);
}

export const removeCatePost = (id: string): Promise<ICatePost> => {
    const url = `/catepost/${id}`;
    return instance.delete(url);
}