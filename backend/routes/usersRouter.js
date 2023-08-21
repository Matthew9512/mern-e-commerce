const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

router.post('/register', usersController.register);
router.post('/register-data', usersController.usersPersonalData);
router.post('/login', usersController.login);
router.get('/:id', usersController.getUser);
router.post('/buy', usersController.buyProducts);
router.delete('/delete-acc', usersController.deleteAcc);

module.exports = router;
