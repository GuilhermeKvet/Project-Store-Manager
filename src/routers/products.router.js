const express = require('express');
const { productsController } = require('../controllers');
const { validateProduct } = require('../middlewares/validateProduct');

const router = express.Router();

router.get('/', productsController.findAll);

router.post('/', validateProduct, productsController.registerProduct);

router.get('/:id', productsController.findById);

module.exports = router;