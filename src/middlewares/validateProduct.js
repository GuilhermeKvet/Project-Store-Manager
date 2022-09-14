const productModel = require('../models/productsModel');
const { updateInputProduct } = require('./validations/schemas');

const validateProduct = (req, res, next) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: '"name" is required' });
  if (name.length < 5) {
    return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
  }
  return next();
};

const validateIdProduct = async (req, res, next) => {
  const { id } = req.params; 
  const result = await productModel.findById(id);
  if (!result) return res.status(404).json({ message: 'Product not found' });
  return next();
};

const validateUpdateProduct = async (req, res, next) => {
  const { name } = req.body;
  const { error } = updateInputProduct.validate({ name });
  if (error) {
    return res.status(error.details[0].type === 'any.required' ? 400 : 422)
      .json({ message: error.message.replace('[0].', '').replace('[1].', '') });
  }
  return next();
};

module.exports = {
  validateProduct,
  validateIdProduct,
  validateUpdateProduct,
};