import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  getAuth,
} from "firebase/auth";
import firebaseKeys from "./firebaseKeys";

//Get these keys from me.
const firebaseConfig = firebaseKeys;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const login = signInWithEmailAndPassword;
export const onAuthChange = onAuthStateChanged;
export const signUp = createUserWithEmailAndPassword;
