import { PayloadAction } from "@reduxjs/toolkit"
import { UserAddressTypes, UserTypes } from "../../types/user"
import { addressConstants, authConstants } from "../actions/actionTypes"

interface StateProps {
    user: UserTypes,
    address:Array<UserAddressTypes>
    authenticate: boolean
}
const initState: StateProps = {
    user:{},
    address:[],
    authenticate:false,
}

const userReducer = (state :StateProps = initState , actions: PayloadAction<any>) => {
    switch(actions.type){
        case authConstants.AUTH_LOGIN:
            state = {
                ...state,
                user: actions.payload,
                authenticate:true
            }
            break
        case addressConstants.ADD_ADDRESS:
            state ={
                ...state,
                address : [...state.address,actions.payload]
            }
            break;
        case addressConstants.REMOVE_ADDRESS:
            const deletedArrray = state.address.filter((item,index) =>{
                return  index !== actions.payload
            })
            return deletedArrray;


    }
    return state
}

export default userReducer