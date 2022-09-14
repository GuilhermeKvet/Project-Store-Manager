const express = require('express');
const { salesController } = require('../controllers');
const { validateIdSale } = require('../middlewares/validateSale');
const {
  validateExistenceIdProduct,
  validateExistenceInputsSale,
} = require('../middlewares/validateSaleProduct');

const router = express.Router();

router.post('/',
  validateExistenceInputsSale,
  validateExistenceIdProduct,
  salesController.registerSale);

router.get('/', salesController.findAll);

router.get('/:id', salesController.findById);

router.delete('/:id', validateIdSale, salesController.deleteSale);

module.exports = router;