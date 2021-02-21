import decode from "jwt-decode";
import instance from "./instance";
import * as types from "./types";

export const signup = (userData, history) => {
    return async (dispatch) => {
        try {
            const res = await instance.post("/signup", userData);
            dispatch({
                type: types.SET_USER,
                payload: decode(res.data.token)
            });
            history.push("/");
        } catch(error) {
            console.log("error:", error);
        }
    };
};

export const signin = (userData, history) => {
    return async (dispatch) => {
        try {
            const res = await instance.post("/signin", userData);
            dispatch({
                type: types.SET_USER,
                payload: decode(res.data.token)
            });
            history.push("/");
        } catch(error) {
            console.log("error:", error);
        }
    };
};

export const signout = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: types.SET_USER,
                payload: null
            });
        } catch(error) {
            console.log("error:", error);
        }
    };
};