const express = require("express");

const router = express.Router();

const {
   crearCita,
   obtenerCitas,
   actualizarCita,
   eliminarCita

} = require("../controllers/citasController");

router.get("/", obtenerCitas);

router.post("/", crearCita);

router.put("/:id", actualizarCita);

router.delete("/:id", eliminarCita);

module.exports = router;