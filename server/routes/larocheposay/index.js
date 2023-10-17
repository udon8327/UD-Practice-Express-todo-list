const express = require('express');
const router = express.Router();

router.use('/event-mission', require('./event-mission'));

module.exports = router;