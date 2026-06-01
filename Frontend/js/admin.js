const API_MASCOTAS =
"http://localhost:3000/api/mascotas";

const API_PRODUCTOS =
"http://localhost:3000/api/productos";

const API_CITAS =
"http://localhost:3000/api/citas";

async function cargarDatos(){

   const mascotas =
   await fetch(API_MASCOTAS);

   const productos =
   await fetch(API_PRODUCTOS);

   const citas =
   await fetch(API_CITAS);

   const dataMascotas =
   await mascotas.json();

   const dataProductos =
   await productos.json();

   const dataCitas =
   await citas.json();

   document.getElementById(
      "totalMascotas"
   ).innerText = dataMascotas.length;

   document.getElementById(
      "totalProductos"
   ).innerText = dataProductos.length;

   document.getElementById(
      "totalCitas"
   ).innerText = dataCitas.length;

}

cargarDatos();