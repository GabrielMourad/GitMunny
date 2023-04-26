import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDV3Qc5xTGiR9g7_71qEVV_80sQZzsa89c",
  authDomain: "gitmuney-3222e.firebaseapp.com",
  projectId: "gitmuney-3222e",
  storageBucket: "gitmuney-3222e.appspot.com",
  messagingSenderId: "847719830073",
  appId: "1:847719830073:web:66f41e044fb30ea21273e8",
  measurementId: "G-0CT8W111V2",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

const db = getFirestore(app);
export { db };
