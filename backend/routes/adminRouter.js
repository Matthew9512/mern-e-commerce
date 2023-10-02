const express = require('express');
const router = express.Router();
const admin = require('../controllers/admin');
const verifyJwt = require('../middleware/verifyJwt');
const verifyRoles = require('../middleware/verifyRoles');

// user
router.get('/users/page/:page', verifyJwt, verifyRoles, admin.getUsers);
router.get('/users-details/page/:page/:id', admin.getUsersDetails);
router.delete('/delete-account', admin.deleteUser);

// products
router.get('/products/page/:page', admin.getProducts);
router.post('/products/create', admin.createNewProducts);
router.put('/products/:id/edit', admin.editProduct);
router.delete('/delete-product', admin.deleteProduct);

// orders
router.get('/orders/page/:page', admin.getOrders);

// statistics
router.get('/statistics', admin.getStatistics);

module.exports = router;
