const express = require('express');
const router = express.Router();
const products = require('../controllers/products');

router.get('/', products.getProducts);
router.get('/page/:page', products.getProducts);
router.get('/category/:category', products.categoryProducts);
router.get('/q', products.searchByName);
router.get('/:id', products.getProductByID);

module.exports = router;
