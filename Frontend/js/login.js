async function iniciarSesion(){

const correo =
document.getElementById(
"correo"
).value;

const password =
document.getElementById(
"password"
).value;

const respuesta =
await fetch(

"/api/login",

{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

correo,
password

})

}

);

const data =
await respuesta.json();

if(respuesta.ok){

sessionStorage.setItem(

"usuarioId",

data.usuarioId

);

window.location.href =
"index.html";

}else{

alert(

data.mensaje

);

}

}
