const { Schema, model } = require("mongoose");

const clienteShema = new Schema(
  {
    nombres: {
      type: String,
      required: true,
    },
    apellidos: {
      type: String,
      required: true,
    },
    cedula: {
      type: String,
      required: true,
      unique: true,
    },
    telefono: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Cliente", clienteShema);
