const initialState = {
    shops: [],
    loading: true
}

const shopReducer = (state=initialState, action) => {
    switch (action.type){
        case "FETCH_SHOPS":
            return {
                ...state,
                shops: action.payload.shops, 
                loading: false
            };
        case "CREATE_SHOP":
            const {newShop} = action.payload;
            return{
                ...state, 
                shops: [...state.shops, newShop]
            };
        default: return state;
    };
};

export default shopReducer;