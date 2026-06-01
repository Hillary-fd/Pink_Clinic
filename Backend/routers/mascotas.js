const express = require("express");

const router = express.Router();

const {
   crearMascota,
   obtenerMascotas,
   actualizarMascota,
   eliminarMascota

} = require("../controllers/mascotasController");

router.get("/", obtenerMascotas);

router.post("/", crearMascota);

router.put("/:id", actualizarMascota);

router.delete("/:id", eliminarMascota);

module.exports = router;