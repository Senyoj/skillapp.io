// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_I7e91IY5cNupwubCYMdDdX6uKk6d0zU",
  authDomain: "skillapp-51a4b.firebaseapp.com",
  projectId: "skillapp-51a4b",
  storageBucket: "skillapp-51a4b.firebasestorage.app",
  messagingSenderId: "714668071468",
  appId: "1:714668071468:web:3d1866b69d323381428f89",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, query, where, getDocs };
