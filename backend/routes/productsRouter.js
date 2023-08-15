const express = require('express');
const router = express.Router();
const products = require('../controllers/products');

router.get('/', products.featuresProducts);
router.get('/page/:page', products.featuresProducts);
router.get('/category/:category', products.categoryProducts);
router.get('/q', products.searchByName);
router.get('/:id', products.getProduct);

module.exports = router;
