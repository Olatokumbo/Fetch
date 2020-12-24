import * as actionTypes from "../actions/actionTypes";
const initialState = {
    stores: [],
    cityName: "",
    storeInfo: []
}

const storeReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LIST_STORES:
            return {
                ...state,
                stores: action.stores,
                cityName: action.cityName
            }
        case actionTypes.STORE_INFO:
            return {
                ...state,
                storeInfo: action.storeInfo
            }
        default:
            return state
    }
}

export default storeReducer;