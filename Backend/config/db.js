const mongoose = require("mongoose");
const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const conectarDB = async () => {
    try {
        console.log("URI:", process.env.MONGO_URI);
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongo conectado");
    } catch(error) {
        console.log(error);
    }
}

module.exports = conectarDB;