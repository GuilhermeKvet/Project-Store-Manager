const salesModel = require('../models/salesModel'); 
const productModel = require('../models/productsModel');

const registerSale = async (sales) => {
  const saleId = await salesModel.insertSale();
  const itemsSold = await Promise.all(sales.map(async ({ productId, quantity }) => {
    const product = await productModel.findById(Number(productId));
    if (!product) return 0;
    await salesModel.registerSaleProduct(saleId, product.id, quantity);
    return { productId: product.id, quantity };
  }));
  if (itemsSold.some((product) => product === 0)) {
    return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  }
  return { type: null, message: { id: saleId, itemsSold } };
};

module.exports = {
  registerSale,
};