const API_MASCOTAS =
"/api/mascotas";

const API_PRODUCTOS =
"/api/productos";

const API_CITAS =
"/api/citas";

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
