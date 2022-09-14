const Joi = require('joi');

const saleValuesSchema = Joi.object({
  productId: Joi.number().required(),
  quantity: Joi.number().min(1).required(),
});

const saleInputsSchema = Joi.array().items(saleValuesSchema);

const updateInputProduct = Joi.object({
  name: Joi.string().min(5).required(),
});

module.exports = {
  saleValuesSchema,
  saleInputsSchema,
  updateInputProduct,
};
