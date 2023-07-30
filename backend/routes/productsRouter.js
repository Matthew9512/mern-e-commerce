const express = require('express');
const router = express.Router();
const products = require('../controllers/products');

router.get('/', products.featuresProducts);
router.get('/category/:category', products.categoryProducts);
router.get('/q', products.searchByName);

module.exports = router;
