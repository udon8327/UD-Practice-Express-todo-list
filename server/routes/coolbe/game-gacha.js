const express = require('express');
const router = express.Router();

router.get('/init', (req, res) => {
  res.send('取得轉蛋資料成功');
})

module.exports = router;