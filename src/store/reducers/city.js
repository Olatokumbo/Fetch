import * as actionTypes from "../actions/actionTypes";
const initialState = {
    cities: []
}

const cityReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LIST_CITIES:
            return {
                ...state,
                cities: action.cities
            }
        case actionTypes.LIST_STORES:
            return {
                ...state,
                cities: action.stores
            }
        default:
            return state
    }
}

export default cityReducer;