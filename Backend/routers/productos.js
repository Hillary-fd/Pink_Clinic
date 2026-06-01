const express = require("express");

const router = express.Router();

const Producto = require("../models/Producto"); // NUEVO

const {
   crearProducto,
   obtenerProductos,
   actualizarProducto,
   eliminarProducto

} = require("../controllers/productosController");

router.get("/", obtenerProductos);

// NUEVO ↓↓↓
router.get("/:id", async(req,res)=>{

   try{

      const producto =
      await Producto.findById(
         req.params.id
      );

      res.json(producto);

   }catch(error){

      res.status(500).json({
         error:error.message
      });

   }

});
// NUEVO ↑↑↑

router.post("/", crearProducto);

router.put("/:id", actualizarProducto);

router.delete("/:id", eliminarProducto);

module.exports = router;