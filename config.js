import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBVPSK3YB2PTSOm8YACMXxy9vKRwtNItUk",
    authDomain: "pro-c71-46452.firebaseapp.com",
    projectId: "pro-c71-46452",
    storageBucket: "pro-c71-46452.appspot.com",
    messagingSenderId: "856057767724",
    appId: "1:856057767724:web:79d1187d8499854ac56e89"
  };

//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
