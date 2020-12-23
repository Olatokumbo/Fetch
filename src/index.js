import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware, combineReducers, compose} from "redux";
import {Provider} from "react-redux"
import thunk from "redux-thunk"; 
import {auth} from "./firebase/firebase";
import {authReducer, cityReducer, storeReducer} from "./store/reducers";
import App from "./App";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    auth: authReducer,
    city: cityReducer,
    store: storeReducer
})
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));


auth.onAuthStateChanged((user)=>{
    if(user){
        console.log("Logged in")
    }
    else{
        console.log("Logged out")
    }

})