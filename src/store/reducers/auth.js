import * as actionTypes from "../actions/actionTypes";
const initialState = {
  auth: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGNIN_SUCCESS:
      return {
        ...state,
        auth: true,
        error: null,
      };
    case actionTypes.SIGNIN_FAILED:
      return {
        ...state,
        auth: false,
        error: action.error,
      };
    case actionTypes.SIGNOUT:
      return {
        ...state,
        auth: false
      };
    default:
      return state;
  }
};

export default authReducer;
