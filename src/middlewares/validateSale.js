const productModel = require('../models/productsModel');
const { saleInputsSchema, updateInputProduct } = require('./validations/schemas');

const validateIdProduct = async (req, res, next) => {
  const { id } = req.params; 
  const result = await productModel.findById(id);
  if (!result) return res.status(404).json({ message: 'Product not found' });
  return next();
};

const validateExistenceInputsSale = (req, res, next) => {
  const { error } = saleInputsSchema.validate(req.body);
  if (error) {
    return res.status(error.details[0].type === 'any.required' ? 400 : 422)
      .json({ message: error.message.replace('[0].', '').replace('[1].', '') });
  }
  return next();
};

const validateExistenceIdProduct = async (req, res, next) => {
  const sales = await Promise.all(
    req.body.map(async ({ productId }) => productModel.findById(productId)),
  );
  if (sales.some((sale) => sale === undefined)) {
    return res.status(404).json({ message: 'Product not found' });
  }
  next();
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
  validateIdProduct,
  validateExistenceIdProduct,
  validateExistenceInputsSale,
  validateUpdateProduct,
};