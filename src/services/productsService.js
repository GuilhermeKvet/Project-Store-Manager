const productsModel = require('../models/productsModel');

const getProducts = async () => {
  const products = await productsModel.findAll();
  return { type: null, message: products };
};

const getProductsById = async (id) => {
  const product = await productsModel.findById(Number(id));
  if (!product) return { type: 'WITHOUT_PRODUCTS', message: 'Product not found' };
  return { type: null, message: product };
};

module.exports = {
  getProducts,
  getProductsById,
};