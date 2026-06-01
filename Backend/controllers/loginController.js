const Usuario = require("../models/Usuario");

const login = async(req,res)=>{

try{

const {

correo,

password

} = req.body;

const usuario =
await Usuario.findOne({

correo

});

if(!usuario){

return res.status(404).json({

mensaje:"Usuario no encontrado"

});

}

if(usuario.password !== password){

return res.status(401).json({

mensaje:"Contraseña incorrecta"

});

}

res.json({

mensaje:"Login correcto",

usuarioId:usuario._id,

nombre:usuario.nombre

});

}catch(error){

res.status(500).json({

error:error.message

});

}

}

module.exports = {

login

};