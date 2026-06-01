const express = require("express");

const router = express.Router();

const {

   crearUsuario,
   obtenerUsuarios,
   actualizarUsuario,
   eliminarUsuario

} = require("../controllers/usuariosController");

router.get("/", obtenerUsuarios);

router.post("/", crearUsuario);

router.put("/:id", actualizarUsuario);

router.delete("/:id", eliminarUsuario);

module.exports = router;