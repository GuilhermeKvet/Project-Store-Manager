const productModel = require('../models/productsModel');
const { saleInputsSchema } = require('./validations/schemas');

const validateExistenceInputsSale = (req, res, next) => {
  const { error } = saleInputsSchema.validate(req.body);
  if (error) {
    return res.status(error.details[0].type === 'any.required' ? 400 : 422)
      .json({ message: error.message.replace('[0].', '').replace('[1].', '') });
  }
  return next();
};

const validateExistenceIdSale = async (req, res, next) => {
  const sales = await Promise.all(
    req.body.map(async ({ productId }) => productModel.findById(productId)),
  );
  if (sales.some((sale) => sale === undefined)) {
    return res.status(404).json({ message: 'Product not found' });
  }
  next();
};

module.exports = {
  validateExistenceIdSale,
  validateExistenceInputsSale,
};