const connection = require('./connection');

const insertSale = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales VALUE ()',
  );
  return insertId;
};

const registerSaleProduct = async (saleId, productId, quantity) => {
  const [{ affectedRows }] = await connection.execute(
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUE (?, ?, ?)',
    [saleId, productId, quantity],
  );
  return affectedRows;
};

const findSaleId = async (saleId) => {
  const [{ insertId }] = await connection.execute(
    'SELECT * FROM StoreManager.sale WHERE id = ?',
    [saleId],
  );
  return insertId;
};

module.exports = {
  registerSaleProduct,
  insertSale,
  findSaleId,
};