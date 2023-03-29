// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfGLOVi3hhb9l0kyEfLdncaPEo4XZj3eA",
  authDomain: "instagram-db4bf.firebaseapp.com",
  projectId: "instagram-db4bf",
  storageBucket: "instagram-db4bf.appspot.com",
  messagingSenderId: "792719134167",
  appId: "1:792719134167:web:a8b17476d8c776b37a0f92",
  measurementId: "G-N6X4HVNTT1"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

// export
export { app, auth, firestore, storage };
