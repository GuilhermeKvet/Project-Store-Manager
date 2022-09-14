const camelize = require('camelize');
const connection = require('./connection');

const registerSaleProduct = async (saleId, productId, quantity) => {
  const [{ affectedRows }] = await connection.execute(
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUE (?, ?, ?)',
    [saleId, productId, quantity],
  );
  return affectedRows;
};

const findAll = async () => {
    const [result] = await connection.execute(
    `SELECT sale_id, date, product_id, quantity
    FROM StoreManager.sales_products AS sp
    INNER JOIN StoreManager.sales AS s
    ON sp.sale_id = s.id`,
  );
  return camelize(result);
};

const findById = async (id) => {
  const [result] = await connection.execute(
    `SELECT date, product_id, quantity
    FROM StoreManager.sales_products AS sp
    INNER JOIN StoreManager.sales AS s
    ON sp.sale_id = s.id
    WHERE id = ?`,
    [id],
  );
  return camelize(result);
};

const updateSaleProduct = async (saleId, productId, quantity) => {
  const [{ affectedRows }] = await connection.execute(
    `UPDATE StoreManager.sales_products
    SET product_id = ?, quantity = ?
    WHERE sale_id = ? AND product_id = ?`,
    [productId, quantity, saleId, productId],
  );
  return affectedRows;
};

module.exports = {
  registerSaleProduct,
  findAll,
  findById,
  updateSaleProduct,
};