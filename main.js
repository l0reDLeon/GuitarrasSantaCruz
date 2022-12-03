import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { auth } from "./app/firebase.js"
import {loginCheck} from './app/loginCheck.js'

import './app/logout.js'
import './app/signupForm.js'
import './app/loginForm.js'

 
onAuthStateChanged(auth, async (user) => {
    if(user){
        console.log("Usuario logueado:")
        loginCheck(user);
      }
      else {
        console.log("Usuario no está logueado:")
        loginCheck(user);
      }
})