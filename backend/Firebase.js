import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyALjR1j1MuW2UNjovIK6aSwFNEVQX61esw",
    authDomain: "personal-website-dev-64dba.firebaseapp.com",
    projectId: "personal-website-dev-64dba",
    storageBucket: "personal-website-dev-64dba.firebasestorage.app",
    messagingSenderId: "986046591851",
    appId: "1:986046591851:web:78b084322b05e04a37d22e"
  };
  
  // Initialize Firebase / Firestore
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const auth = getAuth(app);
export const storage = getStorage(app);

export const analytics = () => getAnalytics(app);

export {app,db};