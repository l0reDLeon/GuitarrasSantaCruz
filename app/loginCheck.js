//Este archivo intenta verificar si el usuario está logueado o no

const loggedOutLinks = document.querySelectorAll(".logged-out");
const loggedInLinks = document.querySelectorAll(".logged-in");

console.log(loggedOutLinks);
console.log(loggedInLinks);

export const loginCheck = user =>{
    if(user){
      console.log("ESTE ES UN MENSAJE");
      console.log(user);
      loggedOutLinks.forEach(link => link.style.display = 'none');
      loggedInLinks.forEach(link => link.style.display = 'block');
      
    }
    else {
        loggedOutLinks.forEach(link => link.style.display = 'block');
        loggedInLinks.forEach(link => link.style.display = 'none');
        
    }
}