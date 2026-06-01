const mongoose = require("mongoose");

const mascotaSchema = new mongoose.Schema({

   nombre:{
      type:String,
      required:true
   },

   especie:{
      type:String,
      required:true
   },

   raza:{
      type:String
   },

   edad:{
      type:Number
   },

   dueño:{
      type:String,
      required:true
   }

},{
   timestamps:true
});

module.exports = mongoose.model("Mascota", mascotaSchema);