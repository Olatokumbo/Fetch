import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyDoRny76VIEa-AK3EHap4HQ5IVNrwCmgRw",
    authDomain: "fetch-20.firebaseapp.com",
    databaseURL: "https://fetch-20.firebaseio.com",
    projectId: "fetch-20",
    storageBucket: "fetch-20.appspot.com",
    messagingSenderId: "49956656706",
    appId: "1:49956656706:web:684af07ad29c42f3e4bfdb",
    measurementId: "G-2WMFSCP8JG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const firestore = firebase.firestore();
  const storage = firebase.storage();
  const auth = firebase.auth();
//   firebase.analytics();

export{ firebase as default, firestore, auth, storage}