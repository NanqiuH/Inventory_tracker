// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7f_y8DrwwVwOucFvRqHyTaAEKTYCDb5k",
  authDomain: "inventory-management-bd60a.firebaseapp.com",
  projectId: "inventory-management-bd60a",
  storageBucket: "inventory-management-bd60a.appspot.com",
  messagingSenderId: "730156428004",
  appId: "1:730156428004:web:6a596be919dedc9098daf1",
  measurementId: "G-9WJ9GCCSXP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore }