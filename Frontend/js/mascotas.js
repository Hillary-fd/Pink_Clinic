const API =
"/api/mascotas";

async function guardarMascota(){

   const mascota = {

      nombre:document.getElementById("nombre").value,

      especie:document.getElementById("especie").value,

      raza:document.getElementById("raza").value,

      edad:document.getElementById("edad").value,

      dueño:document.getElementById("dueno").value

   };

   await fetch(API,{

      method:"POST",

      headers:{
         "Content-Type":"application/json"
      },

      body:JSON.stringify(mascota)

   });

   alert("Mascota registrada");

   cargarMascotas();

}

async function cargarMascotas(){

   const respuesta =
   await fetch(API);

   const mascotas =
   await respuesta.json();

   let html = "";

   mascotas.forEach(mascota => {

      html += `

      <div class="card">

         <h3>${mascota.nombre}</h3>

         <p>${mascota.especie}</p>

         <p>${mascota.raza}</p>

         <p>${mascota.edad} años</p>

         <p>Dueño: ${mascota.dueño}</p>

      </div>

      `;

   });

   document.getElementById(
      "listaMascotas"
   ).innerHTML = html;

}

cargarMascotas();
