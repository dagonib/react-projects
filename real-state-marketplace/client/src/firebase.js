// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-state-marketplace.firebaseapp.com",
  projectId: "real-state-marketplace",
  storageBucket: "real-state-marketplace.appspot.com",
  messagingSenderId: "820630426312",
  appId: "1:820630426312:web:300bb08e780716eba94bfd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);