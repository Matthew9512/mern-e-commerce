const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');
const verifyJwt = require('../middleware/verifyJwt');
const refreshJwt = require('../utils/refreshJwt');
// const stripe = require('../config/stripe');

router.post('/register', usersController.register);
router.post('/login', usersController.login);
router.post('/register-data', verifyJwt, usersController.usersPersonalData);
router.get('/:id', verifyJwt, usersController.getUser);
// router.post('/payment-session', verifyJwt, usersController.buyProducts);
// router.post('/payment-webhook', express.json({ type: 'application/json' }), stripe.stripeWebook);
router.post('/logout', verifyJwt, usersController.logOut);
router.delete('/delete-acc', verifyJwt, usersController.deleteAcc);
router.post('/refresh', refreshJwt);

module.exports = router;
