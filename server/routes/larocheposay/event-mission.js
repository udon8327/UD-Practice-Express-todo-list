const express = require('express');
const router = express.Router();

router.get('/init', (req, res) => {
  res.json({
    user: {
      missionList: [0, 0, 1],
      count: 10
    }
  });
})

router.get('/video', (req, res) => {
  res.json();
})

module.exports = router;