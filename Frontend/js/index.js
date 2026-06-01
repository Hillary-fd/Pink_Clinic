const slides = [

{
badge:"✂️ GROOMING",
titulo:"Que luzca hermosa tu mascota 🐾",
texto:"Servicio profesional de grooming y baño.",
emoji:"🐩"
},

{
badge:"🩺 CONSULTAS",
titulo:"Consulta veterinaria especializada",
texto:"Cuidamos la salud de perros y gatos.",
emoji:"🐶"
},

{
badge:"💉 VACUNACIÓN",
titulo:"Protección y vacunas",
texto:"Prevención para una vida saludable.",
emoji:"🐱"
}

];

let actual = 0;

function cambiarSlide(){

document.getElementById(
"badge"
).textContent =
slides[actual].badge;

document.getElementById(
"tituloHero"
).textContent =
slides[actual].titulo;

document.getElementById(
"textoHero"
).textContent =
slides[actual].texto;

document.getElementById(
"emojiHero"
).textContent =
slides[actual].emoji;

const dots =
document.querySelectorAll(
".slider-dots span"
);

dots.forEach(dot=>{

dot.classList.remove(
"active"
);

});

dots[actual].classList.add(
"active"
);

actual++;

if(actual >= slides.length){

actual = 0;

}

}

cambiarSlide();

setInterval(

cambiarSlide,

3000

);