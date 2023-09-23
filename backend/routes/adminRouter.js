const express = require('express');
const router = express.Router();
const admin = require('../controllers/admin');

router.get('/users', admin.getUsers);
router.delete('/delete-acc', admin.deleteUser);

module.exports = router;
