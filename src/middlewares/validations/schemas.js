const Joi = require('joi');

const saleValuesSchema = Joi.object({
  productId: Joi.number().required(),
  quantity: Joi.number().min(1).required(),
});

const saleInputsSchema = Joi.array().items(saleValuesSchema);

module.exports = {
  saleValuesSchema,
  saleInputsSchema,
};
