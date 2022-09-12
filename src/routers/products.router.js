const express = require('express');
const { productsController } = require('../controllers');

const router = express.Router();

router.get('/', productsController.findAll);

router.post('/', productsController.registerProduct);

router.get('/:id', productsController.findById);

module.exports = router;