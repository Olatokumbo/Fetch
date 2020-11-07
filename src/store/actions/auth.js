import {auth} from "../../firebase/firebase";
import * as actionTypes from "./actionTypes";

export const startSignin = (user) =>{
    return (dispatch)=>{
        auth
        .signInWithEmailAndPassword(user.email, user.password)
        .then((data) => {
            dispatch({ type: actionTypes.SIGNIN_SUCCESS, uid: data.uid });
          })
          .catch((err) => {
            dispatch({ type: actionTypes.SIGNIN_FAILED, error: err.message });
          });
      };
    }

    export const startSignup = (user)=>{
        return (dispatch)=>{
            auth
            .createUserWithEmailAndPassword(user.email, user.password)
            .then((authUser)=>{
               dispatch({type: actionTypes.SIGNUP_SUCCESS})
            })
            .catch((err)=>{
                dispatch({type: actionTypes.SIGNUP_FAILED, error:err.message})
            })
        }
    }