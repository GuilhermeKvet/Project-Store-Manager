const express = require('express');
const { salesController } = require('../controllers');
const { validateSale } = require('../middlewares/validateSale');

const router = express.Router();

router.post('/', validateSale, salesController.registerSale);

module.exports = router;