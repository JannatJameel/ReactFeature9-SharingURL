import { combineReducers } from "redux";
import shop from "./shopReducer";
import product from "./productReducer";
import user from "./authReducer";


const rootReducer = combineReducers({ shop, product, user });

export default rootReducer;