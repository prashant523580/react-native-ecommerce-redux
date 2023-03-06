import { PayloadAction } from "@reduxjs/toolkit"
import { ProductTypes } from "../../types/product"
import { wishlistConstants } from "../actions/actionTypes"

const initialState : any= {
    wishlists:[]
}
const wishlistReducer = (state= initialState,actions:PayloadAction<any>) => {
        switch(actions.type){
            case wishlistConstants.ADD_TO_WISHLIST:
                state.wishlists.push(actions.payload) 
                state={
                    ...state
                }
                break;
            case wishlistConstants.REMOVE_FROM_WISHLIST:
                let deletedItem = state.wishlists.filter((item:ProductTypes,index:number) => {
                    return index !== actions.payload
                })
                state ={
                    ...initialState,
                    wishlists : deletedItem
                }
                break     
        }
        return state
}
export default wishlistReducer;