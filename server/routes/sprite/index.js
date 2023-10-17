const express = require('express');
const router = express.Router();

router.use('/game-wheel', require('./game-wheel'));

module.exports = router;