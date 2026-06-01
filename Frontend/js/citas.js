const API =
"http://localhost:3000/api/citas";

async function crearCita(){

const usuarioLogueado =
sessionStorage.getItem(
"usuarioId"
);

if(!usuarioLogueado){

alert(
"Debes iniciar sesión para crear citas 🐾"
);

window.location.href =
"login.html";

return;

}

const cita = {

fecha:
document.getElementById(
"fecha"
).value,

hora:
document.getElementById(
"hora"
).value,

motivo:
document.getElementById(
"motivo"
).value,

mascota:
document.getElementById(
"mascota"
).value,

usuario:
document.getElementById(
"usuario"
).value

};

await fetch(

API,

{

method:"POST",

headers:{

"Content-Type":
"application/json"

},

body:JSON.stringify(
cita
)

}

);

alert(
"Cita creada 📅"
);

cargarCitas();

}

async function cargarCitas(){

const res =
await fetch(
API
);

const citas =
await res.json();

let html = "";

citas.forEach(c=>{

html += `

<div class="card">

<h3>

🐾 ${c.mascota}

</h3>

<p>

📅 ${c.fecha}

</p>

<p>

🕒 ${c.hora}

</p>

<p>

${c.motivo}

</p>

<p>

Usuario:
${c.usuario}

</p>

<button onclick="eliminarCita('${c._id}')">

Eliminar ❌

</button>

</div>

`;

});

document.getElementById(
"citas"
).innerHTML = html;

}

async function eliminarCita(id){

const confirmar =
confirm(
"¿Eliminar cita?"
);

if(!confirmar){

return;

}

await fetch(

`${API}/${id}`,

{

method:"DELETE"

}

);

alert(
"Cita eliminada ❌"
);

cargarCitas();

}

cargarCitas();