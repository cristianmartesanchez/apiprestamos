const { Schema, model } = require("mongoose");

const prestamoShema = new Schema(
  {
    numero:{
      type: Number,
      unique:true,
      required:true
    },
    fecha: {
      type: Date,
      default: Date.now,
    },
    cliente: [
      {
        type: Schema.Types.ObjectId,
        ref: "Cliente",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = model("Prestamo", prestamoShema);
