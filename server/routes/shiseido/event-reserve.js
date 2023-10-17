const express = require('express');
const router = express.Router();

router.get('/403', (req, res) => {
  res.status(403).json({
    data: [],
    message: "TOKEN驗證失敗",
    status: false
  });
})

router.get('/500', (req, res) => {
  res.status(500).json({
    data: [],
    message: "Oops! Something went wrong.",
    status: false
  });
})

module.exports = router;