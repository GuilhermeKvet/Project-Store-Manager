const express = require('express');
const { productsController } = require('../controllers');
const { validateProduct } = require('../middlewares/validateProduct');
const { validateUpdateProduct } = require('../middlewares/validateSale');

const router = express.Router();

router.get('/', productsController.findAll);

router.post('/', validateProduct, productsController.registerProduct);

router.get('/:id', productsController.findById);

router.put('/:id', validateUpdateProduct, productsController.updateProduct);

module.exports = router;