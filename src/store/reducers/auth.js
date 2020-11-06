import * as actionTypes from "../actions/actionTypes";
const initialState ={
    auth: false
}

const authReducer = (state = initialState, action) =>{
    switch (action.type) {
        case actionTypes.SIGNIN_SUCCESS:
            return{
                ...state,
                auth: true
            }
        case actionTypes.SIGNIN_FAILED:
            return{
                ...state,
                auth: false
            }
        default:
           return state;
    }
}

export default authReducer;