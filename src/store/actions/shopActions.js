import instance from "./instance";
import * as types from "./types";

export const fetchShops = () => {
    return async (dispatch) => {
        try {
            const res = await instance.get("/shops");
            dispatch({
                type: types.FETCH_SHOPS, 
                payload: {shops: res.data}
            });
        } catch (error) {
            console.log("error:", error);
        }
    }
};

export const createShop = (newShop) => {
    return async (dispatch) => {
        try {
            const formData = new FormData();
            for(const Key in newShop) formData.append(Key, newShop[Key]);
            const res = await instance.post("/shops", formData);
            dispatch({
                type: types.CREATE_SHOP, 
                payload: {newShop: res.data}
            });
        } catch(error) {
            console.log("error:", error);
        }
    }
}