
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const config = require("config")
const firebaseConfig = {
  apiKey: config.get("APIKEY"),
  authDomain: config.get("AUTHDOMAIN"),
  projectId: config.get("PROJECT_ID"),
  storageBucket: config.get("STORAGEBUCKET"),
  messagingSenderId: config.get("MESSAGING_SENDER_ID"),
  appId: config.get("APP_ID"),
  measurementId: config.get("MEASUREMENT_ID")
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);