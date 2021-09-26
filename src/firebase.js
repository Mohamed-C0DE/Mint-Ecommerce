// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsUPJLv55VjGHmMzdD6GMcfaezqcPwPr0",
  authDomain: "mint-ecommerce-shop.firebaseapp.com",
  databaseURL: "https://mint-ecommerce-shop-default-rtdb.firebaseio.com",
  projectId: "mint-ecommerce-shop",
  storageBucket: "mint-ecommerce-shop.appspot.com",
  messagingSenderId: "487964016346",
  appId: "1:487964016346:web:571d0748ce4f18f79f6fe3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

export default db;
