const express = require('express');
const router = express.Router();

router.use('/event-reserve', require('./event-reserve'));

module.exports = router;