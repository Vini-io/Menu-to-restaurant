
let time = false;


let clickDarkMode = document.querySelector(".trade-mode").addEventListener("click", () => {


    let circle = document.querySelector(".circle").classList;
    let body = document.querySelector(".body").classList;

    let darkModeMenu = document.querySelector(".darkMode-menu").classList;
    let darkModeCafe = document.querySelector(".darkMode-cafe").classList;
    let darkModeAlmoco = document.querySelector(".darkMode-almoco").classList;
    let darkModeLanche = document.querySelector(".darkMode-lanche").classList;
    let darkModeJantar = document.querySelector(".darkMode-jantar").classList;
    let darkModeBebidas = document.querySelector(".darkMode-bebidas").classList;
    let darkModeSobremesas = document.querySelector(".darkMode-sobremesas").classList;



    darkModeCafe.toggle("hoverDark")
    darkModeAlmoco.toggle("hoverDark")
    darkModeLanche.toggle("hoverDark")
    darkModeJantar.toggle("hoverDark")
    darkModeBebidas.toggle("hoverDark")
    darkModeSobremesas.toggle("hoverDark")


    darkModeMenu.toggle("color-darkMode");
    darkModeCafe.toggle("color-darkMode");
    darkModeAlmoco.toggle("color-darkMode");
    darkModeLanche.toggle("color-darkMode");
    darkModeJantar.toggle("color-darkMode");
    darkModeBebidas.toggle("color-darkMode");
    darkModeSobremesas.toggle("color-darkMode");
    body.toggle("body-bg-darkMode");

    circle.toggle("move-circle");



    let darkModeTrade = document.querySelector(".trade-mode");

    if(time == false){
        darkModeTrade.style.background = "#fff";
        time = true;
    }else{
        darkModeTrade.style.background = "#151568";
        time = false;
    }







})





