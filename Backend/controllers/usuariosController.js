const Usuario = require("../models/Usuario");

const crearUsuario = async(req,res)=>{

   try{

      const usuario = new Usuario(req.body);

      await usuario.save();

      res.status(201).json(usuario);

   }catch(error){

      res.status(500).json({
         error:error.message
      });

   }

}

const obtenerUsuarios = async(req,res)=>{

   try{

      const usuarios = await Usuario.find();

      res.json(usuarios);

   }catch(error){

      res.status(500).json({
         error:error.message
      });

   }

}

const actualizarUsuario = async(req,res)=>{

   try{

      const usuario = await Usuario.findByIdAndUpdate(

         req.params.id,

         req.body,

         { new:true }

      );

      res.json(usuario);

   }catch(error){

      res.status(500).json({
         error:error.message
      });

   }

}

const eliminarUsuario = async(req,res)=>{

   try{

      await Usuario.findByIdAndDelete(
         req.params.id
      );

      res.json({
         mensaje:"Usuario eliminado"
      });

   }catch(error){

      res.status(500).json({
         error:error.message
      });

   }

}

module.exports = {

   crearUsuario,
   obtenerUsuarios,
   actualizarUsuario,
   eliminarUsuario

};