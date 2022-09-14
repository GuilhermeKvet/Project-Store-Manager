const salesService = require('../services/salesService');
const errorMap = require('../utils/errorMap');

const registerSale = async (req, res) => {
  const { type, message } = await salesService.registerSale(req.body);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  return res.status(201).json(message);
};

const findAll = async (req, res) => {
  const { type, message } = await salesService.findAll();
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  return res.status(200).json(message);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.findById(id);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  return res.status(200).json(message);
};

const deleteSale = async (req, res) => {
  const { id } = req.params;
  await salesService.deleteSale(id);
  return res.status(204).json();
};

module.exports = {
  registerSale,
  findAll,
  findById,
  deleteSale,
};