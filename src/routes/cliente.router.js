const { Router } = require("express");

const {
  getClientes,
  getCliente,
  createCliente,
  updateCliente,
} = require("../controllers/cliente.controller");

const router = Router();

router.get("/", getClientes);

router.get("/:id", getCliente);

router.post("/", createCliente);

router.put("/:id", updateCliente);

module.exports = router;
