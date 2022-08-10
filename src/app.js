const express = require("express");
const cors = require("cors");

const clienteRouter = require("./routes/cliente.router");

const app = express();

//settings
app.set("port", process.env.PORT || 4000);

//midleware
app.use(cors());
app.use(express.json());

//routes
app.use("/api/cliente", clienteRouter);

module.exports = app;
