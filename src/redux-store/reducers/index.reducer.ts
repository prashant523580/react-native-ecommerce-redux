import {combineReducers} from "redux";
import cartReducer from "./cart.reducers";
import productReducers from "./product.reducer";
import userReducer from "./user.reducer";
import wishlistReducer from "./wishlist.reducer";



const reducers = combineReducers({
    // products:
    carts: cartReducer,
    wishlists:wishlistReducer,
    products: productReducers,
    user: userReducer
}) 

export default reducers;