import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import {auth} from "./firebase.js";
import { showMessage } from "./showMessage.js";

const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", async (e) => {

    e.preventDefault();
    const loginEmail = document.querySelector("#login-email").value;
    const loginPsswd = document.querySelector("#login-psswd").value;

    console.log("Login Email",loginEmail);
    console.log("Login Psswd",loginPsswd);


    try {
        const credentials = await signInWithEmailAndPassword(auth, loginEmail, loginPsswd);
        console.log(credentials);

        const loginModal = document.querySelector("#loginModal");
        const modal = bootstrap.Modal.getInstance(loginModal);
        modal.hide();

        showMessage("Bienvenido "+loginEmail);
        
    }catch (e){
        console.log(e.message);
        console.log(e.code);
    
        if (e.code === "auth/wrong-password") {
            showMessage("Contraseña incorrecta","failure");
        } else if (e.code == "auth/user-not-found") {
            showMessage("Usuario no encontrado","failure");
        } else {
          showMessage("Unknown error " + e.code,"failure");
        }
    }
    
})