const express = require('express');
const router = express.Router();

router.all('/', (req, res) => {
  // console.log(`post from ${req.ip}:${req.port}`);
  let temp = {
    code: "000",
    data: {},
    message: ""
  }
  temp.data = req.body;
  if(req.body.code) {
    temp.code = req.body.code;
    delete temp.data.code;
  }
  if(req.body.message) {
    temp.message = req.body.message;
    delete temp.data.message;
  }
  req.params.status ? res.status(req.params.status).json(temp) : res.json(temp);
});

router.all('/:status', (req, res) => {
  // console.log(`post from ${req.ip}:${req.port}`);
  // let status = req.params.status && ["2", "3"].indexOf(String(req.params.status).split('')[0]) !== -1;
  let temp = {
    code: "000",
    data: {},
    message: ""
  }
  temp.data = req.body;
  if(req.body.code) {
    temp.code = req.body.code;
    delete temp.data.code;
  }
  if(req.body.message) {
    temp.message = req.body.message;
    delete temp.data.message;
  }
  req.params.status ? res.status(req.params.status).json(temp) : res.json(temp);
});

router.all('/:status/:message', (req, res) => {
  // console.log(`post from ${req.ip}:${req.port}`);
  // let status = req.params.status && ["2", "3"].indexOf(String(req.params.status).split('')[0]) !== -1;
  let temp = {
    code: "000",
    data: {},
    message: ""
  }
  temp.data = req.body;
  if(req.body.code) {
    temp.code = req.body.code;
    delete temp.data.code;
  }
  if(req.params.message) temp.message = req.params.message;
  if(req.body.message) {
    temp.message = req.body.message;
    delete temp.data.message;
  }
  req.params.status ? res.status(req.params.status).json(temp) : res.json(temp);
});

module.exports = router;