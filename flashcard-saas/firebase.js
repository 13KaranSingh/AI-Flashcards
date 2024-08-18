// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdik0K9Ofm-z0NX0W8rJcocKHZteMtoh8",
  authDomain: "flashcardsaas-6e202.firebaseapp.com",
  projectId: "flashcardsaas-6e202",
  storageBucket: "flashcardsaas-6e202.appspot.com",
  messagingSenderId: "130578377462",
  appId: "1:130578377462:web:b87ea3271fb1ae1c6b9ad7",
  measurementId: "G-LFNQJXSC78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);