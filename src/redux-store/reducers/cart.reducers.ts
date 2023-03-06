import { PayloadAction } from "@reduxjs/toolkit"
import { ProductTypes } from "../../types/product"
import { cartConstants } from "../actions/actionTypes"

const initialState: any = {
    carts: {},
    subTotal:0
}
const cartReducer = (state = initialState, actions: PayloadAction<any>) => {
    switch (actions.type) {
        case cartConstants.ADD_TO_CART:
            let carts = state.carts;
            let title = actions.payload.title;
            if (actions.payload) {
                if (title in state.carts) {
                    carts[title].qty = state.carts[title].qty + actions.payload.qty
                } else {
                    carts[title] = {
                        qty: 1,
                        ...actions.payload
                    }
                }
            }
            state = {
                ...state,
                carts
            }
            break;
        case cartConstants.REMOVE_FROM_CART:
            carts = state.carts;
            if (actions.payload) {

                title = actions.payload.title
                if (title in state.carts) {
                    carts[title].qty = state.carts[title].qty - actions.payload.qty
                }
                if (carts[title]["qty"] <= 0) {
                    delete carts[title]
                }
            }
            // let deletedItem = state.carts.filter((item:ProductTypes,index:number) => {
            //     return index !== actions.payload
            // })
            state = {
                ...state,
                carts
            }
            break
        case cartConstants.GET_SUBTOTAL:
            let totalAmount = 0;
            carts = state.carts;
            let keys = Object.keys(carts);
            for(var i = 0; i < keys.length; i++){
                totalAmount += carts[keys[i]].price * carts[keys[i]].qty
            }
            
             state ={
                ...initialState,
                subTotal: totalAmount.toFixed(2)
            }
        break;
        case cartConstants.RESET_CART:

            state = {
                carts: {}
            }
            break


    }
    return state
}
export default cartReducer;