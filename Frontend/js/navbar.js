document.addEventListener(
"DOMContentLoaded",
()=>{

const login =
document.getElementById(
"btnLogin"
);

const logout =
document.getElementById(
"btnLogout"
);

const usuario =
sessionStorage.getItem(
"usuarioId"
);

if(usuario){

login.style.display =
"none";

logout.style.display =
"inline";

}

logout.addEventListener(
"click",
()=>{

sessionStorage.clear();

window.location.href =
"login.html";

});

});