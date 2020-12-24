import { firestore } from "../../firebase/firebase";
import * as actionTypes from "./actionTypes";

export const listStores = (cityId) => {
  let stores = [];
  return (dispatch) => {
    firestore
      .collection("stores")
      .where("cityId", "==", cityId)
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

export const fetchStoreInfo = (storeId) => {
  return (dispatch) => {
    firestore
      .collection("stores")
      .doc(storeId)
      .get()
      .then((doc) => {
        dispatch({ type: actionTypes.STORE_INFO, storeInfo: doc.data() });
      })
  }
} 