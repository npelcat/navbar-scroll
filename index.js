// CORRECTION :

let lastScroll = 0;

// Window.SCROLLY est le niveau de scroll actuel qui est déclenché lors de l'évènement.

window.addEventListener("scroll", () => {
    if (window.scrollY < lastScroll) {
// La navbar a un ID en HTML donc pas besoin de la déclarer.
        navbar.style.top = 0;
    } else {
        navbar.style.top = "-60px";
    }
// Valeur attribuée. Mais comparaison a faire avant !
    lastScroll = window.scrollY;
});


//MY JOB :

// const nav = document.querySelector("nav");
// let prevScroll = window.scrollY;

// window.addEventListener("scroll", () =>{
//     const currentScroll = window.scrollY;

//     if (prevScroll > currentScroll) {
//         nav.style.top = 0;
//     }
//     else {
//         nav.style.top = "-60px";
//     }
//     prevScroll = currentScroll;
// });
