import {firestore} from "../../firebase/firebase";
import * as actionTypes from "./actionTypes";

export const listCities = () =>{
    let cities = [];
    return (dispatch)=>{
        firestore
        .collection("cities")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              cities.push({ ...{ id: doc.id }, ...doc.data() });
            });
          })
          .then(() => {
            dispatch({ type: actionTypes.LIST_CITIES, cities });
            cities = [];
          });
    }
}
