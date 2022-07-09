// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuPkUHoVeirAxaRmVzVGaD6SljZnpAhh0",
  authDomain: "clientsite-86b0e.firebaseapp.com",
  projectId: "clientsite-86b0e",
  storageBucket: "clientsite-86b0e.appspot.com",
  messagingSenderId: "968066291572",
  appId: "1:968066291572:web:20bcc0b6bfb55d8f0e3e21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export {db,storage};