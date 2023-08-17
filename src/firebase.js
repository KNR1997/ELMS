import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAzUPOLeeNCPrDKBr7MA5sAH7fYaa2GlEY",
  authDomain: "e-learning-management-sy-befbb.firebaseapp.com",
  projectId: "e-learning-management-sy-befbb",
  storageBucket: "e-learning-management-sy-befbb.appspot.com",
  messagingSenderId: "1058591115941",
  appId: "1:1058591115941:web:a70913074fa6ea14759b4c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore(app);
export const storage = getStorage(app);
