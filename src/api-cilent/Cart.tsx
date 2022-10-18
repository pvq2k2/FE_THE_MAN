import instance from "./Config";

export const addcart = (cart: any) => {
        const url = `/carts`
        return instance.post(url,cart)
}
export const readcart = (id: string) => {
    const url = `/carts/${id}`
    return instance.get(url)
}

