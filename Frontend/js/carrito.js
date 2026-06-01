async function cargarCarrito(){

const usuario =
sessionStorage.getItem(
"usuarioId"
);

if(!usuario){

document.getElementById(
"productosCarrito"
).innerHTML =

"<p>Inicia sesión para ver tu carrito 🛒</p>";

return;

}

const llaveCarrito =
`carrito_${usuario}`;

const carrito =
JSON.parse(
localStorage.getItem(
llaveCarrito
)) || [];

const contenedor =
document.getElementById(
"productosCarrito"
);

contenedor.innerHTML="";

if(carrito.length===0){

contenedor.innerHTML=

"<p>Carrito vacío 🛒</p>";

return;

}

let total = 0;

for(const id of carrito){

const respuesta =
await fetch(

`http://localhost:3000/api/productos/${id}`

);

const producto =
await respuesta.json();

total += producto.precio;

contenedor.innerHTML += `

<div class="card">

<h3>

${producto.nombre}

</h3>

<p>

${producto.descripcion}

</p>

<p>

Categoría:
${producto.categoria}

</p>

<p>

₡${producto.precio}

</p>

<button onclick="eliminar('${id}')">

Eliminar ❌

</button>

</div>

`;

}

contenedor.innerHTML += `

<h2>

Total: ₡${total}

</h2>

`;

}

function eliminar(id){

const usuario =
sessionStorage.getItem(
"usuarioId"
);

const llaveCarrito =
`carrito_${usuario}`;

let carrito =
JSON.parse(
localStorage.getItem(
llaveCarrito
)) || [];

const indice =
carrito.indexOf(id);

if(indice>-1){

carrito.splice(
indice,
1
);

}

localStorage.setItem(

llaveCarrito,

JSON.stringify(
carrito
)

);

cargarCarrito();

}

async function finalizarCompra(){

const usuario =
sessionStorage.getItem(
"usuarioId"
);

if(!usuario){

alert(
"Debes iniciar sesión para comprar 🐾"
);

window.location.href =
"login.html";

return;

}

const llaveCarrito =
`carrito_${usuario}`;

const carrito =
JSON.parse(
localStorage.getItem(
llaveCarrito
)) || [];

if(carrito.length===0){

alert(
"Tu carrito está vacío"
);

return;

}

let total = 0;

for(const id of carrito){

const respuesta =
await fetch(

`http://localhost:3000/api/productos/${id}`

);

const producto =
await respuesta.json();

total += producto.precio;

}

alert(

`🐾 FACTURA PINK CARE

Productos: ${carrito.length}

Total: ₡${total}

¡Gracias por tu compra 💗`

);

localStorage.removeItem(
llaveCarrito
);

cargarCarrito();

}

cargarCarrito();