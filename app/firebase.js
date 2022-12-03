// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIMUrFtAovw_xSNsNN2DO34YmOYfy-ido",
  authDomain: "piafrontendlcc7s.firebaseapp.com",
  projectId: "piafrontendlcc7s",
  storageBucket: "piafrontendlcc7s.appspot.com",
  messagingSenderId: "453754015638",
  appId: "1:453754015638:web:fd081aecaf3c53ee5417b7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
