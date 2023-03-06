import AsyncStorage from "@react-native-async-storage/async-storage"
import { addressConstants, authConstants } from "./actionTypes"

export const isAuthenticate = () => {
    return async (dispatch :any) =>{
            let auth =  await AsyncStorage.getItem("user");
            (auth !== null) ? auth = JSON.parse(auth) : auth = null 
            dispatch({
                type: authConstants.AUTH_LOGIN,
                payload: auth
            })      
    }
}
export const addAddress = (data: any) => {
    return{
        type: addressConstants.ADD_ADDRESS,
        payload: data
    }
}
export const removeAddress = (index: any) => {
    return{
        type:addressConstants.REMOVE_ADDRESS,
        payload: index
    }
}