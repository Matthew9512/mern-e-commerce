const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
   console.log('hi');
});

module.exports = router;
