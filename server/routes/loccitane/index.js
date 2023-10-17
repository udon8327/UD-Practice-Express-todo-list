const express = require('express');
const router = express.Router();

router.use('/sampling', require('./sampling'));

module.exports = router;