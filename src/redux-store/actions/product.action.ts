import { productConstants } from "./actionTypes"

export const getProducts = () => {
    return async (dispatch: any ) => {
        let res =  await fetch("https://fakestoreapi.com/products");
        let data = await res.json();
        // console.log(data)
        dispatch({
            type: productConstants.GET_PRODUCTS,
            payload : data
        })
    }
}