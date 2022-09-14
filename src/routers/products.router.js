const express = require('express');
const { productsController } = require('../controllers');
const { validateProduct, validateIdProduct } = require('../middlewares/validateProduct');
const { validateUpdateProduct } = require('../middlewares/validateProduct');

const router = express.Router();

router.get('/', productsController.findAll);

router.post('/', validateProduct, productsController.registerProduct);

router.get('/:id', productsController.findById);

router.put('/:id', validateIdProduct, validateUpdateProduct, productsController.updateProduct);

router.delete('/:id', validateIdProduct, productsController.deleteProduct);

module.exports = router;