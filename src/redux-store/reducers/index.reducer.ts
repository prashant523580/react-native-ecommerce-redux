import {combineReducers} from "redux";
import cartReducer from "./cart.reducers";
import orderReducers from "./order.reducer";
import productReducers from "./product.reducer";
import userReducer from "./user.reducer";
import wishlistReducer from "./wishlist.reducer";



const reducers = combineReducers({
    // products:
    carts: cartReducer,
    wishlists:wishlistReducer,
    products: productReducers,
    user: userReducer,
    orders:orderReducers
}) 

export default reducers;