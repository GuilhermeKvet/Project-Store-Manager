const errorMap = {
  PRODUCT_NOT_FOUND: 404,
  SALE_NOT_FOUND: 404,
  SALE_PRODUCT_NOT_FOUND: 404,
  INVALID_VALUE: 422,
  WITHOUT_PRODUCTS: 404,
};

const mapError = (type) => errorMap[type] || 500;

module.exports = {
  errorMap,
  mapError,
};