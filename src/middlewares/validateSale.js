const salesModel = require('../models/salesModel');

const validateIdSale = async (req, res, next) => {
  const { id } = req.params;
  const isValid = await salesModel.findById(id);
  if (isValid.length <= 0) return res.status(404).json({ message: 'Sale not found' });
  return next();
};

module.exports = {
  validateIdSale,
};