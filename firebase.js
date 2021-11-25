// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD34G2XBXiH81YhyY-3BdMuDog4UyJ5Xdw",
  authDomain: "tinder-rnative-clone.firebaseapp.com",
  projectId: "tinder-rnative-clone",
  storageBucket: "tinder-rnative-clone.appspot.com",
  messagingSenderId: "689137445225",
  appId: "1:689137445225:web:ec342db298d0bb138975f8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//login, etc,
const auth = getAuth();

// upgraded NoSQL made by Google
//post info to the database
const db = getFirestore();

//singleton pattern, initialize once and access outside anywhere in the app
export { db, auth };
