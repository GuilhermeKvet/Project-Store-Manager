const express = require('express');
const { salesController } = require('../controllers');
const {
  validateExistenceIdProduct,
  validateExistenceInputsSale,
} = require('../middlewares/validateSale');

const router = express.Router();

router.post('/',
  validateExistenceInputsSale,
  validateExistenceIdProduct,
  salesController.registerSale);

router.get('/', salesController.findAll);

router.get('/:id', salesController.findById);

module.exports = router;