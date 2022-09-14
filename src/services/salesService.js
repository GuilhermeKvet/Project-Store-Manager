const salesModel = require('../models/salesModel'); 

const registerSale = async (sales) => {
  const saleId = await salesModel.insertSale();
  const itemsSold = await Promise.all(sales.map(async ({ productId, quantity }) => {
    await salesModel.registerSaleProduct(saleId, productId, quantity);
    return { productId, quantity };
  }));
  return { type: null, message: { id: saleId, itemsSold } };
};

const findAll = async () => {
  const sales = await salesModel.findAll();
  if (!sales) return { type: 'SALE_NOT_FOUND', message: 'Sales not found' };
  return { type: null, message: sales };
};

const findById = async (id) => {
  const sale = await salesModel.findById(Number(id));
  if (sale.length < 1) return { type: 'SALE_NOT_FOUND', message: 'Sale not found' };
  return { type: null, message: sale };
};

module.exports = {
  registerSale,
  findAll,
  findById,
};