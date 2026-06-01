async function registrar(){

   const nombre =
   document.getElementById("nombre").value.trim();

   const correo =
   document.getElementById("correo").value.trim();

   const password =
   document.getElementById("password").value;

   if(nombre === ""){

      alert("Ingrese un nombre");

      return;

   }

   if(!correo.includes("@")){

      alert("Correo inválido");

      return;

   }

   if(password.length < 6){

      alert(
         "La contraseña debe tener mínimo 6 caracteres"
      );

      return;

   }

   const usuario = {

      nombre,
      correo,
      password

   };

   try{

      const respuesta = await fetch(
         "/api/usuarios",
         {

         method:"POST",

         headers:{
            "Content-Type":"application/json"
         },

         body:JSON.stringify(usuario)

      });

      const data = await respuesta.json();

      console.log(data);

      alert("Usuario registrado correctamente");

      window.location.href =
      "login.html";

   }catch(error){

      console.log(error);

      alert("Error al registrar");

   }

}
