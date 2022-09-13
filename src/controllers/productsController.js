const productsService = require('../services/productsService');
const errorMap = require('../utils/errorMap');

const findAll = async (_req, res) => {
  const { message } = await productsService.getProducts();
  return res.status(200).json(message);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.getProductsById(id);

  if (type) return res.status(errorMap.mapError(type)).json({ message });

  return res.status(200).json(message);
};

const registerProduct = async (req, res) => {
  const { name } = req.body;
  const { message } = await productsService.registerProduct(name);

  return res.status(201).json(message);
};

module.exports = {
  findAll,
  findById,
  registerProduct,
};
