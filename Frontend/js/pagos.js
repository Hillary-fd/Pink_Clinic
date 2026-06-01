function pagar(){

   const nombre =
   document.getElementById("nombre").value;

   const numero =
   document.getElementById("numero").value;

   const cvv =
   document.getElementById("cvv").value;

   if(
      nombre === "" ||
      numero.length < 16 ||
      cvv.length < 3
   ){

      alert("Datos inválidos");

      return;

   }

   localStorage.setItem(
      "facturaTotal",
      document.getElementById("total")?.innerText || "0"
   );

   alert("Pago realizado");

   window.location.href =
   "factura.html";

}