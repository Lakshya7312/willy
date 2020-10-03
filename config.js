import * as firebase from 'firebase';
require("@firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyCjcUir93rt1fSrxzs5-UuuqAfHidPCIDU",
    authDomain: "woreless-library.firebaseapp.com",
    databaseURL: "https://woreless-library.firebaseio.com",
    projectId: "woreless-library",
    storageBucket: "woreless-library.appspot.com",
    messagingSenderId: "154378092723",
    appId: "1:154378092723:web:5cae55074b05ec2cc270c6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();