import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYBmENSH0j__iBgGnR0erOc24ACTscLtA",
  authDomain: "imaret-ec92c.firebaseapp.com",
  projectId: "imaret-ec92c",
  storageBucket: "imaret-ec92c.appspot.com",
  messagingSenderId: "510320448361",
  appId: "1:510320448361:web:4b9c01711b62a798b2e3f8",
  measurementId: "G-X8K1ML5DXP"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
