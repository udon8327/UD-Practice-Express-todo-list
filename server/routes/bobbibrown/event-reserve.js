const express = require('express');
const router = express.Router();

router.get('/details', (req, res) => {
  res.json({
    user: {
      isBind: 0,
      status: null
    },
    eventOptions: [
      {
        label: "新光三越店", value: "新光三越店",
        children: [
          { label: "2021-05-27", value: "2021-05-27",
            children: [
              { label: "11:00-13:00", value: "11:00-13:00"},
              { label: "14:00-16:00", value: "14:00-16:00"},
              { label: "17:00-19:00", value: "17:00-19:00"},
            ]
          },
          { label: "2021-06-30", value: "2021-06-30", 
            children: [
              { label: "12:00-15:00", value: "12:00-15:00"},
              { label: "18:00-20:00", value: "18:00-20:00"},
            ]
          },
        ]
      },
      {
        label: "台北101店", value: "台北101店",
        children: [
          { label: "2021-06-12", value: "2021-06-12",
            children: [
              { label: "11:00-13:00", value: "11:00-13:00"},
              { label: "14:00-16:00", value: "14:00-16:00"},
              { label: "17:00-19:00", value: "17:00-19:00"},
            ]
          },
          { label: "2022-01-01", value: "2022-01-01", 
            children: [
              { label: "12:00-15:00", value: "12:00-15:00"},
              { label: "18:00-20:00", value: "18:00-20:00"},
            ]
          },
        ]
      },
    ],
  });
})

router.post('/details', (req, res) => {
  res.json({
    user: {
      status: "checking"
    }
  });
})

router.post('/register', (req, res) => {
  if(req.body.code == 1234) {
    res.json();
  }else {
    res.status(400).json({
      message: "檢核碼錯誤，請重新輸入",
    })
  }
})

router.get('/cancel', (req, res) => {
  res.json();
})

router.get('/bind', (req, res) => {
  res.json();
})

router.get('/edit', (req, res) => {
  res.json();
})

router.get('/status', (req, res) => {
  res.json({
    status: null
  });
})

module.exports = router;