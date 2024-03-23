// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTbGCOKH30lPcdvGGMZqi2avtf_U4VsmA",
  authDomain: "bleet-aeb48.firebaseapp.com",
  projectId: "bleet-aeb48",
  storageBucket: "bleet-aeb48.appspot.com",
  messagingSenderId: "1063808821887",
  appId: "1:1063808821887:web:a8cd16bbe168c60ad16d4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app)

 