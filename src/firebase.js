import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDO6OzN1DgUyDnPaNxd7SEgkSHwsouQTO4",
  authDomain: "chat-842b4.firebaseapp.com",
  projectId: "chat-842b4",
  storageBucket: "chat-842b4.appspot.com",
  messagingSenderId: "922880290352",
  appId: "1:922880290352:web:e001c74f2c71224bb807f5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
