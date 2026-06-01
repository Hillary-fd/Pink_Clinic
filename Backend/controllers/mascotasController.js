const Mascota = require("../models/Mascota");

const crearMascota = async(req,res)=>{

   try{

      const mascota = new Mascota(req.body);

      await mascota.save();

      res.status(201).json(mascota);

   }catch(error){

      res.status(500).json({
         error:error.message
      });

   }

}

const obtenerMascotas = async(req,res)=>{

   try{

      const mascotas = await Mascota.find();

      res.json(mascotas);

   }catch(error){

      res.status(500).json({
         error:error.message
      });

   }

}

const actualizarMascota = async(req,res)=>{

   try{

      const mascota = await Mascota.findByIdAndUpdate(
         req.params.id,
         req.body,
         { new:true }
      );

      res.json(mascota);

   }catch(error){

      res.status(500).json({
         error:error.message
      });

   }

}

const eliminarMascota = async(req,res)=>{

   try{

      await Mascota.findByIdAndDelete(req.params.id);

      res.json({
         mensaje:"Mascota eliminada"
      });

   }catch(error){

      res.status(500).json({
         error:error.message
      });

   }

}

module.exports = {
   crearMascota,
   obtenerMascotas,
   actualizarMascota,
   eliminarMascota
};