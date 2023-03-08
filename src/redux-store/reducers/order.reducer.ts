import { PayloadAction } from "@reduxjs/toolkit"
import { orderConstants } from "../actions/actionTypes"


const initialState: any ={
    orders:[]
}

const orderReducers = (state = initialState,actions:PayloadAction) => {
    switch(actions.type){
        case orderConstants.ADD_ORDER:
            state= {
                orders: [...state.orders, actions.payload]
            }
    }
    return state
}
export default orderReducers;