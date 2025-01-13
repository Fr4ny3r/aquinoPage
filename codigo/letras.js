
window.addEventListener("DOMContentLoaded", ()=>{
const head = document.querySelector(".header");
const body = document.querySelector("body");
const letras = document.querySelectorAll(".letter-change");

const widthPantalla = document.querySelector(".header");
const widthBody = document.querySelector("body");




// <---------------------  LETRAS RANDOM  ---------------------> \\


const alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z","#","$","!","%","&","/","<",">","(",")","=","@","~","€"];
numeroRandom = (numero)=>{return Math.floor(Math.random()*numero)}
letras.forEach(l=> l.textContent = alfabeto[numeroRandom(alfabeto.length)] )
function letraRandom(){

    letras.forEach(letra => {

        if(letra.id !== letra.textContent){
            letra.textContent = alfabeto[numeroRandom(alfabeto.length)]  
        }else if (letra.id == letra.textContent){
            letra.textContent = `${letra.id}` 
        }
    
});}setInterval(letraRandom, 20)


// <---------------------  FONTS RANDOM  ---------------------> \\


fo = ['"kanit", serif',`"Pixelify Sans", serif`,"'courier New'","Arial Narrow", "Courier", "monospace", "'Franklin Gothic Medium'","Gill Sans", "Tahoma", "Times New Roman", "Helvetica", "cursive", "Georgia", "cochin", "Arial", "Times", "Verdana", "Lucida Sans Regular", "Roboto", "Cambria","fantasy","Trebuchet MS", "BlickMacSystemFont","Segoe UI"];
function letran(numero){return Math.floor(Math.random()*numero)}
function letraChange(){
    let fontChange = `kanit, serif`;
    letras.forEach(letra => {

        estiloComputado = window.getComputedStyle(letra);
        letraf = estiloComputado.fontFamily;

    if ((letraf !== fontChange)) { 
        if (letraf == fontChange) {
            estiloComputado = window.getComputedStyle(letra);
            letraf = estiloComputado.fontFamily;
            le = document.querySelectorAll(".letras");
            le.forEach(lr =>{lr.setAttribute("style",`font-family: "kanit", serif;`)})
        }
    }if (letraf !== fontChange) {letra.setAttribute("style",`font-family: ${fo[letran(fo.length)]};`);}
});}setInterval(letraChange, 20)



let animatioBiografia = `animation: mo .7s both 0s;`;
let biografiaTitulo = document.querySelector(".biografia-titulo");
let biografia = document.querySelector(".biografia");
let capibara = document.querySelector(".capi-i");
biografiaTitulo.addEventListener("click",()=>{window.open("https://the-aquinopedia.fandom.com/es/wiki/Aquino")})
function biografiaT(){if (window.scrollY >= 80){biografiaTitulo.setAttribute("style", animatioBiografia);}else if (window.scrollY <= 20){}}setInterval(biografiaT,10);
function biografiaP(){if (window.scrollY >= 80){biografia.setAttribute("style", animatioBiografia);}else if (window.scrollY <= 20){}}setInterval(biografiaP,10);
function capi(){if (window.scrollY >= 80){capibara.setAttribute("style", `animation: cap .7s both .2s;`);}else if (window.scrollY <= 20){}}setInterval(capi,10);


let twitt = document.querySelector(".shadow-publi");
twitt.addEventListener("click", ()=>{window.open("https://twitter.com/AQUINOby_02")})






// pa = ()=>{window.scrollX(0)};setInterval(pa, 100)

}

