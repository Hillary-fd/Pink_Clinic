const express = require("express");
const dotenv = require("dotenv");
const dns = require("dns");
const cors = require("cors");
const conectarDB = require("./config/db");

dns.setServers(["8.8.8.8", "8.8.4.4"]);
dotenv.config({ path: "../.env" });
conectarDB();

const app = express();
app.use(cors());
app.use(express.json());
const path = require("path");
app.use(express.static(path.join(__dirname, "../Frontend")));

// Rutas
app.use("/api/usuarios", require("./routers/usuarios"));
app.use("/api/mascotas", require("./routers/mascotas"));
app.use("/api/citas", require("./routers/citas"));
app.use("/api/productos", require("./routers/productos"));
app.use("/api/login",require("./routers/login"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor iniciado en puerto ${PORT}`);
});