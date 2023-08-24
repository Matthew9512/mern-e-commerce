const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');
const verifyJwt = require('../middleware/verifyJwt');
const refreshJwt = require('../utils/refreshJwt');

router.post('/register', usersController.register);
router.post('/login', usersController.login);
router.post('/register-data', verifyJwt, usersController.usersPersonalData);
router.get('/:id', verifyJwt, usersController.getUser);
router.post('/buy', verifyJwt, usersController.buyProducts);
router.post('/logout', verifyJwt, usersController.logOut);
router.delete('/delete-acc', verifyJwt, usersController.deleteAcc);
router.post('/refresh', refreshJwt);

module.exports = router;
