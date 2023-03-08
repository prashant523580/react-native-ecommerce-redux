import { orderConstants } from "./actionTypes"

export const addOrder = (orderItem: any) => {
    return{
        type: orderConstants.ADD_ORDER,
        payload: orderItem
    }
} 