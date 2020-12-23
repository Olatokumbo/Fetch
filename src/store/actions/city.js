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

export const listStores = (cityId) =>{
  let stores = [];
  return (dispatch)=>{
    firestore
    .collection("stores")
    .where("id", "==", cityId)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        stores.push({ ...{ id: doc.id }, ...doc.data() });
      });
    })
    .then(() => {
      dispatch({ type: actionTypes.LIST_CITIES, stores });
      stores = [];
    });
  }
}