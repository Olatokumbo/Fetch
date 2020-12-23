import * as actionTypes from "../actions/actionTypes";
const initialState = {
    stores: [],
    cityName: ""
}

const storeReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LIST_STORES:
            return {
                ...state,
                stores: action.stores,
                cityName: action.cityName
            }
        default:
            return state
    }
}

export default storeReducer;