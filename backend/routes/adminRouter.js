const express = require('express');
const router = express.Router();
const admin = require('../controllers/admin');

// user
router.get('/users/page/:page', admin.getUsers);
router.get('/users-details/page/:page/:id', admin.getUsersDetails);
router.get('/users-details/page/:page/:id/q', admin.sortUsersDetails);
router.delete('/delete-account', admin.deleteUser);
router.get('/users/page/:page/q', admin.sortUsers);

// products
router.get('/products/page/:page', admin.getProducts);
router.post('/products/create', admin.createNewProducts);
router.put('/products/:id/edit', admin.editProduct);
router.put('/products/:id/update-images', admin.editProductImg);
router.delete('/delete-product', admin.deleteProduct);
router.get('/products/page/:page/q', admin.sortProducts);

// orders
router.get('/orders/page/:page', admin.getOrders);
router.get('/orders/page/:page/q', admin.sortOrders);

// statistics
router.get('/statistics', admin.getStatistics);

// sale
router.post('/manage-sale', admin.manageSale);

module.exports = router;
