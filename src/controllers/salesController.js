const salesService = require('../services/salesService');
const errorMap = require('../utils/errorMap');

const registerSale = async (req, res) => {
  const { type, message } = await salesService.registerSale(req.body);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  return res.status(201).json(message);
};

module.exports = {
  registerSale,
};