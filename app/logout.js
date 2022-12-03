
import { signOut } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { auth } from "./firebase.js"

const logout = document.querySelector("#Logout");
logout.addEventListener("click", async () => {
    await signOut(auth);
    console.log("Sign out")
})