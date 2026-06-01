async function crearProducto(){

const producto = {

nombre:
document.getElementById(
"nombre"
).value,

precio:Number(
document.getElementById(
"precio"
).value
),

stock:Number(
document.getElementById(
"stock"
).value
),

categoria:
document.getElementById(
"categoria"
).value,

descripcion:
document.getElementById(
"descripcion"
).value

};

const respuesta = await fetch(

"/api/productos",

{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify(
producto
)

}

);

if(respuesta.ok){

alert(
"Producto agregado 🛍️"
);

cargarProductos();

}else{

alert(
"Error agregando producto"
);

}

}

async function cargarProductos(){

const respuesta = await fetch(

"http://localhost:3000/api/productos"

);

const productos =
await respuesta.json();

const contenedor =
document.getElementById(
"listaProductos"
);

contenedor.innerHTML="";

productos.forEach(producto=>{

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

Stock:
${producto.stock}

</p>

<p>

₡${producto.precio}

</p>

<button onclick="agregarCarrito('${producto._id}')">

Agregar al carrito 🛒

</button>

<button onclick="eliminarProducto('${producto._id}')">

Eliminar ❌

</button>

</div>

`;

});

}

function agregarCarrito(id){

const usuario =
sessionStorage.getItem(
"usuarioId"
);

if(!usuario){

alert(
"Debes iniciar sesión para agregar productos 🐾"
);

window.location.href =
"login.html";

return;

}

const llaveCarrito =
`carrito_${usuario}`;

let carrito =
JSON.parse(

localStorage.getItem(
llaveCarrito
)

) || [];

carrito.push(id);

localStorage.setItem(

llaveCarrito,

JSON.stringify(
carrito
)

);

alert(
"Producto agregado al carrito 🛒"
);

}

async function eliminarProducto(id){

const confirmar =
confirm(
"¿Eliminar producto?"
);

if(!confirmar){

return;

}

await fetch(

`http://localhost:3000/api/productos/${id}`,

{

method:"DELETE"

}

);

alert(
"Producto eliminado ❌"
);

cargarProductos();

}

cargarProductos();
