const camelize = require('camelize');
const connection = require('./connection');

const findAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  return camelize(result);
};

const findById = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [id],
  );
  return camelize(result);
};

const registerProduct = async (name) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUE (?)',
    [name],
  );
  return insertId;
};

const updateProduct = async (id, name) => {
  const [result] = await connection.execute(
    'UPDATE StoreManager.products SET name = ? WHERE id = ?',
    [name, id],
  );
  return camelize(result);
};

module.exports = {
  findAll,
  findById,
  registerProduct,
  updateProduct,
};
