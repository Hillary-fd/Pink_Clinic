const mongoose = require("mongoose");

const citaSchema = new mongoose.Schema({

   fecha:{
      type:String,
      required:true
   },

   hora:{
      type:String,
      required:true
   },

   motivo:{
      type:String,
      required:true
   },

   mascota:{
      type:String,
      required:true
   },

   usuario:{
      type:String,
      required:true
   },

   estado:{
      type:String,
      default:"Pendiente"
   }

},{
   timestamps:true
});

module.exports = mongoose.model("Cita", citaSchema);