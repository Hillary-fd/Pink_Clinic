const carrito =
JSON.parse(
localStorage.getItem("carrito")
) || [];

let total = 0;

let html = "";

carrito.forEach(producto=>{

   total += producto.precio;

   html += `

   <div class="card">

      <h3>${producto.nombre}</h3>

      <p>₡${producto.precio}</p>

   </div>

   `;

});

html += `

<h2>Total: ₡${total}</h2>

`;

document.getElementById(
"detalleFactura"
).innerHTML = html;

localStorage.removeItem(
"carrito"
);