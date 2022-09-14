const express = require('express');
const { salesController } = require('../controllers');
const {
  validateExistenceIdSale,
  validateExistenceInputsSale,
} = require('../middlewares/validateSale');

const router = express.Router();

router.post('/',
  validateExistenceInputsSale,
  validateExistenceIdSale,
  salesController.registerSale);

router.get('/', salesController.findAll);

router.get('/:id', salesController.findById);

module.exports = router;