const Cita = require("../models/Cita");

const crearCita = async(req,res)=>{

   try{

      const cita = new Cita(req.body);

      await cita.save();

      res.status(201).json(cita);

   }catch(error){

      res.status(500).json({
         error:error.message
      });

   }

}

const obtenerCitas = async(req,res)=>{

   try{

      const citas = await Cita.find();

      res.json(citas);

   }catch(error){

      res.status(500).json({
         error:error.message
      });

   }

}

const actualizarCita = async(req,res)=>{

   try{

      const cita = await Cita.findByIdAndUpdate(
         req.params.id,
         req.body,
         { new:true }
      );

      res.json(cita);

   }catch(error){

      res.status(500).json({
         error:error.message
      });

   }

}

const eliminarCita = async(req,res)=>{

   try{

      await Cita.findByIdAndDelete(req.params.id);

      res.json({
         mensaje:"Cita eliminada"
      });

   }catch(error){

      res.status(500).json({
         error:error.message
      });

   }

}

module.exports = {
   crearCita,
   obtenerCitas,
   actualizarCita,
   eliminarCita
};