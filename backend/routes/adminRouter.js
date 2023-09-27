const express = require('express');
const router = express.Router();
const admin = require('../controllers/admin');

// user
router.get('/users/page/:page', admin.getUsers);
router.get('/users-details/page/:page/:id', admin.getUsersDetails);
router.delete('/delete-account', admin.deleteUser);

// products
router.get('/products/page/:page', admin.getProducts);
router.post('/products/create', admin.createNewProducts);
router.put('/products/:id/edit', admin.editProduct);
router.delete('/delete-product', admin.deleteProduct);

// orders
router.get('/orders/page/:page', admin.getOrders);

module.exports = router;
