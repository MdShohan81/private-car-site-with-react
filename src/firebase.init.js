// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPP4kbjLdgJAfqcvG3l-CNfh4IbbZcknw",
  authDomain: "private-car-74162.firebaseapp.com",
  projectId: "private-car-74162",
  storageBucket: "private-car-74162.appspot.com",
  messagingSenderId: "847876521974",
  appId: "1:847876521974:web:a920c998371a8a433fd1d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;