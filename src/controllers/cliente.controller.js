const clienteCtrl = {};

const Cliente = require("../models/Cliente");

clienteCtrl.getClientes = async (req, res) => {
  const clientes = await Cliente.find();
  res.json(clientes);
};

clienteCtrl.getCliente = async (req, res) => {
  const cliente = await Cliente.findById(req.params.id);
  res.json(cliente);
};

clienteCtrl.createCliente = async (req, res) => {
  const { nombres, apellidos, cedula, telefono } = req.body;
  const newCliente = new Cliente({
    nombres,
    apellidos,
    cedula,
    telefono,
  });
  const cliente = await newCliente.save();
  res.json(cliente);
};

clienteCtrl.updateCliente = async (req, res) => {
  const { id } = req.params;
  const { nombres, apellidos, cedula, telefono } = req.body;

  const updateCliente = await Cliente.findOneAndUpdate(id, req.body);
  res.json(updateCliente);
};

module.exports = clienteCtrl;
