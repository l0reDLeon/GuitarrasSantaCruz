import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { showMessage } from "./showMessage.js";

const signUpForm = document.querySelector("#signup-form");

signUpForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const signUpEmail = document.querySelector("#signup-email").value;
  const signUpPsswd = document.querySelector("#signup-psswd").value;

  console.log(signUpEmail, signUpPsswd);

  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      signUpEmail,
      signUpPsswd
    );
    console.log(userCredentials);

    const signupModal = document.querySelector("#signUpModal");
    const modal = bootstrap.Modal.getInstance(signupModal);
    modal.hide();
    showMessage("Registro exitoso, bienvenido "+signUpEmail)

  } catch (e) {
    console.log(e.message);
    console.log(e.code);

    if (e.code == "auth/email-already-in-use") {
        showMessage("El email "+signUpEmail + " ya está en uso, por favor intente con otro","failure");
    } else if (e.code == "auth/invalid-email") {
        showMessage("El email "+signUpEmail + " es invalido, por favor intente con otro","failure");
    } else if (e.code == "auth/weak-password") {
        showMessage("La contraseña  "+signUpPsswd + " es demasiado débil, por favor intente con otra más larga","failure");
    } else {
      showMessage("Unknown error " + e.code,"failure");
    }
  }
});
