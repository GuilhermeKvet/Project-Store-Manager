const salesProductModel = require('../models/salesProductModel'); 
const saleModel = require('../models/salesModel');

const registerSale = async (sales) => {
  const saleId = await saleModel.insertSale();
  const itemsSold = await Promise.all(sales.map(async ({ productId, quantity }) => {
    await salesProductModel.registerSaleProduct(saleId, productId, quantity);
    return { productId, quantity };
  }));
  return { type: null, message: { id: saleId, itemsSold } };
};

const findAll = async () => {
  const sales = await salesProductModel.findAll();
  if (!sales) return { type: 'SALE_NOT_FOUND', message: 'Sales not found' };
  return { type: null, message: sales };
};

const findById = async (id) => {
  const sale = await salesProductModel.findById(Number(id));
  return { type: null, message: sale };
};

const updateSale = async (saleId, sale) => {
  const itemsUpdated = await Promise.all(sale.map(async ({ productId, quantity }) => {
    await salesProductModel.updateSaleProduct(saleId, productId, quantity);
    return { productId, quantity };
  }));
  return { type: null, message: { saleId, itemsUpdated } };
};

const deleteSale = async (id) => {
  await saleModel.deleteSale(id);
};

module.exports = {
  registerSale,
  findAll,
  findById,
  updateSale,
  deleteSale,
};