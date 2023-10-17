const express = require('express');
const router = express.Router();

router.use('/game-gacha', require('./game-gacha'));

module.exports = router;