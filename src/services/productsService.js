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

const registerProduct = async (name) => {
  const id = await productsModel.registerProduct(name);
  return { type: null, message: { id, name } };
};

const updateProduct = async (id, name) => {
  await productsModel.updateProduct(id, name);
  return { type: null, message: { id, name } };
};

const deleteProduct = async (id) => {
  await productsModel.deleteProduct(id);
}; 

const findProduct = async (query) => {
  const products = await productsModel.findAll();
  const result = products
    .filter((product) => product.name.toLowerCase().includes(query.toLowerCase()));
  if (result.length <= 0) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  return { type: null, message: result };
};

module.exports = {
  getProducts,
  getProductsById,
  registerProduct,
  updateProduct,
  deleteProduct,
  findProduct,
};