const API_CITAS =
"http://localhost:3000/api/citas";

const API_MASCOTAS =
"http://localhost:3000/api/mascotas";

async function cargarHistorial(){

   const citasRes =
   await fetch(API_CITAS);

   const mascotasRes =
   await fetch(API_MASCOTAS);

   const citas =
   await citasRes.json();

   const mascotas =
   await mascotasRes.json();

   let htmlCitas = "";

   citas.forEach(cita => {

      htmlCitas += `

      <div class="card">

         <h3>${cita.mascota}</h3>

         <p>${cita.fecha}</p>

         <p>${cita.motivo}</p>

         <p>${cita.estado || "Pendiente"}</p>

      </div>

      `;

   });

   let htmlMascotas = "";

   mascotas.forEach(mascota => {

      htmlMascotas += `

      <div class="card">

         <h3>${mascota.nombre}</h3>

         <p>${mascota.especie}</p>

         <p>${mascota.raza}</p>

      </div>

      `;

   });

   document.getElementById(
      "historialCitas"
   ).innerHTML = htmlCitas;

   document.getElementById(
      "historialMascotas"
   ).innerHTML = htmlMascotas;

}

cargarHistorial();