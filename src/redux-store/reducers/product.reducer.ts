import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductTypes } from "../../types/product";
import { productConstants } from "../actions/actionTypes";

interface ProductsTypes {
   products: Array<ProductTypes>
}

const initialState : ProductsTypes  = {
    products: []
}

const productReducers = (state = initialState,actions :PayloadAction<any>) => {
    switch(actions.type){
         case productConstants.GET_PRODUCTS:
            state ={
                ...state,
                products:actions.payload
            } 
    }
    return state
}
export default productReducers 
// const productReducers = createSlice({
//     name:"product",
//     initialState,
//     reducers:{
//         getProducts(state, action: PayloadAction<any>) {
//             state = action.payload
//         }
//     }
// })

// export const {getProducts} = productReducers.actions
// export default productReducers.reducer