import { useSelector } from "react-redux"
import { RootState } from "../store"
import { cartConstants, wishlistConstants } from "./actionTypes"

export const addToCart = (cartItem : any) => {
    return (dispatch : any) => {
                let newcart = {
                    ...cartItem,
                    qty: 1
                }
            dispatch({
                type: cartConstants.ADD_TO_CART,
                payload: newcart
            })
            dispatch(getSubtotal())
        }
    }
export const removeCart =  (cartItem: any) => {
    return (dispatch :any) => {
        
        let cart = {
            ...cartItem,
            qty: 1
        }    
        dispatch({
            
            type:cartConstants.REMOVE_FROM_CART,
            payload: cart
        })
        dispatch(getSubtotal())
    }
} 
export const resetCart = () =>{
    return{
        type: cartConstants.RESET_CART,
        payload:{}
    }
}
export const addToWishlist = (cartItem : any) => {
    return (dispatch : any) => {
        let newcart = {
            ...cartItem,
            qty: 1
        }
            dispatch({
                type: wishlistConstants.ADD_TO_WISHLIST,
                payload:newcart
            })
    }
}
export const  getSubtotal = () => {

    return {
            type: cartConstants.GET_SUBTOTAL
            }
}
// export const removeCart = (id : any) => {
//     return (dispatch : any) => {
//         dispatch({
//             type:cartConstants.REMOVE_FROM_CART,
//             payload: id
//         })
//     }
// }

// export const addToCart = (cartItem:any) => {
//     return{
//         type:cartConstants.ADD_TO_CART,
//         payload: cartItem
//     }
// }

// export const addToWishlist= (cartItem:any) => {
//     return{
//         type:cartConstants.ADD_TO_CART,
//         payload: cartItem
//     }
// }
export const removeWishlist=  (index:any) => {
    return{
        type:wishlistConstants.REMOVE_FROM_WISHLIST,
        payload: index
    }
}