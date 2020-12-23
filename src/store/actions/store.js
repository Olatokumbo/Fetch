import {firestore} from "../../firebase/firebase";
import * as actionTypes from "./actionTypes";

export const listStores = (cityId) =>{
    let stores = [];
    return (dispatch)=>{
      firestore
      .collection("cities")
      .doc(cityId)
      .collection("stores")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          stores.push({ ...{ id: doc.id }, ...doc.data() });
        });
      })
      .then(() => {
        dispatch({ type: actionTypes.LIST_STORES, stores, cityName: stores[0].city });
        stores = [];
      });
    }
  }