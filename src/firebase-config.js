import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmKdch4i4T4_IX5njUIP82Ci_dpMcmXPw",
  authDomain: "tuckshop-menu-ceb23.firebaseapp.com",
  projectId: "tuckshop-menu-ceb23",
  storageBucket: "tuckshop-menu-ceb23.appspot.com",
  messagingSenderId: "755987203652",
  appId: "1:755987203652:web:3f613744bd72635e541e11",
  measurementId: "G-F4SQMP3MLG"
};

const app = initializeApp(firebaseConfig);

export const db1 = getFirestore(app);