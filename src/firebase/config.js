import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCIkvtQo_aWyLBcMG4gQAaX0_Xe4RvbzMY",
  authDomain: "nominal-calculator.firebaseapp.com",
  projectId: "nominal-calculator",
  storageBucket: "nominal-calculator.appspot.com",
  messagingSenderId: "977918536160",
  appId: "1:977918536160:web:1c7c3381b559ec581a6385",
};

const db = firebase.firestore();
const googleAuthProvider = firebase.auth.GoogleAuthProvider();
firebase.initializeApp(firebaseConfig);
export { firebase, db, googleAuthProvider };
