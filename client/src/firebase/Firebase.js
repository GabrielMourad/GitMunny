// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'


require('dotenv').config();


const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

const provider = new GoogleAuthProvider() 

export const googleSignIn = () => {
  signInWithPopup(auth, provider).then((result) => {
    console.log(result)

  }).catch((err) => {
    console.log(err)
  });;
};