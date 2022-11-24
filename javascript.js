//Obtener todos los elementos <article> en la página
var articles = document.querySelectorAll("article");

//Iterar sobre cada elemento <article>
articles.forEach(article => {
    //Establecer la opacidad de cada elemento <article> en 0
    article.style.opacity = 0;
    
    //Cuando la página se haya cargado completamente, aumentar gradualmente la opacidad de cada elemento <article> durante 1 segundo
    window.addEventListener("load", () => {
        var fadeEffect = setInterval(() => {
            //Comprueba si la opacidad ya es 1, en cuyo caso detén el temporizador
            if (article.style.opacity == 1) {
                clearInterval(fadeEffect);
            } else {
                article.style.opacity = parseFloat(article.style.opacity) + 0.1;
            }
        }, 100);
    });
});